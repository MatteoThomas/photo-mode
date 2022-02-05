import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { Route, Routes } from "react-router-dom";
import Form from "./pages/Login/Form";
import Login from "../src/pages/Login/Login";
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

  return (
    <>
      {header ? (
        <div className="row">
          <Nav className="col-12" />
        </div>
      ) : (
        <>
          <Hero />
          <ImageIndex />
        </>
      )}

      <div className="container">
        <div>
          <Routes className="routes">
            <Route path="/login" exact element={<Form />} />
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
