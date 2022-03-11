import React from "react";
import styled from "styled-components";
import Gallery from "./Gallery";
import { useEffect } from "react";
import jwt from "jsonwebtoken";
import { motion } from 'framer-motion/dist/framer-motion'

const Explore = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
      }
    } else {
      //REPLACE WITH CONDITIONAL RENDERING ON NAV COMPONENT
      window.location.href = "/login";
    }
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <GalleryContainer
    variants={container}
    initial="hidden"
    animate="show"
    transition={{ delay: .3}}
    >
      <Title>
      <h1>Explore</h1>
      </Title>
      <Gallery />
    </GalleryContainer>
  );
};

export default Explore;

const GalleryContainer = styled(motion.div)`
  color: aliceblue;
  margin: 0 10vw;
`

const Title = styled.div`
  width: 100%;
  text-align:center ;
  border-bottom: 1px aliceblue solid;
  margin: 0 0 2rem 0;
`