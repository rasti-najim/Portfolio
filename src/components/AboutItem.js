import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Tilt from "react-tilt";
import { Container, Row, Col } from "react-bootstrap";

export default function AboutItem({ item }) {
  const { aboutMe, image } = item.fields;
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
    <Row xs={1} sm={1} md={2}>
      <Col>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500}>
          <Text>{aboutMe}</Text>
          <div>
            {/* <Button>Notion</Button> */}
            <a
              href="https://www.notion.so/rastinajim/Reading-List-41bbb864fdc84ab5834635d6ea5ce9b5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Reading List</Button>
            </a>
            <a
              href="https://www.notion.so/rastinajim/2020-42-Lessons-621464a7efb644a1aa647c7f848ccccf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>2020: 42 Lessons</Button>
            </a>
          </div>
        </Fade>
      </Col>
      <Col>
        <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000}>
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
            <Image src={image.fields.file.url} />
          </Tilt>
        </Fade>
      </Col>
    </Row>
  );
}

const Text = styled.p`
  font-family: "Do Hyeon", sans-serif;
  margin-left: 30px;
  text-align: start;

  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`;

const Image = styled.img`
  width: 70%;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Button = styled.button`
  background: #ffffff;
  border-radius: 3px;
  border: 2px solid;
  margin-top: 10px;
  margin-left: 20px;
  padding: 0px 30px;
  font-size: 2rem;
  :hover {
    background: #000000;
    color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`;
