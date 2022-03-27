import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "../../../components/Button/Button.style";
import { StyledInput, StyledInputWrapper } from "../../../components/Input/Input.style";
import { ButtonsWrapper } from "./LoginForm.style";


function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  


    async function loginUser(event) {
      event.preventDefault();
      const response = await fetch("http://localhost:8080/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      const data = await response.json();
  
      if (data.user == null) {
        alert("Check your name and password");
      } else {
        localStorage.setItem("token", data.user);
        window.location.href = "/dashboard";
      }
    }
  
    return (
        <form onSubmit={loginUser}>
            <label>Email</label>
            <br />
            <StyledInputWrapper
            >
            <StyledInput
            
            inputLabel="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                required
                placeholder="Email"
            ></StyledInput></StyledInputWrapper>
            <br/>
            <label>Password</label>
            <br />
            <StyledInputWrapper>
            <StyledInput
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Email"
            ></StyledInput></StyledInputWrapper>
            <br />
            <ButtonsWrapper>
                <StyledButton buttonLabel="Login" type="submit" value="Login">
                    Login
                </StyledButton>
                <Link className="link" to="/Register">
                    <StyledButton buttonLabel="Register">Register</StyledButton>
                </Link>
            </ButtonsWrapper>
        </form>
    );
    }

export default LoginForm
