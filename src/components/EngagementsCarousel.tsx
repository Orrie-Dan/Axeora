import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { africaCountryFlags, landingEngagements } from "../data";

export default function EngagementsCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const count = landingEngagements.length;

  function scrollTo(i: number) {
    const next = (i + count) % count;
    setIndex(next);
    const el = track.current?.children[next] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  return (
    <section className="landing-engagements" id="engagements">
      <div className="wrap">
        <h2 className="landing-engagements__title">Meet Our Engagements</h2>
        <div className="landing-engagements__controls">
          <button type="button" aria-label="Previous" onClick={() => scrollTo(index - 1)}>
            ←
          </button>
          <button type="button" aria-label="Next" onClick={() => scrollTo(index + 1)}>
            →
          </button>
        </div>
      </div>
      <div className="landing-engagements__track" ref={track}>
        {landingEngagements.map((e) => {
          const flag = africaCountryFlags[e.country];
          return (
            <article className="landing-engagements__card" key={e.country}>
              <div className="landing-engagements__photo">
                <img src={e.image} alt="" loading="lazy" />
                <div className="landing-engagements__photo-overlay" />
              </div>
              <div className="landing-engagements__body">
                {flag ? (
                  <img
                    className="landing-engagements__flag"
                    src={`https://flagcdn.com/w40/${flag}.png`}
                    width={24}
                    height={16}
                    alt=""
                  />
                ) : null}
                <h3>{e.name}</h3>
                <p>{e.subtitle}</p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="wrap landing-engagements__footer">
        <Link className="btn btn-dark" to="/africa">
          Explore UAE–Africa bridge
        </Link>
      </div>
    </section>
  );
}
