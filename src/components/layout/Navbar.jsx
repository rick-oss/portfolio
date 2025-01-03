import { Link } from "react-scroll";

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
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={styles.links}
            activeClass={styles.active}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={styles.links}
            activeClass={styles.active}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={styles.links}
            activeClass={styles.active}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={styles.links}
            activeClass={styles.active}
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
