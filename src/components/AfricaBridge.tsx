import { useState } from "react";
import { Link } from "react-router-dom";
import { africaCountries } from "../data";
import AfricaMap from "./AfricaMap";

type Props = {
  compact?: boolean;
};

export default function AfricaBridge({ compact = false }: Props) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className={`africa-bridge${compact ? " africa-bridge--compact" : ""}`} id="africa-bridge">
      <div className="wrap africa-bridge__grid">
        <div>
          <header className="africa-bridge__head" data-aos="fade-up">
            <p className="capabilities-eyebrow capabilities-eyebrow--dark">UAE–Africa Digital Bridge</p>
            <h2>A corridor between Emirati capability and African ambition.</h2>
            <p>
              AxeOra acts as a strategic bridge connecting UAE innovation, investment, and expertise
              with Africa&apos;s digital transformation ambitions.
            </p>
          </header>
          <ul className="africa-bridge__countries" data-aos="fade-up">
            {africaCountries.map((c) => (
              <li key={c} className={active === c ? "is-active" : ""}>
                <button type="button" onMouseEnter={() => setActive(c)} onMouseLeave={() => setActive(null)} onFocus={() => setActive(c)} onBlur={() => setActive(null)}>
                  {c}
                </button>
              </li>
            ))}
          </ul>
          {!compact ? (
            <Link className="btn btn-accent africa-bridge__cta" to="/africa" data-aos="fade-up">
              Explore the bridge
            </Link>
          ) : null}
        </div>
        <AfricaMap activeCountry={active} onSelect={setActive} />
      </div>
    </section>
  );
}
