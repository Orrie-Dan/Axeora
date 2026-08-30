import { Link } from "react-router-dom";
import { type CSSProperties } from "react";
import { products } from "../data";
import { capabilityIcons } from "./icons/CapabilityIcons";

const accents: Record<string, string> = {
  "ai-infrastructure": "#0B57BE",
  "sovereign-cloud": "#0C9791",
  cybersecurity: "#0B57BE",
  "digital-public-infrastructure": "#12924F",
  "smart-cities": "#04A9E8",
};

export default function CapabilitiesGrid() {
  return (
    <section className="capabilities-section" id="manufacturing">
      <div className="wrap">
        <header className="capabilities-section__head" data-aos="fade-up">
          <p className="capabilities-eyebrow">Capabilities</p>
          <h2>
            National-scale
            <br />
            intelligence
          </h2>
          <p className="capabilities-section__lead">
            End-to-end AI, cloud, and cyber infrastructure purpose-built for those who demand
            sovereignty, scale, and performance.
          </p>
        </header>

        <div className="capabilities-grid">
          {products.map((p, i) => {
            const Icon = capabilityIcons[p.slug as keyof typeof capabilityIcons];
            const accent = accents[p.slug] ?? "#0B57BE";
            return (
              <article
                key={p.slug}
                className="cap-card"
                style={{ "--cap-accent": accent, "--cap-delay": `${i * 0.07}s` } as CSSProperties}
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                {Icon ? <Icon className="cap-card__icon" /> : null}
                <h3>{p.title}</h3>
                <p>{p.card}</p>
                <ul>
                  {p.items.slice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link className="cap-card__link" to={`/solutions/${p.slug}`}>
                  Learn more
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
