import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useCases } from "../data";

export default function PinnedCases() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    let killed = false;

    async function setup() {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (killed || !root.current) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 769px)", () => {
          const cards = gsap.utils.toArray<HTMLElement>(".case-item");
          cards.forEach((card, i) => {
            const isLast = i === cards.length - 1;
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: card,
                  start: "top top",
                  end: "+=50%",
                  scrub: 0.5,
                  pin: true,
                  pinSpacing: false,
                },
              })
              .to(card, {
                scale: isLast ? 1 : 0.55,
                transformOrigin: "center top",
                ease: "none",
              });
          });
        });
      }, root);
      ScrollTrigger.refresh();
    }

    const t = window.setTimeout(setup, 300);
    return () => {
      killed = true;
      window.clearTimeout(t);
      ctx?.revert();
    };
  }, []);

  return (
    <section className="cases-section" id="use-case" ref={root}>
      <div className="wrap">
        <h2 data-aos="fade-up">Featured use cases</h2>
      </div>
      {useCases.map((u) => (
        <article className="case-item" key={u.title}>
          <img src={u.image} alt="" />
          <div className="case-copy">
            <span>{u.kicker}</span>
            <h3>{u.title}</h3>
            <p>{u.text}</p>
            <Link className="btn btn-accent" to={u.to}>
              Learn more
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}
