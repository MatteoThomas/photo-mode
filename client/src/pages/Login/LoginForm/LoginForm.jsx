import React, { useState, useEffect  } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {  Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import {  userSelector, clearState } from '../../../redux/userSlice';
// import { loginUser } from "../../../redux/userSlice"

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
    // console.log("useEffect")
  }, [dispatch]);
  
  const handleLogin = () => {
    setLoading(true);
    console.log(loading)
    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        console.log("dispatch")
        props.history.push("/dashboard");
        window.location.reload();

      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

    return (
        <form 
        
        onSubmit={handleLogin}>
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
