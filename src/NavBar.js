import React from "react";
import styled from "styled-components";

export default function NavBar() {
  return (
    <Container>
      <div>
        <Button>Left</Button>
      </div>
      <div>
        <Button>Home</Button>
        <Button>About</Button>
        <Button>Projects</Button>
        <Button>Contact</Button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Button = styled.text`
  font-size: 25px;
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
