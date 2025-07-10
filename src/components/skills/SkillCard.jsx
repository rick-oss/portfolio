import PropTypes from "prop-types";

import styles from "./SkillCard.module.css";

const SkillCard = ({ skillIcon, skillName }) => {
  return (
    <figure className={styles.block}>
      <figcaption>{skillName}</figcaption>
      <i>{skillIcon}</i>
    </figure>
  );
};

SkillCard.propTypes = {
  skillIcon: PropTypes.object.isRequired,
  skillName: PropTypes.string.isRequired,
};

export default SkillCard;
