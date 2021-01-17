import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

// custom
import image from "../kirkuk.jpeg";

export default function About() {
  return (
    <Container id="about">
      <Fade>
        <Title>About Me</Title>
      </Fade>
      <ContentContainer>
        {/* <Fade left duration={1000} delay={1000}> */}
        <Text>
          I'm a 20-year-old focused on building internet startups. Born in Iraq
          in the city of Kirkuk gdgdgjklgjdljgdggdgdgg
        </Text>
        {/* </Fade> */}
        <Fade right duration={1000} delay={500}>
          <Image src={image} />
        </Fade>
        {/* <img src={image} /> */}
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #ffffff;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 40px;
  /* color: #ffffff; */
  padding: 10px;
`;

const Text = styled.p`
  font-family: "Roboto", sans-serif;
  /* font-family: "Do Hyeon", sans-serif; */
  /* word-wrap: break-word; */
  /* color: #ffffff; */
`;

const Image = styled.img`
  width: 50%;
`;
