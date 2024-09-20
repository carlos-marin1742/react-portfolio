import "./AboutMe.styles.css";
import CarlosMarin from "./assets/CarlosMarin.jpeg";
import React from "react";
import gmail from "./assets/icons8-gmail-400.png";
import Linkedin from "./assets/icons8-linkedin-400.png";
import Github from "./assets/icons8-github-400.png";

const AboutMe = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    flexDirection: "column",
    padding: "20px",
  };

  const containerStyle2 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
    padding: "20px",
  };

  return (
    <section style={containerStyle} id="hero">
      {/* */}
      {/* My Picture*/}
      <div classname="hero">
        <img src={CarlosMarin} alt="picture of me, Carlos Marin" />
      </div>
      {/* Name, Title, Icons*/}
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
        {/*ICONS */}
        <span style={containerStyle2}>
          {/*GMAIL */}
          <a href="mailto: carlosmarinjr1@gmail.com" target="_blank">
            <img src={gmail} alt="gmail icon" className="icons" />
          </a>
          {/*LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/carlos-marin-90482b13b/"
            target="_blank"
            className="icons"
          >
            <img src={Linkedin} alt="Linkedin icon" className="icons" />
          </a>
          {/*LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/carlos-marin-90482b13b/"
            target="_blank"
          >
            <img src={Github} alt="Github icon" className="icons" />
          </a>
        </span>
      </div>
    </section>
  );
}
export default AboutMe;