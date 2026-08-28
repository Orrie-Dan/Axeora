import { useEffect, useRef } from "react";
import { partners } from "../data";

export default function LogoMarquee() {
  const rowA = useRef<HTMLDivElement>(null);
  const rowB = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    let killed = false;

    async function setup() {
      const gsap = (await import("gsap")).default;
      if (killed) return;
      const rows = [
        { el: rowA.current, reverse: false },
        { el: rowB.current, reverse: true },
      ];
      ctx = gsap.context(() => {
        rows.forEach(({ el, reverse }) => {
          if (!el) return;
          const track = el.querySelector<HTMLElement>(".logos-track");
          if (!track) return;
          const singleSetWidth = track.scrollWidth / 2;
          gsap.fromTo(
            track,
            { x: reverse ? -singleSetWidth : 0 },
            {
              x: reverse ? 0 : -singleSetWidth,
              duration: 40,
              ease: "none",
              repeat: -1,
            },
          );
        });
      });
    }

    setup();
    return () => {
      killed = true;
      ctx?.revert();
    };
  }, []);

  const set = [...partners, ...partners];

  return (
    <section className="trusted-section" id="trusted">
      <div className="wrap">
        <h2 data-aos="fade-up">Trusted delivery for national-scale programs</h2>
      </div>
      <div className="logos-marquee" ref={rowA}>
        <div className="logos-track">
          {set.map((p, i) => (
            <span key={`a-${p}-${i}`}>{p}</span>
          ))}
        </div>
      </div>
      <div className="logos-marquee reverse" ref={rowB}>
        <div className="logos-track">
          {set.map((p, i) => (
            <span key={`b-${p}-${i}`}>{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
