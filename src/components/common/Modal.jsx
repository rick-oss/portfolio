// ─────────────────────────────────────────────────────────────
// Modal.jsx
// Componente para exibir um modal com detalhes de um projeto
//  1. Renderiza via createPortal
//  2. Exibe vídeo, título, descrição, data e links do projeto
//  3. Suporta fechamento via função onClose
// ─────────────────────────────────────────────────────────────

import ReactDom from "react-dom";
import { FaX } from "react-icons/fa6";

import PropTypes from "prop-types";
import styles from "./Modal.module.css";

// props
// isOpen: Controla se o modal está aberto ou fechado
// onClose: Função para fechar o modal
// title: título do projeto
// description: descrição do projeto
// videoSrc: caminho do vídeo do projeto
// videoFit: como o vídeo deve se ajustar (cover ou contain)
// date: data do projeto
// githubLink: link para o repositório do projeto no GitHub
// deployLink: link para o deploy do projeto
function Modal({ isOpen, onClose, title, description, videoSrc, videoFit, date, githubLink, deployLink }) {
  if (!isOpen) return null;

  return ReactDom.createPortal(
    <section className={styles.modal_wrapper} aria-modal="true" role="dialog" aria-labelledby="modal-title">
      <div className={styles.modal_content}>
        <section className={styles.main_content}>
          <div className={styles.video_wrapper}>
            <video
              src={videoSrc}
              aria-label="Video do projeto"
              controls
              autoPlay
              loop
              className={`${styles.video} ${styles[videoFit]}`}
            />
          </div>

          <article className={styles.project_details}>
            <header className={styles.title_wrapper}>
              <h2 id="modal-title">{title}</h2>
              <button className={styles.close_button} aria-label="Fechar modal" onClick={onClose}>
                <FaX className={styles.icon_button} />
              </button>
            </header>
            <div className={styles.description}>{description}</div>
            <p className={styles.date}>{date}</p>
          </article>
        </section>

        <nav className={styles.buttons_wrapper}>
          <a href={githubLink} target="_blank" aria-label="Ver repositorio do projeto" rel="noopener noreferrer">
            Ver Repositório
          </a>
          <a href={deployLink} target="_blank" aria-label="Ver deploy do projeto" rel="noopener noreferrer">
            Ver Projeto
          </a>
        </nav>
      </div>
    </section>,
    document.getElementById("modal-root")
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  videoSrc: PropTypes.string.isRequired,
  videoFit: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  deployLink: PropTypes.string.isRequired,
};

export default Modal;
