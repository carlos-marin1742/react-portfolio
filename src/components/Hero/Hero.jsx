import React from "react";

import styles from "./Hero.module.css";
import CarlosMarin from "./CarlosMarin.jpeg"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Carlos! </h1>

      {/*Hero Text */}
        <p className={styles.description}>
        I am an enthusiastic and motivated aspiring software engineer, 
        with Solid experience in data science principles and software development.
        </p>
          {/*Hero Text */}
        <a href="mailto:carlosmarinjr1@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={CarlosMarin}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
