import { useEffect, useState } from "react";
import { pageSections } from "../data";

type LenisLike = { scrollTo: (target: HTMLElement | number, opts?: { offset?: number }) => void };

export default function SideNav() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const hero = document.querySelector(".home-hero, .cm-banner-wrap");
    const sections = pageSections
      .map((s, i) => ({ el: document.getElementById(s.id), i }))
      .filter((x): x is { el: HTMLElement; i: number } => Boolean(x.el));

    const bannerObs = hero
      ? new IntersectionObserver(
          ([entry]) => setVisible(!entry.isIntersecting),
          { threshold: 0 },
        )
      : null;
    if (hero && bannerObs) bannerObs.observe(hero);
    else setVisible(true);

    const sectionObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const found = sections.find((s) => s.el === entry.target);
          if (found) setCurrent(found.i);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    sections.forEach((s) => sectionObs.observe(s.el));

    return () => {
      bannerObs?.disconnect();
      sectionObs.disconnect();
    };
  }, []);

  function go(i: number) {
    const el = document.getElementById(pageSections[i].id);
    if (!el) return;
    const lenis = (window as Window & { __lenis?: LenisLike }).__lenis;
    if (lenis) lenis.scrollTo(el, { offset: 0 });
    else el.scrollIntoView({ behavior: "smooth" });
  }

  function next() {
    if (current >= pageSections.length - 1) {
      const lenis = (window as Window & { __lenis?: LenisLike }).__lenis;
      if (lenis) lenis.scrollTo(0);
      else window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    go(current + 1);
  }

  const last = current >= pageSections.length - 1;

  return (
    <>
      <nav className={`c42-sidenav${visible ? " is-visible" : ""}`} aria-label="Page sections">
        {pageSections.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`c42-sidenav__item${current === i ? " is-active" : ""}`}
            data-target={s.id}
            onClick={() => go(i)}
          >
            <span className="c42-sidenav__dot" />
            <span className="c42-sidenav__label">{s.label}</span>
          </button>
        ))}
      </nav>
      <div className={`c42-section-cta${visible ? " is-visible" : ""}`} id="c42-cta">
        <button
          className={`c42-section-cta__btn${last ? " is-last" : ""}`}
          id="c42-cta-btn"
          type="button"
          onClick={next}
          aria-label={last ? "Back to top" : "Next section"}
        >
          <span id="c42-cta-text">{last ? "Back to Top" : "Next Section"}</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d={last ? "M8 12V4M4 8l4-4 4 4" : "M8 4v8M4 8l4 4 4-4"} stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
    </>
  );
}
