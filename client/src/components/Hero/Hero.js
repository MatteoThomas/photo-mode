import React from "react";
import { HeroMotion, Jumbotron, Title } from "./Hero.style";

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
    <HeroMotion
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
    </HeroMotion>
  );
};

export default Hero;
