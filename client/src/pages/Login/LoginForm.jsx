import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    async function loginUser(event) {
      event.preventDefault();
      const response = await fetch("https://photo-mode.herokuapp.com/", {
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
            <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                required
                placeholder="Email"
            />
            <br/>
            <label>Password</label>
            <br />
            <Input
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Email"
            />
            <br />
            <ButtonsWrapper>
                <StyledButton className="Btn" type="submit" value="Login">
                    Login
                </StyledButton>
                <Link className="link" to="/Register">
                    <StyledButtonLink className="Btn">Register</StyledButtonLink>
                </Link>
            </ButtonsWrapper>
        </form>
    );
    }

export default LoginForm

const ButtonsWrapper = styled.div`
  display: flex;
`

const StyledButton = styled.button`
  background-color: #e7e7e7;
  color: black;
  border: 1px transparent solid;
  margin: 1rem 2rem 0 0;
  width: fit-content;
  border: 1px transparent solid;
  border-radius: 4px;
  transition: all 0.4s;
  height: 42px;
  &:hover {
    transition: all 0.4s;
    color: #ffffff;
    background-color: transparent;
    border: 1px grey solid;
  }
`

const StyledButtonLink = styled.button`
  background-color: transparent;
  color: aliceblue;
  border: 1px transparent solid;
  margin: 1rem 0 0 0;
  width: fit-content;
  border: 1px grey solid;
  border-radius: 4px;
  transition: all 0.4s;
  height: 42px;
  &:hover {
    transition: all 0.4s;
    color: black;
    border: 1px transparent solid;
    background-color: #ebebeb;
  }
`

const Input = styled.input`
  border-radius: 4px;
  border: none;
  width: clamp(300px, 95%, 600px);
  margin: 0.3rem 0 2rem 0;
  padding: 0 0 0 0.5rem;
`
