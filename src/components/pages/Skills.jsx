import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaPython, FaJs } from "react-icons/fa";

import Container from "../layout/Container";
import SkillCard from "../layout/SkillCard";
import Title from "../layout/Title";

import styles from "./Skills.module.css";

function Skills() {
  return (
    <Container id="Skills">
      <div className={styles.skills_content}>
        <Title blueText="Tecno" whiteText="Logias" />
        <div className={styles.items}>
          <SkillCard skillIcon={<FaHtml5 />} skillName="HTML5" />
          <SkillCard skillIcon={<FaCss3Alt />} skillName="CSS3" />
          <SkillCard skillIcon={<FaJs />} skillName="javaScript" />
          <SkillCard skillIcon={<FaReact />} skillName="React" />
          <SkillCard skillIcon={<FaGitAlt />} skillName="Git" />
          <SkillCard skillIcon={<FaPython />} skillName="Python" />
        </div>
      </div>
    </Container>
  );
}

export default Skills;
