import React from "react";
import RenderForm from "./RegisterForm/RegisterForm";
import { StyledContainer, RegisterMotion, RegisterHeading } from "./Register.style"

function Register() {
  
  return (

    <RegisterMotion>
      <StyledContainer>
        <RegisterHeading>Register</RegisterHeading>
        <RenderForm/>
      </StyledContainer>
    </RegisterMotion>

  );
}

export default Register;


