import React, { useEffect } from "react";
import  Gallery  from "./Gallery/Gallery";
import { Title } from "./Explore.style";
import { StyledContainer } from "../../components/Container/Container.style";
import AnimatedPage from "../../animation/AnimatedPage";

const Explore = () => {

  useEffect(() => {

  }, []);

  return (
    <AnimatedPage>
    <StyledContainer >
      <Title>
      <h1>Explore</h1>
      </Title>
      <Gallery />
    </StyledContainer>
    </AnimatedPage>
  );
};

export default Explore;
