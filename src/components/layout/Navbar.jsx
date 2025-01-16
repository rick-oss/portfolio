import { useEffect, useState } from "react";
import { Link } from "react-scroll";

import styles from "./Navbar.module.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setActiveSection("home");
  }, []);

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>
        <span>&lt;Portf</span>
        <span className={styles.color}>ólio/&gt;</span>
      </h1>
      <ul>
        <li>
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className={`${styles.links} ${activeSection === "home" ? styles.active : ""}`}
            onSetActive={() => setActiveSection("home")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className={`${styles.links} ${activeSection === "about" ? styles.active : ""}`}
            onSetActive={() => setActiveSection("about")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className={`${styles.links} ${activeSection === "skills" ? styles.active : ""}`}
            onSetActive={() => setActiveSection("skills")}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className={`${styles.links} ${activeSection === "projects" ? styles.active : ""}`}
            onSetActive={() => setActiveSection("projects")}
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
