import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import styled from "styled-components";



const NavbarContainer = styled(Navbar)`
  color: aquamarine;
  display: flex;
  justify-content: center;
`

const StyledNavLink = styled(NavLink)`
  color: aquamarine;
  &:active {
    color: aliceblue;
  }
  &:focus {
    color: aliceblue;
  }
  &:hover {
    color: aliceblue;
  }
`

const StyledNavbarBrand = styled.div`color: 
  #818181;
  border-radius: 5px;
  `
export default function Nav() {
  
  return (
    <div>
      <NavbarContainer>
        <StyledNavLink className="nav-link" to="/Dashboard">
          Dashboard
        </StyledNavLink>
        <StyledNavLink className="nav-link" to="/Explore">
          Explore
        </StyledNavLink>
        <StyledNavLink className="nav-link" to="/Account">
          Account
        </StyledNavLink>
        <StyledNavbarBrand>
         User:
        </StyledNavbarBrand>
      </NavbarContainer>
      <Outlet />
    </div>
  );
}
