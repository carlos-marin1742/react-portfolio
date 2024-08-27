import styles from "./styles.css";
import React, { useState } from "react";
import AboutMe from "./components/AboutMe.js";
import Projects from "./components/Projects.js";



export default function App() {
  return (
    <div className={styles.App}>

      <AboutMe />
      <Projects />

    </div>
  );
}

