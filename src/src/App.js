import styles from "./styles.css";
import React, { useState } from "react";
import AboutMe from "./components/AboutMe.js";
import Projects from "./components/Projects.js";
import ContactForm from "./components/ContactForm.js";
import MyNavbar from "./components/MyNavbar.js";





export default function App() {
  return (
    <div className={styles.App}>
      <MyNavbar />
      <AboutMe />
      <Projects />
      <ContactForm />

    </div>
  );
}

