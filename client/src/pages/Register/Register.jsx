import React from "react";
import RenderForm from "./RegisterForm/RegisterForm";
import { StyledContainer, RegisterHeading } from "./Register.style"
import AnimatedPage from "../../animation/AnimatedPage";
import { FormContainer } from "./Register.style";

function Register() {
  return (
      <AnimatedPage>
      <StyledContainer>
        <RegisterHeading>Register</RegisterHeading>
        <FormContainer>
        <RenderForm/>
        </FormContainer>
      </StyledContainer>
      </AnimatedPage>
  );
}

export default Register;


