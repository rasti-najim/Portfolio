import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Tilt from "react-tilt";
import { Container, Row, Col } from "react-bootstrap";

export default function PortfolioItem({ title, image, children }) {
  return (
    <ContentContainer>
      <Fade left duration={1000} delay={1000}>
        <TextContainer>
          <Title>{title}</Title>
          <Text>{children}</Text>
        </TextContainer>
      </Fade>
      <Fade right duration={1000} delay={500}>
        <Tilt
          options={{
            reverse: false,
            max: 8,
            perspective: 1000,
            scale: 1,
            speed: 300,
            transition: true,
            axis: null,
            reset: true,
            easing: "cubic-bezier(.03,.98,.52,.99)",
          }}
        >
          <Image src={image} />
        </Tilt>
      </Fade>
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 8rem;
`;

const TextContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h3`
  font-size: larger;
  font-family: "Do Hyeon", sans-serif;
  color: #ffffff;
  /* margin-left: 30px; */
`;

const Text = styled.p`
  font-family: "Do Hyeon", sans-serif;
  color: #ffffff;
  /* margin-left: 10px; */
`;

const Image = styled.img`
  width: 50%;
`;
