import React, { useEffect } from "react";
import Gallery from "./Gallery/Gallery";
import jwt from "jsonwebtoken";
import { GalleryContainer, Title } from "./Explore.style";

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
