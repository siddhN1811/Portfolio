import React from "react";
import "./ImageModal.css";

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="image-modal">
      <span className="close-modal" onClick={onClose}>
        &times;
      </span>
      <img className="modal-content" src={imageUrl} alt="Fullscreen" />
    </div>
  );
};

export default ImageModal;