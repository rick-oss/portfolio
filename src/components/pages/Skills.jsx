import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaPython, FaJs } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

import ScrollSection from "../layout/ScrollSection";
import SkillCard from "../layout/SkillCard";
import Title from "../layout/Title";

import styles from "./Skills.module.css";

function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <ScrollSection name="skills" labelledby="skills-title">
      <div className={styles.skills_content}>
        <Title id="skills-title" blueText="Tecno" whiteText="Logias" />
        <ul
          ref={ref}
          className={styles.items}
          style={{
            transition: "all 0.5s ease",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-60px)",
          }}
        >
          <li>
            <SkillCard skillIcon={<FaHtml5 />} skillName="HTML5" />
          </li>
          <li>
            <SkillCard skillIcon={<FaCss3Alt />} skillName="CSS3" />
          </li>
          <li>
            <SkillCard skillIcon={<FaJs />} skillName="JavaScript" />
          </li>
          <li>
            <SkillCard skillIcon={<FaReact />} skillName="React" />
          </li>
          <li>
            <SkillCard skillIcon={<FaGitAlt />} skillName="Git" />
          </li>
          <li>
            <SkillCard skillIcon={<FaPython />} skillName="Python" />
          </li>
        </ul>
      </div>
    </ScrollSection>
  );
}

export default Skills;
