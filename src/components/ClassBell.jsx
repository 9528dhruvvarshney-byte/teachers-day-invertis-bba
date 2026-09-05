import { useState } from "react";
import Modal from "./Modal.jsx";
import { bellSequence } from "../data/messages.js";
import "./ClassBell.css";

// Plays a short, synthesised bell chime. No audio file is required,
// and it only ever plays in direct response to the user's click —
// never on load or automatically.
function ringBellSound() {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const now = ctx.currentTime;
    [880, 1320].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, now + i * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.15, now + i * 0.05 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.05 + 0.9);
      osc.connect(gain).connect(ctx.destination);
      osc.start(now + i * 0.05);
      osc.stop(now + i * 0.05 + 1);
    });
    setTimeout(() => ctx.close(), 1200);
  } catch {
    // Silently ignore — sound is a nice-to-have, not a requirement.
  }
}

export default function ClassBell({ onClose, onDismissClass }) {
  const [rung, setRung] = useState(false);
  const [step, setStep] = useState(0);

  const handleRing = () => {
    setRung(true);
    ringBellSound();
  };

  return (
    <Modal
      onClose={onClose}
      dark
      eyebrow="The Class Bell"
      title="One last ring"
      labelledBy="bell-heading"
    >
      <div className="bell-stage">
        <button
          className={`bell-shape${rung ? " bell-shape--rung" : ""}`}
          onClick={handleRing}
          aria-label="Ring the class bell"
        >
          <span className="bell-shape__dome" />
          <span className="bell-shape__clapper" />
        </button>

        {!rung && <p className="bell-hint">Tap the bell to ring it</p>}

        {rung && (
          <div className="bell-text">
            {bellSequence.slice(0, step + 1).map((line, i) => (
              <p className="bell-text__line" key={i}>
                {line}
              </p>
            ))}

            {step < bellSequence.length - 1 ? (
              <button className="bell-continue" onClick={() => setStep((s) => s + 1)}>
                Continue
              </button>
            ) : (
              <button
                className="bell-continue bell-continue--final"
                onClick={onDismissClass}
              >
                Read the final message →
              </button>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
}
