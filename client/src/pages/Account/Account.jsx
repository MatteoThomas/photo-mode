import React, { useEffect, useState } from "react";
import {Container, Button, Col} from "react-bootstrap"
import "./Account.css";
import avatar from "./avatar.jpg";
import jwt from "jsonwebtoken";

const logOut = () => {
  localStorage.removeItem("token");
  console.log("it worked logout btn");
  window.location.href = "/login";
};

const Account = () => {
  const [quote, setQuote] = useState("");
  const [tempQuote, setTempQuote] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
      } else {
        populateQuote();
      }
    } else {
      //REPLACE WITH CONDITIONAL RENDERING ON NAV COMPONENT
      window.location.href = "/login";
    }
  }, []);

  async function populateQuote() {
    const req = await fetch("http://localhost:8080/api/quote", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = await req.json();
    if (data.status === "ok") {
      setQuote(data.quote);
    } else {
      alert(data.error);
    }
  }

  async function updateQuote(event) {
    event.preventDefault();
    const req = await fetch("http://localhost:8080/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        quote: tempQuote,
      }),
    });

    const data = await req.json();
    if (data.status === "ok") {
      setQuote(tempQuote);
      setTempQuote("");
    } else {
      alert(data.error);
    }
  }

  return (
    <Container className="account-container">
      <div className="row wrapper">
        <Col className="column">
          <form onSubmit={updateQuote}>
            <input
              maxLength="80"
              className="input bio-input"
              type="text"
              placeholder=" Bio"
              value={tempQuote}
              onChange={(e) => setTempQuote(e.target.value)}
            />
            <Button className="Btn" type="submit" value="Update quote">
              Update Bio
            </Button>

            <div className="bio"> {quote || "Do what now?"} </div>
          </form>
        </Col>
        <Col className="column">
          <div className="avatar">
            <img src={avatar} alt="avatar" />
        </div>
          </Col>

        <Col className="column">
          <Button className="Btn" type="button" onClick={logOut}>
            Logout
          </Button>
        </Col>
      </div>
    </Container>
  );
};

export default Account;
