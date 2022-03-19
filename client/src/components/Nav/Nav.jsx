import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";

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

const NavbarContainer = styled.nav`
  font-weight:500 ;
  display: flex;
  color: aliceblue;
  display: flex;
  justify-content: space-between;
  margin: 1rem 10vw 4rem;
  &:active {
    color: #272727;
  }
  &:focus {
    color: #c0b2b2;
  }
  &:hover {
    color: #c0b2b2;
  }
`

// const StyledNavLink = styled(NavLink)`
//   color: #ffffff;
//   &:active {
//     color: #272727;
//   }
//   &:focus {
//     color: #c0b2b2;
//   }
//   &:hover {
//     color: #c0b2b2;
//   }
// `