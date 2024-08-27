import styles from "./AboutMe.styles.css";
import React, { useState } from "react";
import github from "./assets/github.svg"
import linkedin from "./assets/linkedin.svg"


const AboutMe=() =>{
  const [imageURL, setImageURL] = useState(
    "https://media.licdn.com/dms/image/C5603AQGUe6LXcZ0rmg/profile-displayphoto-shrink_800_800/0/1517609301822?e=1728518400&v=beta&t=whV-0_wXi9_XWJbR34DAQyjasiFswMMeJCEByab7-OY"
  );
  return (
    <div classname="imgtxtcontainer">
      <img classname="imageMe" src={imageURL} />
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
      <div className = "icons">
        <a className = "LinkedinLink" href = "https://www.linkedin.com/in/carlos-marin-90482b13b/" target="_blank" rel="noopener noreferrer">
        <img src = {linkedin} />
        </a>
        <a className = "GithubLink" href = "https://github.com/carlos-marin1742" target="_blank" rel="noopener noreferrer">
            <img src = {github}/>
        </a>
        </div>
    </div>
  );
}

export default AboutMe;
