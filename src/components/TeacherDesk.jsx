import { useState } from "react";
import Modal from "./Modal.jsx";
import teachers from "../data/teachers.js";
import "./TeacherDesk.css";

export default function TeacherDesk({ onClose }) {
  const [selectedId, setSelectedId] = useState(teachers[0]?.id ?? "");
  const teacher =
    teachers.find((t) => t.id === selectedId) ?? teachers[0];

  const initials =
    teacher?.name
      ?.split(" ")
      .filter((w) => w && !w.endsWith("."))
      .map((w) => w[0])
      .slice(0, 2)
      .join("") ?? "";

  return (
    <Modal
      onClose={onClose}
      eyebrow="The Teacher's Desk"
      title="A note left on your desk..."
      labelledBy="desk-heading"
    >
      <div className="desk-letter">

        <div className="desk-letter__top">
          <span className="desk-letter__stamp">BBA • 2026</span>
          <span className="desk-letter__date">Teachers' Day</span>
        </div>

        <div className="desk-letter__selector">
          <label htmlFor="teacher-select">
            This note is for
          </label>

          <select
            id="teacher-select"
            className="desk-letter__select"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
          >
            {teachers.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        {teacher && (
          <article className="desk-note" key={teacher.id}>

            <div className="desk-note__profile">
              <div className="desk-note__photo" aria-hidden="true">
                {teacher.photo ? (
                  <img src={teacher.photo} alt="" />
                ) : (
                  <span>{initials}</span>
                )}
              </div>

              <div>
                <h3>{teacher.name}</h3>
                <p>
                  {teacher.designation} · {teacher.subject}
                </p>
              </div>
            </div>

            <div className="desk-note__paper">
              <p className="desk-note__greeting">
                Dear Teacher,
              </p>

              <p className="desk-note__message">
                “{teacher.message}”
              </p>

              <p className="desk-note__closing">
                With gratitude,
                <br />
                <span>Your students</span>
              </p>
            </div>

            <div className="desk-note__memories">

              <div className="desk-note__memory">
                <span className="desk-note__label">
                  A memory we kept
                </span>
                <p>{teacher.memory}</p>
              </div>

              <div className="desk-note__memory">
                <span className="desk-note__label">
                  Something we heard
                </span>
                <p>
                  “{teacher.studentQuote.replace(/^“|”$/g, "")}”
                </p>
              </div>

              <div className="desk-note__award">
                <span
                  className="desk-note__award-icon"
                  aria-hidden="true"
                >
                  ★
                </span>

                <div>
                  <span className="desk-note__label">
                    Your unofficial award
                  </span>
                  <p>{teacher.award}</p>
                </div>
              </div>

            </div>
          </article>
        )}
      </div>
    </Modal>
  );
}