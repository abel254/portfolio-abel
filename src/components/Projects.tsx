import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import React from "react";
import { ProjectCard } from "./ProjectCard";
import { title } from "process";

const projImg1 = require("../assets/images/portfolio.PNG");
const projImg2 = require("../assets/images/project.PNG");
const projImg3 = require("../assets/images/preview-card.PNG");
const projImg4 = require("../assets/images/product-preview-card2.PNG");
const projImg5 = require("../assets/images/order-summary-component.PNG");
const bg = require("../assets/images/bg.PNG");

export const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "Responsive personal portfolio: responsiveness enhanced using bootstrap, bootstrap breakpoints, and bootstrap responsive components. Hosted by Vercel",
      imgUrl: projImg1,
      projLink: "",
    },
    {
      title: "Extreme Drift",
      description:
        "Responsive site: responsiveness enhanced using flexbox, grid, and relative units. Hosted by Vercel",
      imgUrl: projImg2,
      projLink:
        "https://responsive-extremedrift-website-icq1n3lx8-abel254.vercel.app/",
    },
    {
      title: "NFT Preview Card Component",
      description: "Component Design Challenge. Hosted by Github",
      imgUrl: projImg3,
      projLink:
        "https://abel254.github.io/nft-preview-card-component-main-challenge/",
    },
    {
      title: "Product Preview Card Component",
      description: "Component Design Challenge. Hosted by  Github",
      imgUrl: projImg4,
      projLink:
        "https://abel254.github.io/product-preview-card-component-main/",
    },
    {
      title: "Order Summary Component",
      description: "Component Design Challenge. Hosted by  Github",
      imgUrl: projImg5,
      projLink: "https://abel254.github.io/order-summary-component-main/",
    },
    {
      title: "Order Summary Component",
      description: "Component Design Challenge. Hosted by  Github",
      imgUrl: projImg5,
      projLink: "https://abel254.github.io/order-summary-component-main/",
    },
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              The following are front-end web projects which are not limited to site projects, portfolio, and simple components
            </p>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Sites</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Components</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                </Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ispum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-img-right" src={bg} alt=""> </img> */}
    </section>
  );
};
