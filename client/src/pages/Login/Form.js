import React, { useState } from "react";
import ReactDOM from "react-dom";

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

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={loginUser}>
        <div className="input-container">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="uname"
            required
          />

          {renderErrorMessage("uname")}
        </div>

        <div className="input-container">
          <label>Password</label>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name="pass"
            required
          />

          {renderErrorMessage("pass")}
        </div>

        <div className="button-container">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="signIn">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;
