import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

function App() {
  // const [isSubmitted, setIsSubmitted] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();
    // setIsSubmitted(true);
    const response = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.user == null) {
      alert("Check your name and password");
    } else {
      localStorage.setItem("token", data.user);
      // alert("Good job, you logged in");
      window.location.href = "/dashboard";
    }
  }

  //LOGIN FORM
  const renderForm = (
    <form onSubmit={loginUser}>
      <div className="input-container">
        <label>Email</label>
        <br />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          required
          placeholder="Email"
        />
      </div>

      <div className="input-container">
        <label>Password</label>
        <br />
        <Input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Email"
        />
        <br />
        <ButtonsWrapper>
          <StyledButton className="Btn" type="submit" value="Login">
            Login
          </StyledButton>

          <Link className="link" to="/Register">
            <StyledButtonLink className="Btn">Register</StyledButtonLink>
          </Link>
        </ButtonsWrapper>
      </div>
    </form>
  );

  return (
    <>
      <StyledContainer>
        <div className="app">
          <LoginHeading>Log In</LoginHeading>
          <div className="login-form">{renderForm}</div>
        </div>
      </StyledContainer>
    </>
  );
}

export default App;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 1rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(5px);
  width: clamp(300px, 95%, 600px);
  color: antiquewhite;
  margin: 5rem auto;
`;

const LoginHeading = styled.h1`
  font-family: "Raleway" sans-serif;
  font-size: 3rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;
`;
const StyledButton = styled(Button)`
  background-color: aquamarine;
  color: black;
  border: 1px transparent solid;
  margin: 1rem 2rem 0 0;
  width: fit-content;
  border: 1px transparent solid;
  &:hover {
    background-color: transparent;
    border: 1px aquamarine solid;
  }
`;

const StyledButtonLink = styled(Button)`
  background-color: transparent;
  color: antiquewhite;
  border: 1px transparent solid;
  margin: 1rem 0 0 0;
  width: fit-content;
  border: 1px aquamarine solid;
  &:hover {
    color: black;
    border: 1px transparent solid;
    background-color: aquamarine;
  }
`;
const Input = styled.input`
  border-radius: 4px;
  border: none;
  width: clamp(300px, 95%, 600px);
  margin: 0.3rem 0 2rem 0;
`;
