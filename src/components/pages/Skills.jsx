import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaPython, FaJs } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";

import Container from "../layout/Container";
import SkillCard from "../layout/SkillCard";
import Title from "../layout/Title";

import styles from "./Skills.module.css";

function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <Element name="skills">
      <Container>
        <div className={styles.skills_content}>
          <Title blueText="Tecno" whiteText="Logias" />
          <div
            ref={ref}
            className={styles.items}
            style={{
              transition: "all 0.5s ease",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-60px)",
            }}
          >
            <SkillCard skillIcon={<FaHtml5 />} skillName="HTML5" />
            <SkillCard skillIcon={<FaCss3Alt />} skillName="CSS3" />
            <SkillCard skillIcon={<FaJs />} skillName="JavaScript" />
            <SkillCard skillIcon={<FaReact />} skillName="React" />
            <SkillCard skillIcon={<FaGitAlt />} skillName="Git" />
            <SkillCard skillIcon={<FaPython />} skillName="Python" />
          </div>
        </div>
      </Container>
    </Element>
  );
}

export default Skills;
