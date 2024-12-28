import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";

import Container from "../layout/Container";
import Title from "../layout/Title";
import ProjectCard from "../layout/Projectcard";

import styles from "./Projects.module.css";

function Projects() {
  return (
    <Container id="Projects">
      <div className={styles.projects_content}>
        <Title blueText="Proje" whiteText="Tos" />
        <div className={styles.items}>
          <ProjectCard
            urlImage="/public/images/conselho.png"
            techIcons={[<FaHtml5 key="html5" />, <FaCss3Alt key="css3" />, <FaJsSquare key="JavaScript" />]}
          />

          <ProjectCard
            urlImage="/public/images/conselho.png"
            techIcons={[<FaHtml5 key="html5" />, <FaCss3Alt key="css3" />]}
          />
        </div>
      </div>
    </Container>
  );
}

export default Projects;
