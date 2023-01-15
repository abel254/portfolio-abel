import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const skill1 = require("../assets/images/react.png");
const skill2 = require("../assets/images/js-logo1.png");
const skill3 = require("../assets/images/html2.png");
const skill4 = require("../assets/images/css.png");
const skill5 = require("../assets/images/typescript.png");
const skill6 = require("../assets/images/node-js1.png");

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                With the skills below, I am competent to developing user satisfactory Web applications that are of the global development standard in the current development & technological era.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={skill1} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={skill2} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={skill5} alt="Image" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={skill6} alt="Image" />
                  <h5>Node js</h5>
                </div>
                <div className="item">
                  <img src={skill3} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={skill4} alt="Image" />
                  <h5>CSS</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src="" alt="" className="background-image-left" />
    </section>
  );
};
