import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonsWrapper, Input, FormContainer } from "./RegisterForm.style"
import { StyledButton } from "../../../components/Button/Button.style";
import axios from "axios";


function RenderForm()  {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState("");




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

          type="text"
          required
          placeholder="Username"
        /><br/><span>3-10 characters, no spaces</span>
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

          type="password"
          required
          placeholder="Password"
        /><br/><span>Password 8-20 characters, no spaces</span>
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
    </FormContainer>

    )
};

export default RenderForm
