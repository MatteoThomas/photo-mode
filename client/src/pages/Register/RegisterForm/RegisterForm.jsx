import React, { useState } from "react";

import { Link } from "react-router-dom";
import { ButtonsWrapper, Input, RegisterFormContainer } from "./RegisterForm.style"
import { StyledButton } from "../../../components/Button/Button.style";

import API from "../../../RequestMethods"

function RenderForm()  {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState("");

  async function registerUser(event) {
    event.preventDefault();
      API.post("/api/auth/signup", {
    username: username,
    email: email,
    password: password
      }).then(() => {
        alert("Registration Successful");
        window.location.href = "/login"   
        }).catch((err) => {
        alert("An error occured.");
        console.log(err)
      })
    }

    return (
    <RegisterFormContainer>
      <form onSubmit={registerUser}>
        <label>User Name</label>
  
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          required
          placeholder="User Name - 3-10 characters, no spaces"
        />
        <br /> 
        <label>Email</label>
   
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          placeholder="Email"
        /><br />
        <label>Password</label>

        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
          placeholder="Password - 8-20 characters, no spaces"
        />
        <br />  
        <label>Verify Password</label>
  
        <Input
          value={verify}
          onChange={(e) => setVerify(e.target.value)}
          type="password"
          required
          placeholder="Verify Password"
        />
        {/* <Input
          value={verify}
          onChange={(e) => setVerify(e.target.value)}
          type="password"
          required
          placeholder="Verify Password"
        /> */}
      <ButtonsWrapper>
        <StyledButton
          buttonLabel="Register"
          className="Btn" 
          type="submit" 
          value="Register"  
          disabled={verify !== password}
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
    </RegisterFormContainer>
    )
};

export default RenderForm
