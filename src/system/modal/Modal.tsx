import React, { useEffect } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
  borderColor: string;
  color: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  borderColor,
  color,
}) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div
        className={styles.modalContent}
        style={{ borderColor, color }}
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
          title="close modal"
          style={{ color }}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
