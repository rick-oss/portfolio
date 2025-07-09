import PropTypes from "prop-types";
import { Element } from "react-scroll";

import styles from "./ScrollSection.module.css";

function ScrollSection({ children, name, customClass, ...props }) {
  return (
    <Element name={name}>
      <section id={name} className={`${styles.scrollSection} ${styles[customClass]}`} {...props}>
        {children}
      </section>
    </Element>
  );
}

ScrollSection.propTypes = {
  customClass: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ScrollSection;
