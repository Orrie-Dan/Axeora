import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { audiences, stats } from "../data";

export default function MissionTabs() {
  const [index, setIndex] = useState(0);
  const indicator = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = audiences[index];

  useEffect(() => {
    const tab = tabRefs.current[index];
    if (!tab || !indicator.current) return;
    gsap.to(indicator.current, {
      top: tab.offsetTop,
      height: Math.max(22, tab.offsetHeight * 0.55),
      duration: 0.3,
      ease: "power2.out",
    });
  }, [index]);

  return (
    <section className="hero mission_tabber_section" id="mission">
      <div
        className="hero-bg rellax"
        style={{ backgroundImage: "url(/core42/mission.webp)" }}
      />
      <div className="hero-inner">
        <h2 className="hero-title">AxeOra for every mission-critical need</h2>
        <p>
          End-to-end AI, cloud, and cyber infrastructure purpose-built for those who demand
          sovereignty, scale, and performance.
        </p>
        <div className="divider" />
        <div className="hero-grid">
          <nav className="hero-tabs" aria-label="Audiences">
            <div className="indicator" ref={indicator} />
            {audiences.map((a, i) => (
              <button
                key={a.id}
                id={`tab${i + 1}`}
                type="button"
                className={index === i ? "active" : ""}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                onClick={() => setIndex(i)}
              >
                {a.label} <span className="arrow-icon" />
              </button>
            ))}
          </nav>
          <div className="hero-content-wrapper">
            <div className="hero-content item active" key={current.id}>
              <h2>{current.title}</h2>
              <p>{current.body}</p>
              <ul>
                {current.points.map((pt) => (
                  <li key={pt.title}>
                    <strong>{pt.title}:</strong> {pt.text}
                  </li>
                ))}
              </ul>
              <div className="cta">
                <Link className="hero-content__button button primary" to="/contact">
                  Schedule demo
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-stats-wrapper">
            <div className="hero-stats active">
              {stats.map((s, i) => (
                <div className="stat" key={s.label}>
                  <div className="num">{s.value}</div>
                  <div className="label">{s.label}</div>
                  <div className={`line${i === 0 ? " wide" : ""}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
