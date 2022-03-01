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