import Modal from "./Modal.jsx";
import { clockMessage } from "../data/messages.js";

export default function ClassroomClock({ onClose }) {
  return (
    <Modal
      onClose={onClose}
      dark
      eyebrow="The Classroom Clock"
      title="A quiet little truth"
      labelledBy="clock-heading"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: "6px 0 4px" }}>
        {clockMessage.split("\n").map((line, i) => (
          <p
            key={i}
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "1.25rem",
              color: "var(--chalk)",
            }}
          >
            {line}
          </p>
        ))}
      </div>
    </Modal>
  );
}
