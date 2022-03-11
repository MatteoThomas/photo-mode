import React, {useState} from "react";
import styled from "styled-components";

import deleteIcon  from "./icons/delete-icon.png"
import deleteIconRED  from "./icons/delete-iconRED.png"

import { motion } from 'framer-motion/dist/framer-motion'

const UserGallery = ({ userGallery }) => {
  const [imgToDelete, setImgToDelete] = useState("");

  //VARIANT OBJECT FOR ANIMATION    
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  function handleClick( images ) {
    setImgToDelete(images.name)
    deleteImage()
  }

  const DeleteEl = styled.img`
    margin:.5rem;
    width: 25px;
  ` 

  async function deleteImage() {
    const req = await fetch(`http://localhost:8080/api/deleteImage?deleteImage=${imgToDelete}`, {
    });
    const data = await req.json();
    //REMOVES USER NAME FROM IMAGE NAME
    const imgToDeleteName = imgToDelete.split("/")[1]
    if (data.status === "ok") { 
      alert(`${imgToDeleteName} Deleted`)
    } else {
      alert(data.error);
    }
  }
  
  function ImageCard() {
   
    return (
      <>      
      {userGallery.map((images, i) => (
          <CardContainer
          key={images.image}
          >  
            <motion.div 
           
              variants={container}
              initial="hidden"
              animate="show"
              transition={{ delay: i * .03}}
            >
              <CardHeader>
              <Name>{images.title}</Name>
              <Icon>   
              
              <DeleteEl
                value={images.title}
                onClick={(() => handleClick(images))}
                src={deleteIcon}
                /> 
                <Tooltiptext class="tooltip-text">
                  Double Click to Delete
                </Tooltiptext>
     
              </Icon>
              </CardHeader>
              <Image 
                src={images.image}
                alt={images.desc}
                value={images.name} 
                loading="lazy"
                 />
            </motion.div>
            </CardContainer>
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
  margin: 0rem 10vw;
  gap: 1rem;
`
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  background-color: transparent;
  transition: background-color .4s;

  `
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 0 .7rem;
  margin: 0 0 .5rem 0;
  background-color: #242424;
  color: #f7f7f7;
  opacity: 1;
  transition: all .4s;
  &:hover {
    transition: all .4s;
    opacity: 1;
  }
`

const Icon = styled.div`
  opacity: .5;
  transition: all 2s;
  &:hover {
    transition: all .4s;
    opacity: 1;
  } 
`

const Tooltiptext = styled.div`
  filter: opacity(0);
  width: 120px;
  background-color: #e47a83;
  color: #2e2e2e;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  ${Icon}:hover & {
    transition: all .5s;
    filter: opacity(1);
  }
`


const Image = styled.img`
  width: 220px;
`

const Name = styled.h2`
  font-size: 1rem;
  margin: 1rem 0;
  width: 150px;
  word-break: break-all;
`