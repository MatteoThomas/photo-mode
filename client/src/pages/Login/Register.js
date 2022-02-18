import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import "../../App.css";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:8080/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await response.json();

    if (data.status === "ok") {
      window.location.href = "/login";
    }
    console.log(data);
    createImageFolder();
  }

  async function createImageFolder() {
    const response = await fetch("http://localhost:8080/api/folder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });
    const data = await response.json();

    if (data.status === "ok") {
      window.location.href = "/login";
    }
    console.log(data);
  }

  return (
    <Container className="register-container">
      <h1>Register</h1>
      <form className="form" onSubmit={registerUser}>
        <label>Name</label>
        <input
          className="register-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <br />
        <label>Email</label>
        <input
          className="register-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br />
        <label>Password</label>
        <input
          className="register-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <Button className="Btn" type="submit" value="Register">
          Register{" "}
        </Button>
      </form>
    </Container>
  );
}

export default Register;
