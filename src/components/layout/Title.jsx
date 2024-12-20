import PropTypes from "prop-types";

import styles from "./Title.module.css";

const Title = ({ blueText, whiteText }) => {
  return (
    <h1 className={styles.title}>
      <span>&lt;{blueText}</span>
      {whiteText}/&gt;
    </h1>
  );
};

Title.propTypes = {
  blueText: PropTypes.string.isRequired,
  whiteText: PropTypes.string.isRequired,
};

export default Title;
