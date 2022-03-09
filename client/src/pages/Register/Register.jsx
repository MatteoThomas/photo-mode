import React from "react";
import styled from "styled-components";
import RenderForm from "./RegisterForm";
import { motion } from 'framer-motion/dist/framer-motion'

function Register() {
  
  return (

    <motion.div>
      <StyledContainer>
        <RegisterHeading>Register</RegisterHeading>
        <RenderForm/>
      </StyledContainer>
    </motion.div>

  );
}

export default Register;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 1rem;
  width: clamp(300px, 95%, 600px);
  color: aliceblue;
  margin: 5rem auto;
  overflow: hidden;
`;

const RegisterHeading = styled.h1`
  font-family: "Raleway" sans-serif;
  font-weight: 100;
  font-size: 3rem;
`;

