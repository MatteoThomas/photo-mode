import React from "react";
import RenderForm from "./RegisterForm/RegisterForm";
import { StyledContainer, RegisterMotion, RegisterHeading } from "./Register.style"
import AnimatedPage from "../../animation/AnimatedPage";

function Register() {
  
  return (

<AnimatedPage>
      <StyledContainer>
        <RegisterHeading>Register</RegisterHeading>
        <RenderForm/>
      </StyledContainer>
      </AnimatedPage>

  );
}

export default Register;


