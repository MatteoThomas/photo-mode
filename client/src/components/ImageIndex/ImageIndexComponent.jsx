import React from "react";
import { ImageContainer, Pic, Gradient } from "./ImageIndexComponent.style";
import { imgIndex } from "./ImagesIndex";

const ImgIndexComponent = () => {
  
  const randomIndex = Math.floor(Math.random() * imgIndex.length);
  const picture = imgIndex[randomIndex];

  return (
    <ImageContainer>
      <Pic src={picture} alt={imgIndex} />
      <Gradient />
    </ImageContainer>
  );
};

export default ImgIndexComponent;

