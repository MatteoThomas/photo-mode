import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion/dist/framer-motion";

const Hero = () => {
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.5 }}
    >
      <Jumbotron>
        <Title>
          Photomode <br />
          <span>Upload, Share, Explore</span>
        </Title>
      </Jumbotron>
    </motion.div>
  );
};

export default Hero;

const Jumbotron = styled.div`
  color: aliceblue;

  background-color: transparent;
  & span {
    line-height: 0.2em;
    font-family: "Raleway", sans-serif;
    font-size: 0.25em;
    letter-spacing: 0.1em;
  }
`;

const Title = styled.div`
  text-align: center;
  font-size: clamp(5rem, 6vw, 17rem);
  font-family: "Kaushan Script", cursive;
  letter-spacing: -0.2rem;
  line-height: 2rem;
  width: 100vw;
  margin: 5rem 0 0 0;
`;
