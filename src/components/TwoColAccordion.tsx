import { useEffect, useRef, useState } from "react";

export type AccordionRow = {
  title: string;
  body: string;
  image: string;
};

const isVideo = (src: string) => /\.(mp4|webm|ogg)(\?|$)/i.test(src);

const PixelChevron = () => (
  <svg className="chevron" width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden>
    <rect x="5" y="0" width="2" height="2" fill="#00C2A8" />
    <rect x="3" y="2" width="2" height="2" fill="#00C2A8" />
    <rect x="7" y="2" width="2" height="2" fill="#00C2A8" />
    <rect x="1" y="4" width="2" height="2" fill="#00C2A8" />
    <rect x="9" y="4" width="2" height="2" fill="#00C2A8" />
    <rect x="0" y="6" width="2" height="2" fill="#00C2A8" />
    <rect x="10" y="6" width="2" height="2" fill="#00C2A8" />
  </svg>
);

export default function TwoColAccordion({
  title,
  lead,
  rows,
}: {
  title: string;
  lead: string;
  rows: AccordionRow[];
}) {
  const [open, setOpen] = useState(0);
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = cubeRef.current;
    if (!root) return;
    for (const video of root.querySelectorAll("video")) {
      if (video.classList.contains("active")) video.play().catch(() => {});
      else {
        video.pause();
        video.currentTime = 0;
      }
    }
  }, [open]);

  return (
    <section className="two-col-accordion">
      <div className="two-col-accordion-top" data-aos="fade-up">
        <h2>{title}</h2>
        <p className="sub">{lead}</p>
      </div>
      <div className="two-col-accordion-body content-wrapper">
        <div className="accord-list">
          {rows.map((row, i) => (
            <div key={row.title} className={`accord-item${open === i ? " open" : ""}`}>
              <button className="accord-head" type="button" onClick={() => setOpen(i)}>
                <h3>{row.title}</h3>
                <PixelChevron />
              </button>
              <div className="accord-body">
                <p>{row.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="two-col-accordion-cube" ref={cubeRef}>
          {rows.map((row, i) =>
            isVideo(row.image) ? (
              <video
                key={row.title}
                className={`cube-img${open === i ? " active" : ""}`}
                src={row.image}
                muted
                loop
                playsInline
                autoPlay={open === i}
                preload="metadata"
                aria-hidden
              />
            ) : (
              <img
                key={row.title}
                className={`cube-img${open === i ? " active" : ""}`}
                src={row.image}
                alt=""
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
