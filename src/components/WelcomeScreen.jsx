import "./WelcomeScreen.css";

export default function WelcomeScreen({ onEnter }) {
  return (
    <main className="welcome" aria-label="Welcome screen">
      <div className="welcome__dust" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className={`speck speck--${i % 6}`} />
        ))}
      </div>

      <div className="welcome__content">
        <p className="welcome__kicker">Invertis University · Department of BBA</p>

        <p className="welcome__tag">A little something from the classroom</p>

        <h1 className="welcome__title">
          Happy
          <br />
          Teachers&rsquo; Day
        </h1>

        <p className="welcome__line">
          One classroom.
          <br />
          Countless memories.
          <br />
          A little surprise from your students.
        </p>

        <button className="welcome__cta" onClick={onEnter}>
          Enter the classroom
          <span aria-hidden="true" className="welcome__arrow">
            →
          </span>
        </button>

        <p className="welcome__footer">Made with ♥ by BBA Students · 2026</p>
      </div>
    </main>
  );
}
