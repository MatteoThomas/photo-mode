import React from "react";
import styled from "styled-components";

const FallbackText = styled.div`
  margin: 6rem auto 0;
  font-size: 3rem;
  color: aliceblue;
  width: 100%;
  text-align: center;
`;
const FallbackComponent = () => {
  return <FallbackText>Loading...</FallbackText>;
};

export default FallbackComponent;
