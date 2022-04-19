import React, { useState, useEffect  } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import { login } from "../../../slices/auth";
import { clearMessage } from "../../../slices/message";

import { StyledButton } from "../../../components/Button/Button.style";
import { StyledInput, StyledInputWrapper } from "../../../components/Input/Input.style";
import { ButtonsWrapper } from "./LoginForm.style";



function LoginForm() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);


  
  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true);
    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        window.history.push("/dashboard");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
        console.log(message)
      });
  };

  if (isLoggedIn) {
    window.location.href = "/dashboard"
  }

    return (
      <>      {!loading ? 
        <form 
        
        onSubmit={handleLogin}>
            <label>Email</label>
            <br />
            <StyledInputWrapper>
            <StyledInput
            
            inputLabel="Username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                name="username"
                type="text"
                required
                placeholder="username"
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
        : <h1>Loading</h1>}
        </>

    );
    }

export default LoginForm
