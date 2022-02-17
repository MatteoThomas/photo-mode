import React from "react";
import Gallery from "./Gallery";
import { useEffect } from "react";
import jwt from "jsonwebtoken";

// import style from "styled-components";

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
    <>
      <h1>Explore</h1>
      <Gallery />
    </>
  );
};

export default Explore;
