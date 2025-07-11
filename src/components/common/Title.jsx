// ─────────────────────────────────────────────────────────────
// Title.jsx
// Componente de título reutilizável
//  1. Exibe um <h2> estilizado em duas cores
//  2. Recebe um id para acessibilidade(aria-labelledby)
// ─────────────────────────────────────────────────────────────

import PropTypes from "prop-types";
import styles from "./Title.module.css";

// props
// id: identificador único do título
// blueText: texto que aparecerá em azul
// whiteText: texto que aparecerá em branco
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
