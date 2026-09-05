import { useState } from "react";
import Modal from "./Modal.jsx";
import { studentLetters } from "../data/messages.js";
import "./LetterBox.css";

export default function LetterBox({ onClose }) {
  const [opened, setOpened] = useState(false);
  const [index, setIndex] = useState(0);

  const letter = studentLetters[index];

  const goNext = () => setIndex((i) => (i + 1) % studentLetters.length);
  const goPrev = () => setIndex((i) => (i - 1 + studentLetters.length) % studentLetters.length);

  return (
    <Modal
      onClose={onClose}
      eyebrow="The Letter Box"
      title="Letters From Your Students"
      labelledBy="letterbox-heading"
    >
      {!opened ? (
        <div className="envelope-stage">
          <button
            className="envelope"
            onClick={() => setOpened(true)}
            aria-label="Open the envelope to read letters from students"
          >
            <span className="envelope__flap" />
            <span className="envelope__body" />
            <span className="envelope__seal">✉</span>
          </button>
          <p className="envelope-hint">Tap the envelope to open it</p>
        </div>
      ) : (
        <div className="letter-stage">
          <article className="letter-paper" key={index}>
            <p className="letter-paper__from">From: {letter.from}</p>
            <p className="letter-paper__body">{letter.body}</p>
          </article>

          <div className="letter-nav">
            <button className="letter-nav__btn" onClick={goPrev} aria-label="Previous letter">
              ← Previous
            </button>
            <span className="letter-nav__count">
              {index + 1} / {studentLetters.length}
            </span>
            <button className="letter-nav__btn" onClick={goNext} aria-label="Next letter">
              Next →
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}
