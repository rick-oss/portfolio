import Container from "../layout/Container";
import Title from "../layout/Title";
import ProjectCard from "../layout/ProjectCard";
import projectsData from "../../data/projectsData";

import styles from "./Projects.module.css";

function Projects() {
  return (
    <Container id="Projects">
      <div className={styles.projects_content}>
        <Title blueText="Proje" whiteText="Tos" />
        <div className={styles.items}>
          {projectsData.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Projects;
