import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonsWrapper, Input, FormContainer } from "./RegisterForm.style"
import { StyledButton } from "../../../components/Button/Button.style";
import axios from "axios";


function RenderForm()  {
  const [username, setUsername] = useState("");
  const [namePassed, setNamePassed] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordPassed, setPasswordPassed] = useState(false);
  const [verify, setVerify] = useState("");
  const [allowSubmit, setAllowSubmit] = useState(false);

const nameCheck = () => {
  if(username > 3 && username < 10){
    setNamePassed(true)
  } else {
    setNamePassed(false)
  }
}

const passwordCheck = () => {
  if(password > 7 && password < 21){
    setPasswordPassed(true)
  } else {
    setPasswordPassed(false)
  }
}

const submitCheck = () => {
  if(namePassed && passwordPassed && verify) {
    setAllowSubmit(true)
  } else {
    setAllowSubmit(false)
  }}

const verifyCheck = () => {
  if(password == verify ){
    setVerify(true)
    submitCheck()
  } else {
    setVerify(false)
  }
}



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
  
<FormContainer>
    <form onSubmit={registerUser}>
      <div className="input-container">
        <label>Name </label>
        <br />
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={nameCheck}
          type="text"
          required
          placeholder="Username"
        /><span>3-10 characters, no spaces</span>
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
        <label></label>
        <br />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={passwordCheck}
          type="password"
          required
          placeholder="Password"
        /><span>Password 8-20 characters, no spaces</span>
        <br />
        <label>Verify Password</label>
        <br />
        <Input
          value={verify}
          onChange={(e) => setVerify(e.target.value)}
          onKeyDown={verifyCheck}
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
          disabled={!allowSubmit}
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
    </FormContainer>

    )
};

export default RenderForm
