import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import Fade from "react-reveal/Fade";
import ParticleImage, { forces } from "react-particle-image";

// custom
import image from "../portrait.png";
import "../styles/Home.css";

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#ffffff",
};

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 5);
};

function Home() {
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
    <div id="home">
      <Container>
        <ImageContainer>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500}>
            <StyledParticleImage
              src={image}
              scale={0.9}
              entropy={20}
              maxParticles={4200}
              particleOptions={particleOptions}
              mouseMoveForce={motionForce}
              touchMoveForce={motionForce}
              backgroundColor="#000000"
            />
          </Fade>
        </ImageContainer>
        <IntroContainer>
          <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={500}>
            <Text>
              Hello, I am
              <h1 className="Name">Rasti Najim</h1>
            </Text>
            <Fade
              right={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1000}
            >
              {/* <Button>Resume</Button> */}
            </Fade>
          </Fade>
        </IntroContainer>
        {isDesktop && (
          <SocialsContainer>
            <a
              href="https://twitter.com/Rasti_Najim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="Icon" color="#fff" />
            </a>
            <a
              href="https://www.facebook.com/rasti.rasheed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="Icon" color="#fff" />
            </a>
            <a
              href="https://www.instagram.com/rasti_najim/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="Icon" color="#fff" />
            </a>
            <a
              href="mailto:rastirasheed@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="Icon" color="#fff" />
            </a>
          </SocialsContainer>
        )}
      </Container>
      {isMobile && (
        <SocialsContainer>
          <a
            href="https://twitter.com/Rasti_Najim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>
              <FaTwitter className="Icon" color="#fff" />
            </h4>
          </a>
          <a
            href="https://www.facebook.com/rasti.rasheed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>
              <FaFacebookF className="Icon" color="#fff" />
            </h4>
          </a>
          <a
            href="https://www.instagram.com/rasti_najim/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>
              <FaInstagram className="Icon" color="#fff" />
            </h4>
          </a>
          <a
            href="mailto:rastirasheed@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>
              <FaEnvelope className="Icon" color="#fff" />
            </h4>
          </a>
        </SocialsContainer>
      )}
    </div>
  );
}

const Button = styled.button`
  background: #ffffff;
  border-radius: 3px;
  border: 2px solid;
  margin-top: 10px;
  padding: 0px 30px;
  font-size: 2rem;
  :hover {
    background: #000000;
    color: #ffffff;
  }
`;

const Text = styled.p`
  color: #ffffff;
  /* font-size: 34px; */
  font-size: 2.5rem;
  text-align: start;
  line-height: 30px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ImageContainer = styled.div`
  height: 90%;
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 100px;

  @media screen and (max-width: 768px) {
    margin-left: 0px;
    height: auto;
    width: auto;
  }
`;

const IntroContainer = styled.div`
  height: 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    height: auto;
    width: auto;
  }
`;

const SocialsContainer = styled.div`
  /* background-color: yellow; */
  height: 50%;
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: auto;
    width: auto;
  }
`;

const StyledParticleImage = styled(ParticleImage)`
  @media screen and (max-width: 768px) {
    height: 50vh;
    width: 100%;
  }
`;

export default Home;
