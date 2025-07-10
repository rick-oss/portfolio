import ScrollSection from "../layout/ScrollSection";
import projectsData from "../../data/projectsData";
import Title from "../common/Title";

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
