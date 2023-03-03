import { ArrowRightCircle } from "react-bootstrap-icons";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const headerImage = require("../assets/images/header.jpg");

export const Banner = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelter] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelter((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelter(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelter(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Abel Muema `} <br />
               <span className="wrap">{text}</span>
            </h1>
            <p>
             Hi there, I am a software engineer based on developing software products, which includes Web applications and Mobile Apps. I have the software engineering skills of React, TypeScript, Node js, HTML, CSS( & Bootstrap), and Java-android. I am a long-time learner and open-source enthusiast
            </p>
            <button>
              <a href="#newsletter">Let's connect</a>
              <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImage} alt="Header image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
