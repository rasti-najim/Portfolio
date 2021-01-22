import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Tilt from "react-tilt";
import { Container, Row, Col } from "react-bootstrap";

export default function PortfolioItem({ item }) {
  const { projectname, description, image, link } = item.fields;
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
    <ContentContainer fluid>
      <Row xs={1} sm={1} md={2}>
        <Col>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500}>
            <Title>{projectname}</Title>
            <Text>{description}</Text>
          </Fade>
        </Col>
        <Col>
          <Fade
            right={isDesktop}
            bottom={isMobile}
            duration={1000}
            delay={1000}
          >
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
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Image src={image.fields.file.url} />
              </a>
            </Tilt>
          </Fade>
        </Col>
      </Row>
    </ContentContainer>
  );
}

const ContentContainer = styled(Container)`
  margin-bottom: 8rem;
`;

const Title = styled.h3`
  font-size: larger;
  /* font-family: "Do Hyeon", sans-serif; */
  font-family: "Roboto", sans-serif;
  color: #ffffff;
  margin-left: 30px;

  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`;

const Text = styled.p`
  font-family: "Do Hyeon", sans-serif;
  color: #ffffff;
  margin-left: 30px;

  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`;

const Image = styled.img`
  width: 70%;
  margin-left: 15%;
`;
