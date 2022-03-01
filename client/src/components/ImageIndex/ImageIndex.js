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

  return <Pic src={picture} alt={img} />;
};

export default ImgIndex;

const Pic = styled.img`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  object-fit: cover;
`;
