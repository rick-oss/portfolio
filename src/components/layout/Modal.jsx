import PropTypes from "prop-types";
import ReactDom from "react-dom";
import { FaX } from "react-icons/fa6";

import styles from "./Modal.module.css";
import imagem from "./../../assets/conselho.png";

function Modal({ children, isOpen, onClose, titulo }) {
  if (!isOpen) return null;

  console.log(isOpen);

  return ReactDom.createPortal(
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.main_content}>
          <div className={styles.video_wrapper}>
            {/*video*/}
            <img src={imagem} />
          </div>

          <div className={styles.project_details}>
            <div className={styles.title_wrapper}>
              <h2>{titulo}</h2>
              <button className={styles.close_button} onClick={onClose}>
                <FaX className={styles.icon_button} />
              </button>
            </div>
            <p className={styles.text}>{children}</p>
            <p className={styles.date}>11 de Novembro, 2023</p>
          </div>
        </div>
        <div className={styles.buttons_wrapper}>
          <a href="https://github.com/rick-oss" target="_blank" rel="noopener noreferrer">
            Ver Repositório
          </a>
          <a href="https://github.com/rick-oss" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  titulo: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
};

export default Modal;
