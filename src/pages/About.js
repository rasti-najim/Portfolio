import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Tilt from "react-tilt";
import { Container, Row, Col } from "react-bootstrap";

// custom
import image from "../kirkuk.jpeg";

export default function About() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <StyledContainer id="about" fluid>
      <Fade>
        <Title>About Me</Title>
      </Fade>
      <Row xs={1} sm={1} md={2}>
        <Col>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000}>
            <Text>
              I'm a 20-year-old focused on building internet startups. Born in
              Iraq in the city of Kirkuk gdgdgjklgjdljgdggdgdgg
            </Text>
          </Fade>
        </Col>
        <Col>
          <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={500}>
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
        </Col>
      </Row>
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
  background-color: #ffffff;
  text-align: center;
  /* width: 100%;
  height: 100%; */
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
  font-family: "Do Hyeon", sans-serif;
  margin-left: 30px;
  /* word-wrap: break-word; */
  /* color: #ffffff; */
`;

const Image = styled.img`
  width: 70%;
  margin-bottom: 20px;
`;
