import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const GalleryMotion = styled(motion.div)``;

export const Image = styled.img`
  padding: 0.5rem 0.5rem 0 0.5rem;
  width: 200px;
  transition: all 0.4s;
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: transparent;
  transition: all 0.4s;
  &:hover {
    transition: all 0.4s;
    color: aliceblue;
  }
`;

export const ImageInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem 0.5rem 0.5rem;
`;
