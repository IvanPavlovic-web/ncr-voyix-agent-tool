import { useEffect } from "react";
import { FUNNY_GIFS } from "@data/constants";
import "./ConfirmModal.css";

const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  const randomGif = FUNNY_GIFS[Math.floor(Math.random() * FUNNY_GIFS.length)];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onCancel();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onCancel]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <div className="confirm-modal" onClick={handleBackdropClick}>
      <div className="confirm-content">
        <div
          className="confirm-message"
          dangerouslySetInnerHTML={{ __html: message }}
        />
        <div className="confirm-gif-container">
          <img src={randomGif} alt="Funny GIF" />
        </div>
        <div className="confirm-buttons">
          <button className="confirm-btn confirm-btn-no" onClick={onCancel}>
            Cancel
          </button>
          <button className="confirm-btn confirm-btn-yes" onClick={onConfirm}>
            Close Tab
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
