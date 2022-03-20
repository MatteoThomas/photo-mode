
import React, { useState, useEffect } from "react";
import { StyledContainer, GalleryMotion, Image, ImageContainer, ImageInfo } from "./Gallery.style";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  //GET IMAGES ON RENDER
  useEffect(() => {

    async function populateUserGallery() {
      const req = await fetch("http://localhost:8080/api/cloudinary/gallery");
      const data = await req.json();
      
      if (data.status === "ok") {
        let resources = data.results.resources
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
        <GalleryMotion
        key={img.name}
        variants={container}
        initial="hidden"
        animate="show"
        transition={{ delay: i * .04}}
        >
        <ImageContainer>

          <Image src={img.image} alt={img.desc}/>

          <ImageInfo>
        <div>{img.folder}</div> <div> {img.date}</div>
        </ImageInfo>
        </ImageContainer>
        </GalleryMotion>
      ))}
    </StyledContainer>
)}

export default Gallery
  