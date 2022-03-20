import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

export const HeroMotion = styled(motion.div)``;

export const Jumbotron = styled.div`
  color: aliceblue;
  background-color: transparent;
  & span {
    line-height: 0.2em;
    font-family: "Raleway", sans-serif;
    font-size: 0.25em;
    letter-spacing: 0.1em;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: clamp(5rem, 6vw, 17rem);
  font-family: "Kaushan Script", cursive;
  letter-spacing: -0.2rem;
  line-height: 2rem;
  width: 100vw;
  margin: 5rem 0 0 0;
`;
