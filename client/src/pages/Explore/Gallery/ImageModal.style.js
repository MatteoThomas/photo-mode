import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

export const Img = styled.img`
  width: clamp(300px, 100%, 1000px);
`;
export const ModalWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  z-index: 10;
`;

export const ModalInfoContainer = styled.div`
  display: flex;
  background-color: gray;
  width: clamp(350px, 100%, 1000px);
  height: fit-content;
  margin: 0 0 1rem 0;
  padding: 0.5rem;
`;
export const ModalInfo = styled.div``;
export const AvatarImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin: 0 0.5rem 0 0;
`;
