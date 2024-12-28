import PropTypes from "prop-types";
import { useState } from "react";

import Modal from "./Modal";
import styles from "./ProjectCard.module.css";

function ProjectCard({ urlImage, techIcons }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
    console.log(isModalOpen);
  };

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.image} style={{ backgroundImage: `url(${urlImage})` }}>
          <div className={styles.overlay}></div>
          <h3>Gerador de Conselhos</h3>
        </div>
        <div className={styles.card_bar}>
          <div className={styles.card_icons}>
            {techIcons.map((icon) => (
              <span key={icon.key}>{icon}</span>
            ))}
          </div>
          <button onClick={handleModalToggle}>Ver Mais</button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalToggle} titulo="Gerador de Conselhos">
        O projeto de modo geral tem duas APIs integradas. A principal e já citada{" "}
        <a href="https://api.adviceslip.com/" target="_blank">
          Adviceslip
        </a>
        , que gera conselhos com o inglês como idioma padrão. A segunda API é a{" "}
        <a href="https://mymemory.translated.net/" target="_blank">
          Mymemory
        </a>
        . API de traduçao de textos que foi usada para traduzir os conselhos gerados para o português, que serve como
        uma segunda opçao de idioma.
      </Modal>
    </div>
  );
}

ProjectCard.propTypes = {
  urlImage: PropTypes.string.isRequired,
  techIcons: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default ProjectCard;
