import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { NavbarContainer } from "./Nav.style";

const Nav = () => {

  return (
    <div>
      <NavbarContainer>
        <NavLink to="/Dashboard"  
       style={({ isActive }) => ({
        color: isActive ? 'transparent' : 'aliceblue',
      })}

        >
          Dashboard
        </NavLink>
        <NavLink to="/Explore"
             style={({ isActive }) => ({
              color: isActive ? 'transparent' : 'aliceblue',
            })}
            >
          Explore
        </NavLink>
        <NavLink to="/Account"
             style={({ isActive }) => ({
              color: isActive ? 'transparent' : 'aliceblue',
            })}
            >
          Account
        </NavLink>
      </NavbarContainer>
      <Outlet />
    </div>
  );
}

export default Nav;


