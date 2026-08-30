import { useEffect, useState, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { africaCountries, africaCountryFlags } from "../data";
import HeroGlobe from "./HeroGlobe";

type Props = {
  onExplore?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

export default function HomeHero({ onExplore }: Props) {
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const t = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <section className={`home-hero${ready ? " is-ready" : ""}`} aria-label="Hero">
      <div className="home-hero__inner">
        <div className="home-hero__content">
          <p className="home-hero__kicker">Global sovereign digital infrastructure</p>

          <h1>Leading digital nations</h1>

          <p className="home-hero__lede">
            We build the sovereign AI, cloud, and cyber backbone that enables governments to move from
            ambition to real-world impact, at scale.
          </p>

          <div className="home-hero__actions">
            <a className="button primary" href="#manufacturing" onClick={onExplore}>
              Explore now
            </a>
          </div>

          <div className="home-hero__engagements">
            <p className="home-hero__engagements-label">
              Active across {africaCountries.length} African nations
            </p>
            <ul className="home-hero__flags">
              {africaCountries.map((name) => {
                const code = africaCountryFlags[name];
                return (
                  <li key={code} className={active === name ? "is-active" : ""}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(name)}
                      onMouseLeave={() => setActive(null)}
                      onFocus={() => setActive(name)}
                      onBlur={() => setActive(null)}
                    >
                      <img
                        src={`https://flagcdn.com/w40/${code}.png`}
                        srcSet={`https://flagcdn.com/w80/${code}.png 2x`}
                        width={20}
                        height={14}
                        alt=""
                      />
                      <span>{name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <Link className="home-hero__engagements-link" to="/africa">
              View all engagements
            </Link>
          </div>
        </div>

        <div className="home-hero__visual">
          <HeroGlobe active={active} onSelect={setActive} />
        </div>
      </div>
    </section>
  );
}
