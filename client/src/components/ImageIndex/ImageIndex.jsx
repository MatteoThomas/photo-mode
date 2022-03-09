import React from "react";

import styled from "styled-components";

import crowd from "./img/crowd.jpg";
import field from "./img/field.jpg";
import donkey from "./img/donkey.jpg";
import street from "./img/street.jpg";
import apartment from "./img/apartment.jpg";
import temple from "./img/temple.jpg";
import graves from "./img/graves.jpg";
import trainplatform from "./img/trainplatform.jpg";

const ImgIndex = () => {
  const img = [
    crowd,
    field,
    donkey,
    street,
    apartment,
    temple,
    graves,
    trainplatform,
  ];

  const randomIndex = Math.floor(Math.random() * img.length);
  const picture = img[randomIndex];

  return (
    <ImageContainer>
      <Pic src={picture} alt={img} />
      <Gradient />
    </ImageContainer>
  );
};

export default ImgIndex;

const ImageContainer = styled.div``;
const Gradient = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  background: rgb(99, 99, 99);
  background: linear-gradient(
    180deg,
    rgba(99, 99, 99, 0.0046612394957983305) 0%,
    rgba(99, 99, 99, 0.528470763305322) 59%,
    rgba(99, 99, 99, 1) 82%
  );
  width: 100vw;
  height: 100vh;
`;
const Pic = styled.img`
  z-index: -2;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  object-fit: cover;
  filter: opacity(.2);
`;
