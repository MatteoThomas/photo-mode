
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion/dist/framer-motion'

import { GlobalStyles } from "./GlobalStyles.style.jsx"
import { StyledAppContainer }from "./components/Container/Container.style"

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Explore from "./pages/Explore/Explore";
import Dashboard from "./pages/Dashboard/Dashboard";
import Account from "./pages/Account/Account";

import Nav from "./components/Nav/Nav";

const App = () => {
  const location = useLocation();

  //CONDITIONALLY RENDER NAV OR HEADER
  
  return (
    <StyledAppContainer>
      <GlobalStyles />
      <Nav />  
      <AnimatePresence exitBeforeEnter initial={true}>          
          <Routes location={location} key={location.pathname}>
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/explore" exact element={<Explore />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/account" exact element={<Account />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </AnimatePresence>
    </StyledAppContainer>
  );
};

export default App;

