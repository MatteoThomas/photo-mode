import React, { useEffect } from "react";
import Gallery from "./Gallery/Gallery";
import { Title } from "./Explore.style";
import { StyledContainer } from "../../components/Container/Container.style";

const Explore = () => {

  useEffect(() => {

  }, []);


  return (
    <StyledContainer

    >
      <Title>
      <h1>Explore</h1>
      </Title>
      <Gallery />
    </StyledContainer>
  );
};

export default Explore;
