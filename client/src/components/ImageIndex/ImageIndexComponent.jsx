import React, { useEffect, useState } from "react";
import { ImageContainer, Pic, Gradient } from "./ImageIndexComponent.style";
// import { imgIndex } from "./ImagesIndex";
import { useDispatch } from "react-redux";
import { getLandingGallery } from "../../slices/cloudinary"

const ImgIndexComponent = () => {
  const userName = ""
  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch(); 
  
  useEffect(() => {
    
  const landingGallery = async() => {
    setLoading(true);
    dispatch(getLandingGallery({ userName }))
    .unwrap()
    .then(function(response)  {

        let resources = response.results.resources
        const images = resources.map((resource) => {
          return {
            image: resource.secure_url,
          };
        })
        images.sort(() => Math.random() - 0.5)
        const index = images;
        const randomIndex = Math.floor(Math.random() * index.length);
        setPicture(index[randomIndex].image)
      
      })
    }
    landingGallery();
  }, []);
  

        

  return (
    {picture} ? 
    <ImageContainer>
      <Pic src={picture}/>
      <Gradient />
    </ImageContainer>
    :
    <div></div>
    
  );
};

export default ImgIndexComponent;

