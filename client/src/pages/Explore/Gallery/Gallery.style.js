import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const GalleryMotion = styled(motion.div)``;
export const CardMotion = styled(motion.div)``;

export const Image = styled.img`
  padding: 0.5rem;
  width: 220px;
  height: 220px;
  transition: all 2s;
  object-fit: cover;
  @media (max-width: 415px) {
    transition: all 2s;
    width: 100%;
    height: 100%;
  }
`;
export const ImageContainer = styled.div`
  /* margin: 0 auto; */
  /* display: flex;
  flex-wrap: wrap; */
  /* flex-direction: column; */
  /* word-break: break-all; */
  /* align-items: center; */
  /* width: 100%; */
  color: transparent;
  transition: all 0.4s;
`;

export const ImageInfo = styled.div`
  /* display: flex;
  justify-content: space-between;
  padding: 0 0.5rem 0.5rem 0.5rem;
  color: aliceblue; */
`;

export const Loading = styled.h3`
  color: aliceblue;
`;
