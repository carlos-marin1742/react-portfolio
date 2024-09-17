import  "./Projects.styles.css";
import React from "react";

const ProjectCard = (props) => {
  const { project } = props;
  return (
    <div className="wrap">
    <div className="box">
      <div className="box-top">
        <img className="box-image" src={project.imageURL} />
        <div className="title-flex">
          <h3 className="box-title">{project.title}</h3>
        </div>
        <p className="description">{project.description}</p>
      </div>
      <a href="#" src={project.githubLink} className="button">
        Github Link
      </a>
    </div>
    </div>
  );
};

export default ProjectCard;