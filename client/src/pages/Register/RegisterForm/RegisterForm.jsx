import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonsWrapper, Input } from "./RegisterForm.style"

import { StyledButton } from "../../../components/Button/Button.style";
import axios from "axios";


function RenderForm()  {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState("");
  
  //FUNCTION RESTRICTS USERNAME INPUT
  const handleUserName = e => {
    if (e.key === " " || userName < 3 || userName > 10 ) {
      e.preventDefault();
      setVerify(false)
    } else {
      setVerify(true)
    }
  };

    //FUNCTION RESTRICTS PASSWORD INPUT
    const handleUserPassword = e => {
      if (e.key === " " || userName < 8 || userName > 20 ) {
        e.preventDefault();
        setVerify(false)
      } else {
        setVerify(true)
      }
    };
  

    async function registerUser(event) {
      event.preventDefault();
  
      axios.post("https://photo-mode.herokuapp.com/api/auth/signup", {
            // axios.post("http://localhost:8080/api/auth/signup", {
          username: username,
          email: email,
          password: password

      }).then((response) => {
        console.log(response.data.status)
        window.location.href = "/login"   
        }).catch((err) => {
        alert("An error occured.");
        console.log(err)
      })
  
    }
  
    return (
  
    <form onSubmit={registerUser}>

      <div className="input-container">
        <label>Name must be 3 - 10 characters, no spaces</label>
        <br />
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleUserName}
          type="text"
          required
          placeholder="Username"
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
        <label>Password must be 8 - 20 characters, no space</label>
        <br />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleUserPassword}
          type="password"
          required
          placeholder="Password"
        />
        <br />
        <label>Verify Password</label>
        <br />
        <Input
          value={verify}
          onChange={(e) => setVerify(e.target.value)}
          type="password"
          required
          placeholder="Verify Password"
        />
      </div>
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


    )
};

export default RenderForm
