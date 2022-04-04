
import React, { useState, useEffect } from "react";
import { StyledContainer, GalleryMotion, Image, ImageContainer, ImageInfo } from "./Gallery.style";
import { useDispatch } from "react-redux";
import { getExploreGallery } from "../../../slices/cloudinary";
import { motion } from 'framer-motion/dist/framer-motion'

const variants = {
  open: { scale: 3},
  closed: {  scale: 1 },
}

const container = {
  hidden: { 
    opacity: 0
   },
  show: { 
    opacity: 1
}}

const Gallery = () => {
  const [userName, setUserName] = useState("");
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch(); 
  const [isOpen, setIsOpen] = useState(false)
   //GET IMAGES ON RENDER
  useEffect(() => {

    const fetchName = async() => {
      const localName = await JSON.parse(window.localStorage.getItem('user'));
       if (localName !== null) {
        //SETS userName
        setUserName(localName.username);
        await console.log(userName)
      } else {
        alert("userName not set");
      }}

   const exploreGallery = async() => {
    setLoading(true);
    dispatch(getExploreGallery({ userName }))
    .unwrap()
    .then(function(response)  {

        let resources = response.results.resources
        console.log(resources)
        const images = resources.map((resource) => {
                return {
                  id: resource.asset_id,
                  image: resource.secure_url,
                  name: resource.public_id,
                  folder: resource.public_id,
                };
      })
              images.sort(() => Math.random() - 0.5)
              setGallery(images);
                return <div></div>;

              })
     }
     
            fetchName();
            exploreGallery();
          }, []);

const handleClick = (i) => {
  setIsOpen(isOpen => !isOpen)
}
  return (

    <StyledContainer>

      {gallery.map((img, i) => (
        <GalleryMotion

        key={img.name}
        variants={container}
        initial="hidden"
        animate="show"
        transition={{ delay: i * .04}}
        >
        <ImageContainer>
     
          <Image 
        
          src={img.image} 
          alt={img.desc}/>

          <ImageInfo>
        <div>{img.folder}</div> <div> {img.date}</div>
        </ImageInfo>
        </ImageContainer>
        </GalleryMotion>
      ))}
    </StyledContainer>
)}

export default Gallery
  