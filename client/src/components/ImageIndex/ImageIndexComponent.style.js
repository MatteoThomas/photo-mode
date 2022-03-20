import styled from "styled-components";

export const ImageContainer = styled.div``;

export const Gradient = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  background: rgb(99, 99, 99);
  background: linear-gradient(
    180deg,
    rgba(99, 99, 99, 0.0046612394957983305) 0%,
    rgba(99, 99, 99, 0.528470763305322) 59%,
    rgba(99, 99, 99, 1) 82%
  );
  width: 100vw;
  height: 100vh;
`;

export const Pic = styled.img`
  z-index: -2;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  object-fit: cover;
  filter: opacity(0.2);
`;
