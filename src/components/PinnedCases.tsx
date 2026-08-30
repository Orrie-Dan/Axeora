import { Link } from "react-router-dom";
import { useCases } from "../data";

export default function PinnedCases() {
  return (
    <section className="use-cases-section" id="use-case">
      <div className="wrap">
        <header className="use-cases-section__head" data-aos="fade-up">
          <p className="capabilities-eyebrow capabilities-eyebrow--dark">Use cases</p>
          <h2>Featured use cases</h2>
          <p>
            Real-world applications of sovereign infrastructure — from citizen services to national
            cyber defence and intelligent cities.
          </p>
        </header>

        <div className="use-cases-grid">
          {useCases.map((u, i) => (
            <article
              key={u.title}
              className="use-case-card"
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              <div className="use-case-card__media">
                <img src={u.image} alt="" loading="lazy" decoding="async" />
              </div>
              <div className="use-case-card__body">
                <span className="use-case-card__kicker">{u.kicker}</span>
                <h3>{u.title}</h3>
                <p>{u.text}</p>
                <Link className="use-case-card__link" to={u.to}>
                  Learn more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
