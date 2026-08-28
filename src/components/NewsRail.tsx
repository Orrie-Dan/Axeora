import { useRef } from "react";
import { Link } from "react-router-dom";
import { insights } from "../data";

export default function NewsRail() {
  const rail = useRef<HTMLDivElement>(null);

  function move(dir: number) {
    const el = rail.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.72), behavior: "smooth" });
  }

  return (
    <section className="news-section" id="in_the_news">
      <div className="wrap news-head">
        <h2 data-aos="fade-up">Insights</h2>
        <div className="news-arrows">
          <button type="button" aria-label="Previous" onClick={() => move(-1)}>
            ‹
          </button>
          <button type="button" aria-label="Next" onClick={() => move(1)}>
            ›
          </button>
        </div>
      </div>
      <div className="news-rail" ref={rail}>
        {insights.map((item) => (
          <Link className="news-card" key={item.title} to={item.to}>
            <img src={item.image} alt="" />
            <div>
              <span>{item.kicker}</span>
              <h3>{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
