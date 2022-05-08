import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

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
  color: transparent;
  transition: all 0.4s;
`;

export const Loading = styled.h3`
  color: aliceblue;
`;

export const GalleryMotion = styled(motion.div)``;
export const ImageInfo = styled.div``;
export const CardMotion = styled(motion.div)``;
