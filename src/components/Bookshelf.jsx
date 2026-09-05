import { useState } from "react";
import Modal from "./Modal.jsx";
import "./Bookshelf.css";

// REPLACE / EDIT THESE FREELY — one "book" per subject/lesson.
const lessons = [
  { subject: "Marketing", lesson: "You taught us that consumers aren't just numbers.", color: "#7a2f2f" },
  { subject: "Leadership", lesson: "You taught us to take responsibility, even when no one was watching.", color: "#3a5a4a" },
  { subject: "Human Resource Mgmt.", lesson: "You taught us that people matter more than processes.", color: "#4a3a6a" },
  { subject: "Business Statistics", lesson: "You taught us that patience turns confusion into clarity.", color: "#8a6a3a" },
  { subject: "Business Communication", lesson: "You taught us that how we say something matters as much as what we say.", color: "#2f4a3e" },
  { subject: "Strategic Management", lesson: "You taught us to think two steps ahead, and still stay kind.", color: "#6b4226" },
];

export default function Bookshelf({ onClose }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Modal
      onClose={onClose}
      eyebrow="The Bookshelf"
      title="Lessons We'll Never Forget"
      labelledBy="bookshelf-heading"
    >
      <div className="book-row">
        {lessons.map((book, i) => (
          <button
            key={book.subject}
            className={`book${openIndex === i ? " book--open" : ""}`}
            style={{ background: book.color }}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
            aria-label={`${book.subject}: reveal the lesson`}
          >
            <span className="book__spine-text">{book.subject}</span>
          </button>
        ))}
      </div>

      <div className="book-reveal" role="status" aria-live="polite">
        {openIndex !== null ? (
          <>
            <p className="book-reveal__subject">{lessons[openIndex].subject}</p>
            <p className="book-reveal__lesson">&ldquo;{lessons[openIndex].lesson}&rdquo;</p>
          </>
        ) : (
          <p className="book-reveal__hint">Pick a book from the shelf to open it.</p>
        )}
      </div>
    </Modal>
  );
}
