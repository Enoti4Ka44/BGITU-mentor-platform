import styles from "./Modal.module.scss";
import CloseIcon from "../../../assets/images/icons/close-icon.svg";
import { useState } from "react";

function Modal({ children, onClose }) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <img src={CloseIcon} alt="" />
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;
