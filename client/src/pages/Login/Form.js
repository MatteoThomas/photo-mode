import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import "./form.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();

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
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          required
        />
      </div>

      <div className="input-container">
        <label>Password</label>
        <br />
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <Button className="Btn" type="submit" value="Login">
          Login
        </Button>
      </div>
    </form>
  );

  return (
    <>
      <Container className="form-container">
        <div className="app">
          <h1 className="log-in">Log In</h1>
          <div className="login-form">
            {isSubmitted ? <div></div> : renderForm}
            <div className="text">Or</div>
            <Link className="link" to="/Register">
              <Button className="Btn">Register</Button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
