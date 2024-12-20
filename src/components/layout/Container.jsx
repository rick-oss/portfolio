import PropTypes from "prop-types";

import styles from "./Container.module.css";

function Container({ children, id, customClass }) {
  return (
    <div id={id} className={`${styles.container} ${styles[customClass]}`}>
      {children}
    </div>
  );
}

Container.propTypes = {
  id: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;
