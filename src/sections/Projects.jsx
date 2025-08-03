// ─────────────────────────────────────────────────────────────~
// Projects.jsx
// Seção "Projetos" do portfólio SPA
//  1. Exibe uma grade de projetos com detalhes e links
//  2. Cada projeto é renderizado com o componente ProjectCard
//  3. Renderizada dentro de <ScrollSection name="projects" />
// ─────────────────────────────────────────────────────────────

import ScrollSection from "../components/layout/ScrollSection";
import projectsData from "../data/projectsData";
import Title from "../components/common/Title";
import ProjectCard from "../components/projects/ProjectCard";

import styles from "./Projects.module.css";

function Projects() {
  return (
    <ScrollSection name="projects" aria-labelledby="projects-title">
      <div className={styles.projects_content}>
        <Title id="projects-title" blueText="Proje" whiteText="Tos" />
        <ul className={styles.items}>
          {projectsData.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </ScrollSection>
  );
}

export default Projects;
