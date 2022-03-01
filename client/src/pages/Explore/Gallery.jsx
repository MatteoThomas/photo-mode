import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components"
import {motion} from 'framer-motion/dist/framer-motion'

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  //GET IMAGES ON RENDER
  useEffect(() => {
    async function populateUserGallery() {
      const req = await fetch("http://localhost:8080/api/gallery");
      const data = await req.json();
      
      if (data.status === "ok") {
        const count = data.results.total_count;
        const resources = data.results.resources;
        const images = resources.map((resource) => {
          return {
            id: resource.asset_id,
            // title: resource.display_name,
            image: resource.secure_url,
            name: resource.public_id,
            folder: resource.folder,
            //REMOVES THE NON MM/DD/YY CHARACTERS
            date: resource.uploaded_at.split("T")[0],
            count: count,
          };
        });
      //RANDOMIZES images ORDER
      images.sort(() => Math.random() - 0.5)
      setGallery(images);
        return <div></div>;

      } else {
        alert(data.error);
      }
    }
    populateUserGallery();
  }, []);
  
  const container = {
    hidden: { 
      opacity: 0
     },
    show: { 
      opacity: 1
  }}

  return (

    <StyledContainer>

      {gallery.map((img, i) => (
        <motion.div 
        key={img.name}
        variants={container}
        initial="hidden"
        animate="show"
        transition={{ delay: i * .05}}
        >
        <ImageContainer>
          <Image src={img.image} alt={img.desc}/>
          <ImageInfo>
        <div>{img.folder}</div> <div> {img.date}</div>
        </ImageInfo>
        </ImageContainer>
        </motion.div>
      ))}
    </StyledContainer>
)}

export default Gallery
  
const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: clamp(350px,90%, 1200px);
  margin: 3rem 0 0 0;
`

const Image = styled.img`
  padding:.5rem .5rem 0 .5rem;
  width: 200px;
  transition: all .4s;
`
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: transparent;
  transition: all .4s;
  &:hover {
    transition: all .4s;
    color: aliceblue;
  }
`

const ImageInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 .5rem .5rem .5rem;
`