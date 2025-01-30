import PropTypes from "prop-types";
import ReactDom from "react-dom";
import { FaX } from "react-icons/fa6";

import styles from "./Modal.module.css";

function Modal({ isOpen, onClose, title, description, videoSrc, videoFit, date, links }) {
  if (!isOpen) return null;

  return ReactDom.createPortal(
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.main_content}>
          <div className={styles.video_wrapper}>
            {/*video*/}
            <video src={videoSrc} controls autoPlay loop className={`${styles.video} ${styles[videoFit]}`} />
          </div>
          <div className={styles.project_details}>
            <div className={styles.title_wrapper}>
              <h2>{title}</h2>
              <button className={styles.close_button} onClick={onClose}>
                <FaX className={styles.icon_button} />
              </button>
            </div>
            <div className={styles.description}>{description}</div>
            <p className={styles.date}>{date}</p>
          </div>
        </div>
        <div className={styles.buttons_wrapper}>
          <a href={links} target="_blank" rel="noopener noreferrer">
            Ver Repositório
          </a>
          <a href={links} target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  videoSrc: PropTypes.string.isRequired,
  videoFit: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  links: PropTypes.string.isRequired,
};

export default Modal;
