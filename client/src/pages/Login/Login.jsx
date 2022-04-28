import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import { StyledContainer, LoginHeading } from "./Login.style";
import AnimatedPage from "../../animation/AnimatedPage";

const Login = () => {

  return (
    <AnimatedPage>
      <StyledContainer>
        <LoginHeading >Login</LoginHeading>
        <LoginForm/>
      </StyledContainer>
    </AnimatedPage>
  )}

export default Login;
