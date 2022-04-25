import styled from "styled-components";
// import { motion } from "framer-motion/dist/framer-motion";

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
  width: 400px;
  height: fit-content;
  margin: 0 0 1rem 0;
  padding: 0.5rem;
  /* background-color: beige; */
`;

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & span {
    font-size: 3rem;
  }
`;
export const AvatarImg = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  margin: 0 10px 0 0;
`;

export const NoAvatar = styled.div`
  width: 80px;
  height: 70px;
`;
