import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "../../../components/Button/Button.style";

import { StyledInputWrapper } from "../../../components/Input/Input.style";
import { ButtonsWrapper, Input  } from "./LoginForm.style";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  
  async function loginUser(event) {
    setLoading(true)
    event.preventDefault();
    axios.post("https://photo-mode.herokuapp.com/api/auth/signin", {
    // axios.post("http://localhost:8080/api/auth/signin", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.status === "ok"){
      window.location.href = "/dashboard" 
      console.log(response.data.status)
      window.localStorage.setItem("user", JSON.stringify(response))
      } else {
        alert("Check name and password")
      }}
    ).catch(function () {
      setLoading(false)
    })
    setLoading(false)
    }

    
    return (
      <> {!loading ? 
        <form 
          onSubmit={loginUser}>
        <label>Name</label>
        <br />
          <StyledInputWrapper>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            type="text"
            required
            placeholder="Name"
            ></Input></StyledInputWrapper>
            <br/>
            <label>Password</label>
            <br />
            <StyledInputWrapper>
            <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                required
                placeholder="Password"
            ></Input></StyledInputWrapper>
            <br />
            <ButtonsWrapper>
                <StyledButton 
                  buttonLabel="Login" 
                  type="submit" 
                  value="Login">
                    Login
                </StyledButton>
                <Link className="link" to="/Register">
                    <StyledButton buttonLabel="Register">Register</StyledButton>
                </Link>
            </ButtonsWrapper>
        </form>
        : <h1>Loading</h1>}
        </>
    );
    }

export default LoginForm
