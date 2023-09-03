import React from "react";
import "./ImageModal.css";

const ImageModal = ({ imageUrl, onClose }) => {

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("image-modal")) {
      onClose();
    }};
  
  return (
    <div className="image-modal" onClick={handleClickOutside}>
      <span className="close-modal" onClick={onClose}>
        &times;
      </span>
      <img className="modal-content" src={imageUrl} alt="Fullscreen" />
    </div>
  );
};

export default ImageModal;