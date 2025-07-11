// ─────────────────────────────────────────────────────────────
// SkillCard.jsx
// Componente para exibir um cartão de habilidades
//  1. Renderiza um ícone e o nome da habilidade dinamicamente
//  2. Recebe o ícone como ReactElement (ex.: <FaHtml5 />)
//  3. Usa <figure>/<figcaption> por semântica de "imagem com legenda"
// ─────────────────────────────────────────────────────────────

import PropTypes from "prop-types";
import styles from "./SkillCard.module.css";

// props
// skillIcon: ícone da habilidade
// skillName: nome da habilidade
const SkillCard = ({ skillIcon, skillName }) => {
  return (
    <figure className={styles.block_wrapper}>
      <figcaption>{skillName}</figcaption>
      <i>{skillIcon}</i>
    </figure>
  );
};

SkillCard.propTypes = {
  skillIcon: PropTypes.node.isRequired,
  skillName: PropTypes.string.isRequired,
};

export default SkillCard;
