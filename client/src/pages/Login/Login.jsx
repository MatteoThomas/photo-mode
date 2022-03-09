import React from "react";
import styled from "styled-components";
import { motion } from 'framer-motion/dist/framer-motion';
import LoginForm from "./LoginForm";

const Login = () => {

  return (
    <motion.nav>
      <StyledContainer>
        <LoginHeading >Log In</LoginHeading>
        <LoginForm/>
      </StyledContainer>
    </motion.nav>

  )}

export default Login;

const StyledContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 1rem;
  width: clamp(300px, 95%, 700px);
  height:50%;
  color: aliceblue;
  margin: 5rem auto;
`

const LoginHeading = styled.h1`
  font-family: "Raleway" sans-serif;
  font-weight: 100;
  font-size: 3rem;
`

