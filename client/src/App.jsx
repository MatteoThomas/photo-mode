
import React, { useState, useEffect} from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion/dist/framer-motion'
import { GlobalStyles } from "./GlobalStyles.style.jsx"
import { StyledAppContainer }from "./components/Container/Container.style"

import Nav from "./components/Nav/Nav"
import Hero from "./components/Hero/Hero"
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Explore from "./pages/Explore/Explore";
import Dashboard from "./pages/Dashboard/Dashboard";
import Account from "./pages/Account/Account";

const App = () => {
  const [header, setHeader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const user= localStorage.getItem("user");
    if (!user) {
        setHeader(false);
      } else if (user) {
        setHeader(true);
      
    }
  }, []);
  
  //CONDITIONALLY RENDER NAV OR HEADER
  const renderHeader = header ? (
    <Nav />  
  ) : (
   
      <Hero />
    
  );
  return (
    <StyledAppContainer>
      <GlobalStyles />
      {renderHeader} 
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

