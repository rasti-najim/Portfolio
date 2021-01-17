import React from "react";
import styled from "styled-components";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import ParticleImage, { forces } from "react-particle-image";

// custom
import NavBar from "../components/NavBar";
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
  return (
    <div id="home">
      <Container>
        <ImageContainer>
          <Fade left duration={1000} delay={500}>
            <ParticleImage
              src={image}
              scale={0.9}
              entropy={20}
              maxParticles={4200}
              particleOptions={particleOptions}
              mouseMoveForce={motionForce}
              touchMoveForce={motionForce}
              backgroundColor="#000000"
            />
            {/* <Image src={image} /> */}
          </Fade>
        </ImageContainer>
        <IntroContainer>
          <Fade right duration={1000} delay={500}>
            <Text>
              Hello I am
              <h1 className="Name">Rasti Najim</h1>
              Ux Designer & Doveloper
            </Text>
          </Fade>
          {/* <Button>Hire me</Button> */}
        </IntroContainer>
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
        </SocialsContainer>
      </Container>
    </div>
  );
}

const Button = styled.button`
  background: #ffffff;
  border-radius: 3px;
  border: 2px solid;
  margin: 0 1em;
  padding: 15px;
`;

const Text = styled.p`
  color: #ffffff;
  font-size: 34px;
  text-align: start;
  line-height: 30px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: "#FF0033";
  height: 100vh;
`;

const ImageContainer = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 100px;
`;

const IntroContainer = styled.div`
  height: 50%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const SocialsContainer = styled.div`
  /* background-color: yellow; */
  height: 50%;
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Image = styled.img`
  width: 80%;
`;

export default Home;
