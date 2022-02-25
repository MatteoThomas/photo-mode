import React from "react";
import styled from "styled-components";
import "./Hero.css";

const Hero = () => {
  return (
    <Jumbotron>
      <Title>
        Photomode <br />
        <span>Upload, Share, Explore</span>
      </Title>
    </Jumbotron>
  );
};

export default Hero;

const Jumbotron = styled.div`
  color: antiquewhite;

  background-color: transparent;
  & span {
    line-height: 0.1em;
    font-family: "Raleway", sans-serif;
    font-size: 0.25em;
    letter-spacing: 0.1rem;
    /* border: 1px red solid; */
  }
`;

const Title = styled.div`
  /* background-color: aliceblue; */
  text-align: center;
  font-size: clamp(5rem, 6vw, 17rem);
  font-family: "Kaushan Script", cursive;
  letter-spacing: -0.2rem;
  line-height: 2rem;
  width: 100vw;
  margin: 5rem 0 0 0;
  /* padding: 2rem 0 0 0; */
  /* border: 1px rgb(235, 149, 149) solid; */
`;
