import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

export default function NavBar() {
  return (
    <Container>
      <div>
        <StyledLink>Left</StyledLink>
      </div>
      <div>
        <StyledLink to="home">Home</StyledLink>
        <StyledLink to="about" smooth duration={1000}>
          About
        </StyledLink>
        <StyledLink>Projects</StyledLink>
        <StyledLink>Contact</StyledLink>
      </div>
    </Container>
  );
}

const Container = styled.nav`
  /* position: fixed;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  background-color: #000000; */

  display: flex;
  justify-content: space-between;
  padding-top: 50px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 3px;
  border: none;
  margin: 0 1em;
  padding: 15px;
  font-weight: bold;
  :hover {
    background: #ffffff;
    color: #000000;
    padding-top: 50px;
    cursor: pointer;
  }
`;
