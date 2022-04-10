
import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion/dist/framer-motion'

import { GlobalStyles } from "./GlobalStyles.style.jsx"
import { StyledContainer }from "./components/Container/Container.style"
import ImageIndex from "./components/ImageIndex/ImageIndexComponent";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Explore from "./pages/Explore/Explore";
import Dashboard from "./pages/Dashboard/Dashboard";
import Account from "./pages/Account/Account";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";

const App = () => {
  const location = useLocation();
  const { user: currentUser } = useSelector((state) => state.auth);

  //CONDITIONALLY RENDER NAV OR HEADER
  const renderHeader = currentUser ? 
    <Nav />  
   : 
    <>
      <Hero />
      <ImageIndex />
    </>
  ;

  return (
    <StyledContainer>
      <GlobalStyles />
      {renderHeader}
      <AnimatePresence exitBeforeEnter initial={true}>          
          <Routes location={location} key={location.pathname}>
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/explore" exact element={<Explore />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/account" exact element={<Account />} />
            {/* <Route exact path="/image/:id" component={SingleImage} /> */}
            <Route path="*" element={<Login />} />
          </Routes>
        </AnimatePresence>
    </StyledContainer>
  );
};

export default App;

