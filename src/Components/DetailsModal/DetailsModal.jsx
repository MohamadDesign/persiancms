import React, { useEffect } from "react";
import "./DetailsModal.css";

export default function DetailsModal({ closeDetailsAction, children }) {
  useEffect(() => {
    const checkKey = (event) => {
      if (event.keyCode === 27) {
        closeDetailsAction();
      }
    };
    window.addEventListener("keydown", checkKey);

    return () => window.removeEventListener("keydown", checkKey);
  });
  return (
    <>
      <div className="modal-parent active">
        <div className="details-modal">{children}</div>
      </div>
    </>
  );
}
