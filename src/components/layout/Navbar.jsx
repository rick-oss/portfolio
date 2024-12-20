import { Link } from "react-scroll";
// import { useState, useEffect } from "react";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>
        <span>&lt;Portf</span>
        <span className={styles.color}>ólio/&gt;</span>
      </h1>
      <ul>
        <li>
          <Link to="home" smooth={true} className={styles.links}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} className={styles.links}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} className={styles.links}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} className={styles.links}>
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
