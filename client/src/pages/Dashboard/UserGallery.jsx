import React, {useState} from "react";
import styled from "styled-components";

import deleteIcon  from "./icons/delete-icon.png"
import editIcon  from "./icons/edit-icon.png";
import commentIcon  from "./icons/comment-icon.png"

import { motion } from 'framer-motion/dist/framer-motion'


const UserGallery = ({ userGallery }) => {
  const [ imgToDelete, setImgToDelete] = useState("");
  //VARIANT OBJECT FOR ANIMATION    
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  function handleClick(e, images) {
  console.log(images.name)
  setImgToDelete(images.name)
  deleteImage()
}
console.log(imgToDelete)

  const DeleteEl = styled.img`
    /* background-color: aqua; */
    margin:.5rem;
    width: 25px;
  ` 

  async function deleteImage() {
    const req = await fetch(`http://localhost:8080/api/deleteImage?deleteImage=${imgToDelete}`, {
    });
    const data = await req.json();
    if (data.status === "ok") { 
      console.log(data)
      
    } else {
      alert(data.error);
    }
  }

  function ImageCard() {
    return (
      <>  
        {userGallery.map((images, i) => (
            <motion.div 
              key={images.image}
              variants={container}
              initial="hidden"
              animate="show"
              transition={{ delay: i * .03}}
            >
              <Name>{images.title}</Name>
              <Image 
                src={images.image}
                alt={images.desc}
                value={images.name} 
                 />

              <DeleteEl
                value={images.title}
                onClick={((e) => handleClick(e, images))}
                src={deleteIcon}
              />
            
            </motion.div>
        ))}
      </>   
    )}

  //RENDERS THE USERS IMAGE UPLOADS IF userGallery.length IS GREATER THAN 0
  const galleryContainer = userGallery.length > 0 && <ImageCard />

  return (
    <GalleryContainer>
      {galleryContainer}
    </GalleryContainer>
)}

export default UserGallery

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: clamp(350px, 95%, 1000px);
  margin: 3rem auto;
`

const Icon = styled.img`
  width: 20px;
  margin: 1rem;
  filter: invert(.7);
  opacity: .5;
&:hover {
    opacity: 1;
}
`

const Image = styled.img`
  width: 250px;
`

const Name = styled.h2`
  font-size: 1rem;
  margin: 1rem 0;
  width: 150px;
  color: aliceblue;
  word-break: break-all;
`