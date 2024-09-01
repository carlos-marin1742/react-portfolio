import "./Projects.styles.css";
import React from "react";
import ProjectCard from "./ProjectCard.js";

const projectsData = [
  {
    title: "Spotify Reccomendation system",
    description:
      "Using Spotify API, accessed Spotify playlist to create Music Recommendation System",
    githubLink:
      "https://github.com/carlos-marin1742/Spotify-Music-Recommendation-System-using-Spotify-API/blob/main/Spotify%20Music%20Recommendation%20using%20Spotify%20API-1.ipynb",
    imageURL:
      "https://storage.googleapis.com/pr-newsroom-wp/1/2023/12/Generic-FTR-headers_V10-1920x733.jpg",
  },
  {
    title: "Disaster Text Classification using BERT",
    description:
      "Using Natural Language Processing (NLP), conducted analysis of positive and negative texts classification.",
    githubLink:
      "https://github.com/carlos-marin1742/Disaster-Text-Classification-BERT-ML-NLP",
    imageURL:
      "https://www.labellerr.com/blog/content/images/size/w2000/2023/05/bert.webp",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projectsData.map((project) => (
        <ProjectCard project={project} />
      ))}
    </section>
  );
};

export default Projects;