import { useState } from "react";
import ClassroomScene from "./ClassroomScene.jsx";
import Blackboard from "./Blackboard.jsx";
import TeacherDesk from "./TeacherDesk.jsx";
import Bookshelf from "./Bookshelf.jsx";
import LetterBox from "./LetterBox.jsx";
import MemoryWall from "./MemoryWall.jsx";
import Awards from "./Awards.jsx";
import ClassBell from "./ClassBell.jsx";
import ClassroomClock from "./ClassroomClock.jsx";
import "./Classroom.css";

// Hotspot coordinates are percentages of the 1440x960 scene
// illustration in ClassroomScene.jsx — keep the two in sync if
// you redraw the scene.
const hotspots = [
  {
    id: "blackboard",
    label: "The Blackboard",
    hint: "Things our teachers taught us",
    style: { left: "29.9%", top: "9.4%", width: "33.4%", height: "32%" },
  },
  {
    id: "clock",
    label: "The Clock",
    hint: "A quiet little truth",
    style: { left: "64.5%", top: "9.5%", width: "9%", height: "12.5%" },
  },
  {
    id: "bookshelf",
    label: "The Bookshelf",
    hint: "Lessons we'll never forget",
    style: { left: "75.5%", top: "22%", width: "21%", height: "38%" },
  },
  {
    id: "awards",
    label: "The Trophy Shelf",
    hint: "Teacher awards",
    style: { left: "77.5%", top: "8%", width: "13%", height: "7.5%" },
  },
  {
    id: "memorywall",
    label: "The Memory Wall",
    hint: "Pinned moments",
    style: { left: "4%", top: "43%", width: "21%", height: "21.5%" },
  },
  {
    id: "letterbox",
    label: "The Letter Box",
    hint: "Letters from your students",
    style: { left: "80%", top: "60%", width: "10%", height: "25%" },
  },
  {
    id: "desk",
    label: "The Teacher's Desk",
    hint: "A message just for them",
    style: { left: "32.5%", top: "64%", width: "35%", height: "20%" },
  },
  {
    id: "bell",
    label: "The Class Bell",
    hint: "One last ring",
    style: { left: "51%", top: "60%", width: "5%", height: "5%" },
  },
];

const modalComponents = {
  blackboard: Blackboard,
  desk: TeacherDesk,
  bookshelf: Bookshelf,
  letterbox: LetterBox,
  memorywall: MemoryWall,
  awards: Awards,
  clock: ClassroomClock,
};

export default function Classroom({ onDismissClass }) {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  const ActiveComponent = activeModal ? modalComponents[activeModal] : null;

  return (
    <main className="classroom" aria-label="Interactive classroom">
      <header className="classroom__banner">
        <p className="classroom__banner-title">Invertis University &middot; Department of BBA</p>
        <p className="classroom__banner-sub">Tap anything in the room to explore it</p>
      </header>

      <div className="classroom__scene-wrap">
        <div className="classroom__scene">
          <ClassroomScene />
          {hotspots.map((h) => (
            <button
              key={h.id}
              className={`hotspot hotspot--${h.id}`}
              style={h.style}
              onClick={() => setActiveModal(h.id)}
              aria-label={`${h.label} — ${h.hint}`}
            >
              <span className="hotspot__dot" aria-hidden="true" />
              <span className="hotspot__label">{h.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile-friendly list of the same objects, shown on narrow screens
          instead of shrinking the whole illustrated scene. */}
      <nav className="classroom__mobile-list" aria-label="Classroom objects">
        {hotspots.map((h) => (
          <button
            key={h.id}
            className="mobile-item"
            onClick={() => setActiveModal(h.id)}
          >
            <span className="mobile-item__label">{h.label}</span>
            <span className="mobile-item__hint">{h.hint}</span>
          </button>
        ))}
      </nav>

      {ActiveComponent && <ActiveComponent onClose={closeModal} />}

      {activeModal === "bell" && (
        <ClassBell onClose={closeModal} onDismissClass={onDismissClass} />
      )}
    </main>
  );
}
