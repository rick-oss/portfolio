import PropTypes from "prop-types";
import { useState } from "react";

import Modal from "./Modal";
import styles from "./ProjectCard.module.css";

function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
    console.log(isModalOpen);
  };

  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card}>
        <div className={styles.image} style={{ backgroundImage: `url(${project.image})` }}>
          <div className={styles.overlay}></div>
          <h3>{project.title}</h3>
        </div>
        <div className={styles.card_bar}>
          <div className={styles.card_icons}>
            {project.techIcons.map((icon) => (
              <span key={icon.key}>{icon}</span>
            ))}
          </div>
          <button onClick={handleModalToggle}>Ver Mais</button>
        </div>
      </div>
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
    description: PropTypes.object.isRequired,
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
