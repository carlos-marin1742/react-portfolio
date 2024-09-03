import styles from "./Projects.styles.css";
import React from "react";

const ProjectCard = (props) => {
  const { project } = props;
  return (
    <div class="container">
    <div class="box">
      <div class="box-top">
        <img class="box-image" src={project.imageURL} />
        <div class="title-flex">
          <h3 class="box-title">{project.title}</h3>
        </div>
        <p class="description">{project.description}</p>
      </div>
      <a href="#" src={project.githubLink} class="button">
        Github Link
      </a>
    </div>
    </div>
  );
};

export default ProjectCard;