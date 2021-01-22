import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

// custom
import PortfolioItem from "../components/PortfolioItem";
import { client } from "../client";

export default function Portfolio() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        const filteredItems = [];
        response.items.forEach((item) => {
          if (item.sys.contentType.sys.id == "portfolio") {
            filteredItems.push(item);
          }
        });
        setItems(filteredItems);
      })
      .catch(console.error);
  }, []);
  return (
    <Container id="portfolio">
      <Fade>
        <Title>What I'v done</Title>
      </Fade>
      {items.map((item, index) => (
        <PortfolioItem key={index} item={item} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 40px;
  padding: 10px;
  color: #ffffff;
`;
