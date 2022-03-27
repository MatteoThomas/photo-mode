import React, { useState } from "react";
import { Link } from "react-router-dom";


import { ButtonsWrapper } from "./RegisterForm.style"

import { StyledInput } from "../../../components/Input/Input.style"
import { StyledButton } from "../../../components/Button/Button.style";




function RenderForm()  {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    async function registerUser(event) {
      event.preventDefault();
  
      const response = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      const data = await response.json();
        console.log(data)
      if (data.status !== null) {
        window.location.href = "/login";
      }
    }
    return (
    <form onSubmit={registerUser}>

      <div className="input-container">
        <label>Name</label>
        <br />
        <StyledInput
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          required
          placeholder="Username"
        />
      </div>

      <div className="input-container">
        <label>Email</label>
        <br />
        <StyledInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          placeholder="Email"
        />
      </div>

      <div className="input-container">
        <label>Password</label>
        <br />
        <StyledInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
          placeholder="Password"
        />
        <br />
      </div>
      <ButtonsWrapper>
        <StyledButton
          buttonLabel="Register"
          className="Btn" 
          type="submit" 
          value="Register"  
        > 
        </StyledButton>
    
        <Link to="/Login">
          <StyledButton 
            buttonLabel="Login"
          >
          </StyledButton>
        </Link>
      </ButtonsWrapper>
    </form>

    )
};

export default RenderForm
