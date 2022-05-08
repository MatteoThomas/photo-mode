import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

export const StyledContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  padding: 1rem;
  width: clamp(300px, 95%, 700px);
  height: 50%;
  color: aliceblue;
  margin: 0 auto;
`;

export const LoginHeading = styled.h1`
  font-family: "Raleway" sans-serif;
  font-weight: 100;
  font-size: 3rem;
`;

export const LoginMotion = styled(motion.div)``;
