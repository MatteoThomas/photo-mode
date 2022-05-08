
import React, { useState, useEffect, Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion/dist/framer-motion'
import { GlobalStyles } from "./GlobalStyles.style.jsx"

import { StyledAppContainer }from "./components/Container/Container.style"
import Fallback from "./components/Fallback"

const Nav = lazy(() => import("./components/Nav/Nav"));
const Header = lazy(() => import("./components/Header/Header"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const Explore = lazy(() => import("./pages/Explore/Explore"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const Account = lazy(() => import("./pages/Account/Account"));


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
  
  //CONDITIONALLY RENDER NAV OR HEADER IF NO "user" FOUND
  const renderHeader = header ? 
    ( <Nav />  ) :
    (<Header />);

  return (
    <Suspense fallback={<Fallback/>}>
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
    </Suspense>
  );
};

export default App;

