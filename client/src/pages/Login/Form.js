import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
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

  // Generate JSX code for error message
  function renderErrorMessage(name) {
    return (
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      )
    );
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

        <div className="button-container">
          <button type="submit" value="Login">
            Login
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <div className="form-container">
      <button className="registerBtn">
        <Link to="/Register">Register</Link>
      </button>
      <div className="app">
        <div className="signIn">Log In</div>
        <div className="login-form">
          {isSubmitted ? <div></div> : renderForm}
        </div>
      </div>
    </div>
  );
}

export default App;
