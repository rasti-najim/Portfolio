import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Tilt from "react-tilt";
import { Container, Row, Col } from "react-bootstrap";

// custom
import AboutItem from "../components/AboutItem";
import { client } from "../client";

export default function About() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        const filteredItems = [];
        response.items.forEach((item) => {
          if (item.sys.contentType.sys.id == "about") {
            filteredItems.push(item);
          }
        });
        setItems(filteredItems);
      })
      .catch(console.error);
  }, []);

  return (
    <StyledContainer id="about" fluid>
      <Fade>
        <Title>About Me</Title>
      </Fade>
      {items.map((item, index) => (
        <AboutItem key={index} item={item} />
      ))}
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
  background-color: #ffffff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 40px;
  padding: 10px;
`;
