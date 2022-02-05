import { useState } from "react";

import "./LoginRegister.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

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
      window.location.href = "/dashboard";
    }
  }
  const renderForm = (
    <>
      <div className="list-container">
        <div className="login-form">
          <form onSubmit={loginUser}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />

            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="login">
        <div className="title">Login</div>
        {isSubmitted ? <div>User successfully logged in</div> : renderForm}
      </div>
    </>
  );
}

export default Login;
