
import React, { useState, useEffect } from "react";
import { StyledContainer, GalleryMotion, Image, ImageContainer, ImageInfo } from "./Gallery.style";
import { useDispatch, useSelector } from "react-redux";
import { getExploreGallery } from "../../../slices/cloudinary";
// import { motion } from 'framer-motion/dist/framer-motion'
import { Link } from "react-router-dom";
import  ImageModal  from "./ImageModal";

const Gallery = () => {
  const [userName, setUserName] = useState("");
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch(); 

  const [showModal, setShowModal] = useState(false);
  const [singleImage, setSingleImage] = useState("")
  
  const openModal = (e) => {

    setShowModal(prev => !prev);
    setSingleImage(e.target.src)
  };

// console.log(showModal)
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
        

        const images = resources.map((resource) => {
                return {
                  image: resource.url,
                  name: resource.public_id,
                  folder: resource.public_id,
                  id: resource.asset_id,
                };
      })

              // images.sort(() => Math.random() - 0.5)
              setGallery(images);
            
                return <div></div>;
                
              })
            }
            setLoading(false);
            fetchName();
            exploreGallery();
          }, [userName]);

          return (
            
  <StyledContainer>
      {gallery.map((img, i) => (

        <GalleryMotion
          key={img.name}
          id={i} 
          initial="hidden"
          animate="show"
          transition={{ delay: i * .04}}
        >
        <ImageContainer
            // onClick={(e) => openModal(e)}
      
        >
          {!showModal ? 
          <Image
            src={img.image} 
            alt={img.desc}
            onClick={(e) => openModal(e)}
          /> 
          
  :
          <ImageModal singleImage={singleImage} showModal={showModal} setShowModal={setShowModal} />    
}
          <ImageInfo>
            <div>{img.folder}</div>
          
          </ImageInfo>
        </ImageContainer>
        </GalleryMotion>

      ))}
    </StyledContainer>
)}

export default Gallery
  