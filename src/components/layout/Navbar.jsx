//  ─────────────────────────────────────────────────────────────
// Navbar.jsx
// Componente de navegação fixo no topo da página
//  1. Exibe links para as seções da SPA(inicio, sobre, habilidades, projetos)
//  2. Usa Link do react-scroll para rolagem suave
//  3. Usa useState para gerenciar a seção ativa
//  ─────────────────────────────────────────────────────────────

import { useState } from "react";
import { Link } from "react-scroll";

import styles from "./Navbar.module.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>
        <span>&lt;Portf</span>
        <span className={styles.color}>Ólio/&gt;</span>
      </h1>
      <ul>
        <li>
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className={`${styles.links} ${
              activeSection === "home" ? styles.active : ""
            }`} /* Classe aplicada na seção ativa */
            onSetActive={() => setActiveSection("home")}
          >
            Início
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
            Sobre
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
            Habilidades
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
            Projetos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
