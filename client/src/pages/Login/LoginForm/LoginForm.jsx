import React, { useState, useEffect  } from "react";
import {  Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux';
// import {  userSelector, clearState } from '../../../redux/userSlice';
import { loginUser } from "../../../redux/userSlice"
import { login } from "../../../slices/auth";
import { clearMessage } from "../../../slices/message";

import { StyledButton } from "../../../components/Button/Button.style";
import { StyledInput, StyledInputWrapper } from "../../../components/Input/Input.style";
import { ButtonsWrapper } from "./LoginForm.style";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  
  const initialValues = {
    username: "",
    password: "",
  };

  // console.log(username, password)

  const handleLogin = () => {
    setLoading(true);
    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        props.history.push("/account");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };
  if (isLoggedIn) {
    return <Navigate to="/explore" />;
  }


    return (
        <form onSubmit={handleLogin}>
            <label>Username</label>
            <br />
            <StyledInputWrapper
            >
            <StyledInput
            
            inputLabel="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                type="text"
                required
                placeholder="Username"
            ></StyledInput></StyledInputWrapper>
            <br/>
            <label>Password</label>
            <br />
            <StyledInputWrapper>
            <StyledInput
                value={password}
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Email"
            ></StyledInput></StyledInputWrapper>
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
    );
    }

export default LoginForm
