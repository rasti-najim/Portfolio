import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

export default function NavBar() {
  const [active, setActive] = useState(false);
  return (
    <Container>
      <div>
        <Link
          to="home"
          smooth
          duration={1000}
          onSetActive={() => setActive(true)}
        >
          <Button isActive={active}>Home</Button>
        </Link>
        <Link to="about" smooth duration={1000}>
          <Button>About</Button>
        </Link>
        <Link to="portfolio" smooth duration={1000}>
          <Button>What I'v done</Button>
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.nav`
  /* position: fixed;
  z-index: 1;
  width: 100%;
  background-color: #000000; */

  display: flex;
  justify-content: flex-end;
  padding-top: 50px;
  width: 100%;
`;

const Button = styled.span`
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
