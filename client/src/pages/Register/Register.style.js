import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 1rem;
  width: clamp(300px, 95%, 600px);
  color: aliceblue;
  margin: 5rem auto;
  overflow: hidden;
`;

export const RegisterMotion = styled(motion.div)``;

export const RegisterHeading = styled.h1`
  font-family: "Raleway" sans-serif;
  font-weight: 100;
  font-size: 3rem;
`;
