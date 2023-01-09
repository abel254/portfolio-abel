import React from "react";
import { Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

type ProjectCardProps = {
    title: string
    description: string
    imgUrl: string
    projLink: string
}

export const ProjectCard = ({title, description, imgUrl, projLink}: ProjectCardProps) => {
  return (
    <Col sm={6} md={4}>
      <a className="proj-imagebx-link" href={projLink} target='_blank'>
      <div className="proj-imagebx">
        <img src={imgUrl} alt="projectImg" />
        <div className="project-txt">
            <h4>{title}</h4> 
            <span>{description}</span>
            <div>
            <ArrowRightCircle size={25} />
            </div>
        </div>
      </div>
      </a>
      
    </Col>
  );
};
