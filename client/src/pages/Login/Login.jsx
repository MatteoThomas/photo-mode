import React from "react";
import styled from "styled-components";
import { motion } from 'framer-motion/dist/framer-motion'
import LoginForm from "./LoginForm";

function Login() {

  const container = {
    hidden: { 
      opacity: 0
     },
    show: { 
      opacity: 1
  }}

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      transition={{ delay: 1}}
      >
        <StyledContainer>
        <LoginHeading>Log In</LoginHeading>
        <LoginForm/>
        </StyledContainer>
    </motion.div>

  )}

export default Login;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 1rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(5px);
  width: clamp(300px, 95%, 600px);
  color: aliceblue;
  margin: 5rem auto;
`;

const LoginHeading = styled.h1`
  font-family: "Raleway" sans-serif;
  font-size: 3rem;
`;

