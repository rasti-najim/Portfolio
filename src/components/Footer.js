import React from "react";
import styled from "styled-components";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import Fade from "react-reveal/Fade";

// custom
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <Container id="contact">
      <Title>Rasti.</Title>
      <SocialsContainer>
        <a
          href="https://twitter.com/Rasti_Najim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>
            <FaTwitter className={styles.Icon} color="#000" />
          </h4>
        </a>
        <a
          href="https://www.facebook.com/rasti.rasheed"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>
            <FaFacebookF className={styles.Icon} color="#000" />
          </h4>
        </a>
        <a
          href="https://www.instagram.com/rasti_najim/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>
            <FaInstagram className={styles.Icon} color="#000" />
          </h4>
        </a>
        <a
          href="mailto:rastirasheed@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>
            <FaEnvelope className={styles.Icon} color="#000" />
          </h4>
        </a>
      </SocialsContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const SocialsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;

const Title = styled.h1`
  font-size: 40px;
  /* color: #ffffff; */
  /* padding: 10px; */
`;
