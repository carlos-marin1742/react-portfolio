import React, { useState } from "react";
// import styles from "./MyNavbar.styles.css";

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const toggleNavbar = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <header className="header">
      <a href="#" className="logo">
        Carlos Marin
      </a>

      <input className="side-menu" type="checkbox" id="side-menu" />
      <label className="hamb" for="side-menu">
        <span className="hamb-line"></span>
      </label>

      <nav className="nav">
        <ul className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Skills</a>{" "}
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MyNavbar;