import styles from "./AboutMe.styles.css";
import React from "react";
import CarlosMarin from "./assets/CarlosMarin.jpeg"
import github from "./assets/github.svg"
import linkedin2 from "./assets/linkedin2.png"
import github2 from "./assets/GitHub-Logo.png"
import github3 from "./assets/github3.png"



const AboutMe=() =>{

  return (
    <div id = "BIO">
      
      <div className = "image-container">
        <img className="CarlosMarin" src = {CarlosMarin} alt = "Carlos Marin"/>
        </div>

      <div classname="about-me-text">
        <h1> Carlos Marin's Portfolio </h1>
        <i>FULL STACK SOFTWARE ENGINEER</i>
        <p>
          I am an enthusiastic and motivated aspiring software engineer, eager
          to launch my career in technology. With a solid foundation in computer
          science principles and hands-on experience gained through academic
          projects and self-directed learning, I am well-equipped to tackle
          real-world software development challenges.
        </p>
        <p>
          <i>
            “If you can’t fly then run, if you can’t run then walk, if you can’t
            walk then crawl, but whatever you do you have to keep moving
            forward.”
          </i>
          - <strong>Martin Luther King, Jr.</strong>
        </p>
      </div>

            // Test DIV //
            <div className = "icons">
        <a className = "LinkedinLink" href = "https://www.linkedin.com/in/carlos-marin-90482b13b/" target="_blank" rel="noopener noreferrer">
        <img className= "icon" src = {linkedin2} alt = "Linkedin" />
        </a>
        <a className = "GithubLink" href = "https://github.com/carlos-marin1742" target="_blank" rel="noopener noreferrer">
            <img className= "icon" src = {github3} alt = "Github"/>
            </a>
        </div>


   
        </div>
   
  );
}

export default AboutMe;
