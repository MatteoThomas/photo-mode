import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import { StyledContainer, LoginHeading, LoginMotion } from "./Login.style";

const Login = () => {

  return (
    <LoginMotion>
      <StyledContainer>
        <LoginHeading >Log In</LoginHeading>
        <LoginForm/>
      </StyledContainer>
    </LoginMotion>

  )}

export default Login;
