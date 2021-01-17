import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

// custom
import PortfolioItem from "../components/PortfolioItem";
import image from "../kirkuk.jpeg";

export default function Portfolio() {
  return (
    <Container id="about">
      <Fade>
        <Title>Portfolio</Title>
      </Fade>
      <PortfolioItem title="Facilitator & Director, NMUNA" image={image}>
        Mission: To bring different ethnic groups together for civil & political
        discourse through Model UN. Partnered with the US Consulate in Erbil
      </PortfolioItem>
      <PortfolioItem
        title="Iraqi Leader Exchange Program Entrant (State Dept)"
        image={image}
      >
        Intensive leadership & language immersion. Lived with American host
        family. Contributed to community projects.
      </PortfolioItem>
      <PortfolioItem
        title="Translator & Editor, I Believe In Science"
        image={image}
      >
        Mission: To make science accessible & simplified to people in the Middle
        East. More than 3 million likes & followers on Facebook.
      </PortfolioItem>
      <PortfolioItem
        title="Bertelsmann Tech Scholarship Recipient, Udacity"
        image={image}
      >
        Received scholarship to study Deep Learning on Udacity. Program in
        collaboration with AWS & Facebook Artificial Intelligence
      </PortfolioItem>
      <PortfolioItem title="Kohai, Gakko Summer Camps" image={image}>
        Emphasis on creativity & collaboration. project-based learning. Got
        accepted & received grant. Attended Japan's camp.
      </PortfolioItem>
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.h1`
  font-size: 40px;
  padding: 10px;
  color: #ffffff;
`;
