import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledButton } from "../../components/Button/Button.style";

function RenderForm()  {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function registerUser(event) {
      event.preventDefault();
  
      const response = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await response.json();
  
      if (data.status === "ok") {
        window.location.href = "/login";
      }
    }
    return (
    <form onSubmit={registerUser}>

      <div className="input-container">
        <label>Name</label>
        <br />
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
          placeholder="Name"
        />
      </div>

      <div className="input-container">
        <label>Email</label>
        <br />
        <Input
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
        <Input
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

const ButtonsWrapper = styled.div`
  display: flex;
`;

const Input = styled.input`
  border-radius: 4px;
  border: none;
  width: clamp(300px, 95%, 600px);
  margin: 0.3rem 0 2rem 0;
  padding: 0 0 0 0.5rem;
`;
