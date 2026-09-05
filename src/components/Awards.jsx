import Modal from "./Modal.jsx";
import awards from "../data/awards.js";
import "./Awards.css";

export default function Awards({ onClose }) {
  return (
    <Modal
      onClose={onClose}
      eyebrow="The Trophy Shelf"
      title="A Few Well-Deserved Awards"
      labelledBy="awards-heading"
    >
      <div className="trophy-shelf">

        <div className="trophy-intro">
          <div className="trophy-intro__icon" aria-hidden="true">
            🏆
          </div>

          <div>
            <p className="trophy-intro__eyebrow">
              Teachers' Day · BBA
            </p>

            <p className="trophy-intro__text">
              Some awards are official. These ones are a little more
              personal — inspired by the little things that make our
              teachers unforgettable.
            </p>
          </div>
        </div>

        <div className="trophy-shelf__frame">
          <div className="trophy-shelf__top-wood" />

          <div className="trophy-grid">
            {awards.map((award, index) => (
              <article
                className="trophy-card"
                key={award.id}
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
              >
                <div
                  className="trophy-card__badge"
                  aria-hidden="true"
                >
                  🏆
                </div>

                <div className="trophy-card__body">
                  <span className="trophy-card__label">
                    SPECIAL RECOGNITION
                  </span>

                  <h3 className="trophy-card__title">
                    {award.title}
                  </h3>

                  <div className="trophy-card__recipient">
                    <span>Presented to</span>
                    <strong>{award.faculty}</strong>
                  </div>

                  <div className="trophy-card__divider" />

                  <p className="trophy-card__description">
                    {award.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="trophy-shelf__bottom-wood">
            <span />
            <span />
            <span />
          </div>
        </div>

        <p className="trophy-footer">
          Because every great teacher leaves behind a story worth
          remembering.
        </p>

      </div>
    </Modal>
  );
}