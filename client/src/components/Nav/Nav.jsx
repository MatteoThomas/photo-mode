import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {

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
  margin: 0 10vw 4rem;
`

const StyledNavLink = styled(NavLink)`
  color: #ffffff;
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