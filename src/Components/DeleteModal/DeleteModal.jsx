import React from "react";
import "./DeleteModal.css";
import ReactDOM from "react-dom";

export default function   DeleteModal({ acceptAction, cancelAction, title }) {
  return ReactDOM.createPortal(
    <>
      <div className="modal-parent active">
        <div className="delete-modal">
          <h1>{title}</h1>
          <div className="delete-modal-btns">
            <button
              className="delete-btn delete-modal-accept-btn"
              onClick={() => acceptAction()}
            >
              بله
            </button>
            <button
              className="delete-btn delete-modal-reject-btn"
              onClick={() => cancelAction()}
            >
              خیر
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal-parent")
  );
}
