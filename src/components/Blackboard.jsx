import { useState } from "react";
import Modal from "./Modal.jsx";
import { blackboardMessages } from "../data/messages.js";
import "./Blackboard.css";

export default function Blackboard({ onClose }) {
  const [revealed, setRevealed] = useState(1);

  const showNext = () => {
    setRevealed((r) => Math.min(r + 1, blackboardMessages.length));
  };

  const isDone = revealed >= blackboardMessages.length;

  return (
    <Modal
      onClose={onClose}
      dark
      eyebrow="The Blackboard"
      title="Things Our Teachers Taught Us"
      labelledBy="blackboard-heading"
    >
      <div className="chalkboard-inner" role="list">
        {blackboardMessages.slice(0, revealed).map((msg, i) => (
          <p
            className="chalk-line"
            role="listitem"
            key={i}
            style={{ animationDelay: `${i === revealed - 1 ? 0 : 0}ms` }}
          >
            {msg.split("\n").map((line, j) => (
              <span key={j} className="chalk-line__row">
                {line}
              </span>
            ))}
          </p>
        ))}
      </div>

      <div className="chalkboard-actions">
        {!isDone ? (
          <button className="btn-chalk" onClick={showNext}>
            Reveal another lesson
          </button>
        ) : (
          <p className="chalkboard-done">That&rsquo;s the whole board, for now.</p>
        )}
      </div>
    </Modal>
  );
}
