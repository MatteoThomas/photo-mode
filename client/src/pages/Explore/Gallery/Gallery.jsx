
import React, { useState, useEffect } from "react";
import { StyledContainer, GalleryMotion, CardMotion, Image, ImageContainer, ImageInfo } from "./Gallery.style";

import  ImageModal  from "./ImageModal";
import API from "../../../RequestMethods"
const Gallery = () => {

  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [singleImage, setSingleImage] = useState("")
  const [singleImageUser, setSingleImageUser] = useState("")
  const [singleImageName, setSingleImageName] = useState("")
  
  const openModal = (e) => {
    setShowModal(prev => !prev);
    setSingleImage(e.target.src)
    setSingleImageUser(e.target.name)
    setSingleImageName(e.target.alt)
  };

  useEffect(() => {

    async function exploreGallery() {
      // const req = await fetch("https://photo-mode.herokuapp.com/api/cloudinary/gallery");
     API.get("/api/cloudinary/gallery").then((res) => {

       const resources = res.data.results.resources;
       const images = resources.map((resource) => {
         return {
           user: resource.public_id.split("/")[0],
           folder: resource.public_id.split("/")[0],
           imageURL: resource.url,
           name: resource.public_id.split("/")[1],
           id: resource.asset_id,
         };
       })
       setGallery(images);
     }).catch(err => {
       console.log(err)
     })
            setLoading(false);
            // alert("Request timed out, refresh page.")
            // return(data.status)
        }
        exploreGallery();
      }, []);
    //RANDOMIZES ORDER OF IMAGES IN gallery
    // const shuffle = gallery => [...gallery].sort(() => Math.random() - 0.5);
    // const newGallery= shuffle(gallery);
    
    const container = {
      hidden: { opacity: 0 },
      show: { opacity: 1 }
    }

    return (
      <>         
      {loading ? <h1>Loading...</h1> : null}
      {showModal ?
        <ImageModal 
          singleImage={singleImage} 
          imageName={singleImageName}
          singleImageUser={singleImageUser} 
          showModal={showModal} 
          setShowModal={setShowModal} />  
        : 
        <StyledContainer>
          {gallery.map((img, i) => (
          <GalleryMotion
            key={img.id}
            id={i} 
            initial="hidden"
            animate="show"
            transition={{ delay: i * .04}}
          >
            <CardMotion 
                variants={container}
                initial="hidden"
                animate="show"
                transition={{ delay: i * .04}}
              >
          <ImageContainer>
            <Image
              name={img.user}
          
              alt={img.name}
              src={img.imageURL} 
              onClick={(e) => openModal(e)}
            />   
            <ImageInfo>

            </ImageInfo>
          </ImageContainer>
          </CardMotion>
          </GalleryMotion>
      ))}
    </StyledContainer>
}
    </>

)}

export default Gallery
  