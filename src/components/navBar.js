import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.div`
  width: 100vw;
  height: 50px;
  background-color: aqua;
  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/form">Form</Link>
        <Link to="/fetch">Fetch</Link>
      </ul>
    </StyledNavbar>
  );
};
