// ─────────────────────────────────────────────────────────────
// ScrollSection.jsx
// Componente wrapper que:
//  1. Cria um ponto de ancoragem para o react-scroll
//  2. Renderiza uma seção com id para rolagem suave
//  3. Renderiza conteúdo dinâmico via children
// ─────────────────────────────────────────────────────────────

import { Element } from "react-scroll";

import PropTypes from "prop-types";
import styles from "./ScrollSection.module.css";

// props
// children: conteúdo a ser renderizado dentro da seção
// name: nome do ponto de ancoragem
// customClass: classe CSS opcional para estilização adicional
// ...props: outras propriedades que podem ser passadas para a seção(como aria-labels)
function ScrollSection({ children, name, customClass, ...props }) {
  return (
    <Element name={name}>
      <section id={name} className={`${styles.section_wrapper} ${styles[customClass]}`} {...props}>
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
