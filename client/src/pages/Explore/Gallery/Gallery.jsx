
import React, { useState, useEffect } from "react";
import { StyledContainer, GalleryMotion, Image, ImageContainer, ImageInfo } from "./Gallery.style";


import  ImageModal  from "./ImageModal";

const Gallery = () => {
  const [userName, setUserName] = useState("");
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [singleImage, setSingleImage] = useState("")
  const [singleImageUser, setSingleImageUser] = useState("")

  const openModal = (e) => {
    setShowModal(prev => !prev);
    setSingleImage(e.target.src)
    setSingleImageUser(e.target.name)
  };

  useEffect(() => {
    const getName = async() => {

      const localName = await JSON.parse(window.localStorage.getItem('user'));
      if (localName !== null) {
        //SETS userName
        setUserName(localName.username);
      } else {
        alert("userName not set");
      }}
      
      async function exploreGallery() {
        // const req = await fetch("https://photo-mode.herokuapp.com/api/cloudinary/gallery");
        const req = await fetch("http://localhost:8080/api/cloudinary/gallery");
        const data = await req.json();
        console.log(data)
        if (data.status === "ok") {

          const resources = data.results.resources;

        const images = resources.map((resource) => {
                return {
                  user: resource.public_id.split("/")[0],
                  folder: resource.public_id.split("/")[0],
                  image: resource.url,
                  name: resource.public_id.split("/")[1],
                  id: resource.asset_id,
                };
        })
        console.log(images[0].image)
              setGallery(images);
              setLoading(false);
            }
          }

      getName();
      exploreGallery();
      }, [userName]);
 
      return (
        <>         
        {loading ? <h1>Loading...</h1> : null}
        {showModal ?
        <ImageModal 
          singleImage={singleImage} 
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
        <ImageContainer >
        
          <Image
         
            name={img.user}
            src={img.image} 
            onClick={(e) => openModal(e)}
          />   

          <ImageInfo>
            <div>{img.folder} / {img.name}</div>
          </ImageInfo>
        </ImageContainer>
        </GalleryMotion>

      ))}
    </StyledContainer>
}
    </>

)}

export default Gallery
  