import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { useNavigate } from "react-router-dom";

import "../../App.css";
import "../Dashboard/Dashboard.css";
const Dashboard = () => {
  const history = useNavigate();
  const [quote, setQuote] = useState("");
  const [tempQuote, setTempQuote] = useState("");
  const [name, setName] = useState("");
  const [images, setImages] = useState("");

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

  async function populateName() {
    const req = await fetch("http://localhost:8080/api/login", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = await req.json();
    // console.log(data);
    if (data.status === "ok") {
      setName(data.name);
    } else {
      alert(data.error);
    }
  }

  async function populateImages() {
    const req = await fetch("http://localhost:8080/api/images", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = await req.json();
    console.log(data);
    if (data.status === "ok") {
      setImages(data.image);
    } else {
      alert(data.error);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        history.replace("/login");
      } else {
        populateQuote();
        populateName();
        populateImages();
      }
    }
  }, []);

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
    <div className="container">
      <h1>
        Dashboard for <br />
        <span className="name"> {name || "I don't know..."}</span>{" "}
      </h1>

      <h2> {quote || "Do what?"} </h2>
      <form onSubmit={updateQuote}>
        <input
          className="input"
          type="text"
          placeholder="Quote"
          value={tempQuote}
          onChange={(e) => setTempQuote(e.target.value)}
        />
        <input type="submit" value="Update quote" />
      </form>
    </div>
  );
};

export default Dashboard;
