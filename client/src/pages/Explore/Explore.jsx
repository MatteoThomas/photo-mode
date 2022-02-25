import React from "react";
import styled from "styled-components";
import Gallery from "./Gallery";
import { useEffect } from "react";
import jwt from "jsonwebtoken";
import { Container } from "react-bootstrap";

const GalleryContainer = styled(Container)`
color: aliceblue;
`
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

  return (
    <GalleryContainer>
      <h1>Explore</h1>
      <Gallery />
    </GalleryContainer>
  );
};

export default Explore;
