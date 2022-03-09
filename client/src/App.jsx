import React from "react";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion/dist/framer-motion'
import styled from "styled-components";

import ImageIndex from "./components/ImageIndex/ImageIndex";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Explore from "./pages/Explore/Explore";
import SingleImage from "./pages/Explore/SingleImage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Account from "./pages/Account/Account";

const App = () => {
  const [header, setHeader] = useState(false);
  const location = useLocation();

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
    <Nav />  
  ) : (
    <>
      <Hero />
      <ImageIndex />
    </>
  );

  return (
    <PageContainer>
      {renderHeader}
      <AnimatePresence exitBeforeEnter initial={false}>          
        <Routes location={location} key={location.pathname}>
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/explore" exact element={<Explore />} />
            <Route exact path="/image/:id" component={SingleImage} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/account" exact element={<Account />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </AnimatePresence>
    </PageContainer>
  );
};

export default App;

const PageContainer = styled.div`

`