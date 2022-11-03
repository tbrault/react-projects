import React from "react";
import { FaTimes } from "react-icons/fa";

type ModalProps = {
  showModal: boolean;
  setShowModal: Function;
};

const Modal = ({ showModal, setShowModal }: ModalProps) => {
  return (
    <div className={`${showModal && "show-modal"} modal-overlay`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={() => setShowModal(false)}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
