import { useState } from "react";
import Modal from "./Modal.jsx";
import memories from "../data/memories.js";
import "./MemoryWall.css";

export default function MemoryWall({ onClose }) {
  const [active, setActive] = useState(null);

  return (
    <Modal
      onClose={onClose}
      eyebrow="The Memory Wall"
      title="Pinned Moments"
      labelledBy="memorywall-heading"
    >
      {!active ? (
        <div className="polaroid-grid">
          {memories.map((m, i) => (
            <button
              key={m.id}
              className="polaroid"
              style={{ "--tilt": `${(i % 2 === 0 ? -1 : 1) * (2 + (i % 3))}deg` }}
              onClick={() => setActive(m)}
              aria-label={`Open memory: ${m.title}`}
            >
              <span className="polaroid__photo">
                {m.image ? (
                  <img src={m.image} alt={m.title} />
                ) : (
                  <span className="polaroid__placeholder">Photo coming soon</span>
                )}
              </span>
              <span className="polaroid__caption">{m.title}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="polaroid-detail">
          <div className="polaroid-detail__photo">
            {active.image ? (
              <img src={active.image} alt={active.title} />
            ) : (
              <span className="polaroid__placeholder">Photo coming soon</span>
            )}
          </div>
          <h3 className="polaroid-detail__title">{active.title}</h3>
          <p className="polaroid-detail__caption">{active.caption}</p>
          {active.studentMessage && (
            <p className="polaroid-detail__quote">&ldquo;{active.studentMessage}&rdquo;</p>
          )}
          <button className="polaroid-detail__back" onClick={() => setActive(null)}>
            ← Back to the wall
          </button>
        </div>
      )}
    </Modal>
  );
}
