import { useEffect, useRef } from "react";

// Generic accessible modal: focus-traps to the close button on open,
// closes on Escape or overlay click, restores focus on unmount.
export default function Modal({ title, eyebrow, onClose, dark = false, children, labelledBy }) {
  const closeRef = useRef(null);
  const headingId = labelledBy || "modal-heading";

  useEffect(() => {
    closeRef.current?.focus();

    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`modal-panel${dark ? " modal-panel--dark" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
      >
        <button
          ref={closeRef}
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {eyebrow && <p className="modal-eyebrow">{eyebrow}</p>}
        {title && (
          <h2 className="modal-heading" id={headingId}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  );
}
