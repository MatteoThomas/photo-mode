import React from "react";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Explore from "./pages/Explore/Explore";
import Dashboard from "./pages/Dashboard/Dashboard";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Account from "./pages/Account/Account";
import ImageIndex from "./components/ImageIndex/ImageIndex";

import "./App.css";

const App = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        setHeader(false);
      } else if (user) {
        setHeader(true);
      }
    }
  }, []);

  //CONDITIONALLY RENDER NAV OR HEADER
  const renderHeader = header ? (
    <div>
      <Nav />
    </div>
  ) : (
    <>
      <Hero />
      <ImageIndex />
    </>
  );

  return (
    <>
      {renderHeader}
      <div className="container">
        <div>
          <Routes className="routes">
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/explore" exact element={<Explore />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/account" exact element={<Account />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
