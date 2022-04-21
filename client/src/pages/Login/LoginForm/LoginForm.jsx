import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "../../../components/Button/Button.style";

import { StyledInputWrapper } from "../../../components/Input/Input.style";
import { ButtonsWrapper, Input  } from "./LoginForm.style";

function LoginForm() {
  const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function loginUser(event) {
    setLoading(true)
    event.preventDefault();

      // axios.post("http://localhost:8080/api/auth/signin", {
        axios.post("https://photo-mode.herokuapp.com/api/auth/signin", {
        username: username,
        password: password,
      }).then((response) => {
       {response.data.error == null ?
     (window.localStorage.setItem("user", JSON.stringify(response)))
    (window.location.href = "/dashboard") 
    : alert("Check Name and Password")}
      }).catch((err) => {
       
        console.log(err + "!")
      })
  
    }

    return (
      <>      {!loading ? 
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
