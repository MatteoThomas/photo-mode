import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { register } from "../../../slices/auth";
import { clearMessage } from "../../../slices/message";

import { ButtonsWrapper } from "./RegisterForm.style"

import { StyledInput } from "../../../components/Input/Input.style"
import { StyledButton } from "../../../components/Button/Button.style";



function RenderForm()  {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { message } = useSelector((state) => state.message);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(clearMessage());
    }, [dispatch]);

    const handleRegister = (event) => {
      event.preventDefault();

      console.log(username)
      dispatch(register({ username, email, password }))
        .unwrap()
        .then(() => {

          window.location.href = "/login"
        })
        .catch(() => {
 
          console.log(message)
        });
    };

    return (
  
    <form onSubmit={handleRegister}>

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
