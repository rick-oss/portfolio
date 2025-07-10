import PropTypes from "prop-types";

import styles from "./Title.module.css";

const Title = ({ id, blueText, whiteText }) => {
  return (
    <h2 id={id} className={styles.title}>
      <span>&lt;{blueText}</span>
      {whiteText}/&gt;
    </h2>
  );
};

Title.propTypes = {
  id: PropTypes.string.isRequired,
  blueText: PropTypes.string.isRequired,
  whiteText: PropTypes.string.isRequired,
};

export default Title;
