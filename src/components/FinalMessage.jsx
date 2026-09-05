import { finalMessage } from "../data/messages.js";
import "./FinalMessage.css";

export default function FinalMessage({ onReturn }) {
  return (
    <main className="final" aria-label="Closing message">
      <div className="final__content">
        <p className="final__dismissed">Class dismissed.</p>

        <h1 className="final__heading">{finalMessage.heading}</h1>

        <div className="final__body">
          {finalMessage.body.map((line, i) => (
            <p key={i} style={{ animationDelay: `${0.15 * i + 0.2}s` }}>
              {line}
            </p>
          ))}
        </div>

        <p className="final__closing">{finalMessage.closing}</p>
        <p className="final__signoff">{finalMessage.signoff}</p>
        <p className="final__from">{finalMessage.from}</p>

        <button className="final__return" onClick={onReturn}>
          ← Back to the classroom
        </button>
      </div>
    </main>
  );
}
