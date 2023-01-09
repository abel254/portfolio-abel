import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import {TfiLinkedin} from 'react-icons/tfi'
import {BsGithub} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'
import { NewsLetter } from "./NewsLetter";

const logo = require('../assets/images/logo.PNG')

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
            <NewsLetter />
          <Col sm={6} className='text-start'>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className='text-center text-sm-end'>
          <div className="social-icon">
                <a href="https://www.linkedin.com/in/abel-muema-9b1140216/" target='_blank'><TfiLinkedin /></a>
                <a href="https://github.com/abel254" target='_blank'><BsGithub/></a>
                <a href="https://twitter.com/abel26053879" target='_blank'><FaTwitter /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
