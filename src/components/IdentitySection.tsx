import { Link } from "react-router-dom";
import { company, identity, pillars } from "../data";

export default function IdentitySection() {
  return (
    <section className="identity-section" id="who">
      <div className="wrap identity-section__grid">
        <div className="identity-section__copy">
          <p className="capabilities-eyebrow capabilities-eyebrow--dark">Who we are</p>
          <h2>{identity[0].title}</h2>
          <p className="identity-section__lede">{identity[0].body}</p>
          <p>{identity[1].body}</p>
          <p>{identity[2].body}</p>
          <Link className="btn btn-dark identity-section__cta" to="/about">
            About AxeOra
          </Link>
        </div>

        <div className="identity-section__aside">
          <p className="identity-section__tagline">{company.tagline}</p>
          <ul className="identity-pillars">
            {pillars.map((pillar) => (
              <li key={pillar.label} className={`identity-pillar identity-pillar--${pillar.tone}`}>
                {pillar.label}
              </li>
            ))}
          </ul>
          <p className="identity-section__positioning">“{company.positioning}”</p>
        </div>
      </div>
    </section>
  );
}
