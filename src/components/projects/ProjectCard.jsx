// ─────────────────────────────────────────────────────────────
// ProjectCard.jsx
// Componente para exibir um cartão de projeto
//  1. Renderiza título, imagem, ícones de tecnologia
//  2. Exibe modal com detalhes do projeto ao clicar em "Ver Mais"
// ─────────────────────────────────────────────────────────────

import { useState } from "react";

import Modal from "../common/Modal";
import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";

// props
// project: Objeto contendo os detalhes do projeto
// project.image: caminho da imagem do projeto
// project.title: título do projeto
// project.techIcons: ícones de tecnologia usados no projeto
function ProjectCard({ project }) {
  // controla visibilidade do modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card}>
        {/* Imagem de capa */}
        <div className={styles.image} style={{ backgroundImage: `url(${project.image})` }}>
          <div className={styles.overlay}></div>
          <h3>{project.title}</h3>
        </div>

        {/* Barra inferior com ícones + botão*/}
        <div className={styles.card_bar}>
          <div className={styles.card_icons}>
            {project.techIcons.map((icon) => (
              <span key={icon.key}>{icon}</span>
            ))}
          </div>
          <button onClick={handleModalToggle}>Ver Mais</button>
        </div>
      </div>

      {/* Modal via portal */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalToggle}
          title={project.title}
          description={project.description}
          date={project.date}
          image={project.image}
          videoSrc={project.videoSrc}
          videoFit={project.videoFit}
          githubLink={project.githubLink}
          deployLink={project.deployLink}
        />
      )}
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    videoSrc: PropTypes.string.isRequired,
    videoFit: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    deployLink: PropTypes.string.isRequired,
    techIcons: PropTypes.arrayOf(PropTypes.shape({ key: PropTypes.string.isRequired })).isRequired,
  }).isRequired,
};

export default ProjectCard;
