import { useEffect, useState, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { africaCountries, africaCountryFlags, africaHeroCards, heroOverview } from "../data";
import AfricaGeoMap from "./AfricaGeoMap";

const ROTATE_MS = 3200;

type Props = {
  onExplore?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

export default function HomeHero({ onExplore }: Props) {
  const [ready, setReady] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [autoIndex, setAutoIndex] = useState(0);
  const active = hovered ?? selected ?? africaCountries[autoIndex];
  const cards = (active && africaHeroCards[active as keyof typeof africaHeroCards]) || heroOverview;
  const flag = active ? africaCountryFlags[active as keyof typeof africaCountryFlags] : null;

  useEffect(() => {
    const t = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(t);
  }, []);

  useEffect(() => {
    if (hovered || selected) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;

    const interval = window.setInterval(() => {
      setAutoIndex((prev) => (prev + 1) % africaCountries.length);
    }, ROTATE_MS);

    return () => window.clearInterval(interval);
  }, [hovered, selected]);

  function toggleCountry(country: string | null) {
    if (!country) {
      setSelected(null);
      return;
    }
    setSelected((prev) => (prev === country ? null : country));
  }

  return (
    <section className={`home-hero${ready ? " is-ready" : ""}`} aria-label="Hero">
      <div className="home-hero__backdrop" aria-hidden={false}>
        <AfricaGeoMap
          tone="hero"
          variant="cinematic"
          activeCountry={active}
          onHighlight={setHovered}
          onSelect={toggleCountry}
        />
        <div className="home-hero__glow" aria-hidden />
        <div className="home-hero__vignette" aria-hidden />
      </div>

      <div className="home-hero__shell">
        <header className="home-hero__intro">
          <p className="home-hero__kicker">UAE–Africa digital corridor</p>
          <h1>Leading digital nations</h1>
          <p className="home-hero__lede">
            Sovereign AI, cloud, and cyber infrastructure for governments across twelve African nations.
          </p>
          <div className="home-hero__actions">
            <a className="button primary" href="#manufacturing" onClick={onExplore}>
              Explore now
            </a>
            <Link className="button Secondary" to="/africa">
              View engagements
            </Link>
          </div>
        </header>

        <div className="home-hero__stage">
          <div className="home-hero__detail home-hero__detail--left" key={`${active ?? "overview"}-a`}>
            <p className="home-hero__detail-kicker">
              {flag && cards[0].kicker !== "UAE" ? (
                <img
                  src={`https://flagcdn.com/w40/${flag}.png`}
                  srcSet={`https://flagcdn.com/w80/${flag}.png 2x`}
                  width={20}
                  height={14}
                  alt=""
                />
              ) : null}
              {cards[0].kicker}
            </p>
            <h2>{cards[0].title}</h2>
            <p>{cards[0].body}</p>
          </div>

          <div className="home-hero__stage-gap" aria-hidden />

          <div className="home-hero__detail home-hero__detail--right" key={`${active ?? "overview"}-b`}>
            <p className="home-hero__detail-kicker">{cards[1].kicker}</p>
            <h2>{cards[1].title}</h2>
            <p>{cards[1].body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
