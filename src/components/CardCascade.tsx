import { useEffect, useMemo, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";

export type CascadeItem = {
  id: string;
  kind?: string;
  title: string;
  card: string;
  image: string;
  href?: string;
};

const PlusIcon = () => (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden>
    <path d="M25 22V20H23V22H25Z" fill="#F1EDE8" />
    <path d="M23 20V18H21V20H23Z" fill="#F1EDE8" />
    <path d="M23 24V22H21V24H23Z" fill="#F1EDE8" />
    <path d="M21 26V24H19V26H21Z" fill="#F1EDE8" />
    <path d="M21 18V16H19V18H21Z" fill="#F1EDE8" />
    <path d="M19 16V14H17V16H19Z" fill="#F1EDE8" />
    <path d="M19 28V26H17V28H19Z" fill="#F1EDE8" />
  </svg>
);

const Chevron = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

type Props = {
  id?: string;
  heading: ReactNode;
  lead: string;
  items: CascadeItem[];
  keyboard?: boolean;
};

export default function CardCascade({ id, heading, lead, items, keyboard = false }: Props) {
  const [order, setOrder] = useState(() => items.map((_, i) => i));
  const [exiting, setExiting] = useState<number | null>(null);
  const lock = useRef(false);

  const itemKey = items.map((item) => item.id).join("|");

  useEffect(() => {
    setOrder(items.map((_, i) => i));
    setExiting(null);
  }, [itemKey]);

  const slots = useMemo(() => {
    const map = new Map<number, number>();
    order.forEach((idx, slot) => map.set(idx, slot));
    return map;
  }, [order]);

  function next() {
    if (lock.current || items.length < 2) return;
    lock.current = true;
    setExiting(order[0]);
    window.setTimeout(() => {
      setOrder((o) => [...o.slice(1), o[0]]);
      setExiting(null);
      lock.current = false;
    }, 500);
  }

  function prev() {
    if (lock.current || items.length < 2) return;
    lock.current = true;
    setOrder((o) => [o[o.length - 1], ...o.slice(0, -1)]);
    window.setTimeout(() => {
      lock.current = false;
    }, 500);
  }

  function go(i: number) {
    if (lock.current) return;
    const pos = order.indexOf(i);
    if (pos <= 0) return;
    if (pos >= 3) {
      next();
      return;
    }
    lock.current = true;
    setOrder((o) => {
      const n = [...o];
      for (let k = 0; k < pos; k++) n.push(n.shift()!);
      return n;
    });
    window.setTimeout(() => {
      lock.current = false;
    }, 500);
  }

  function scrollToHash(href: string) {
    const id = href.startsWith("#") ? href.slice(1) : "";
    const el = id ? document.getElementById(id) : null;
    if (!el) return;
    const lenis = (
      window as Window & { __lenis?: { scrollTo: (target: HTMLElement, opts?: { offset?: number }) => void } }
    ).__lenis;
    if (lenis) lenis.scrollTo(el, { offset: -20 });
    else el.scrollIntoView({ behavior: "smooth" });
  }

  function onCardClick(i: number, event: MouseEvent, href?: string) {
    const slot = exiting === i ? -1 : (slots.get(i) ?? i);
    if (slot >= 3) {
      event.preventDefault();
      next();
      return;
    }
    if (href?.startsWith("#")) {
      event.preventDefault();
      scrollToHash(href);
    }
  }

  useEffect(() => {
    if (!keyboard) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [order, keyboard]);

  return (
    <div className="manu-intelligence-section" id={id}>
      <section className="intro-section content-wrapper" data-aos="fade-up">
        <div className="span6">
          <h2>{heading}</h2>
        </div>
        <div className="span4">
          <p>{lead}</p>
        </div>
      </section>
      <div className="scroll-wrapper content-wrapper">
        <button className="cascade-arrow cascade-prev" type="button" onClick={prev} aria-label="Previous">
          <Chevron />
        </button>
        <button className="cascade-arrow cascade-next" type="button" onClick={next} aria-label="Next">
          <Chevron />
        </button>
        <div className="horizontal-container intelligence-slider">
          {items.map((p, i) => {
            const slot = exiting === i ? -1 : (slots.get(i) ?? i);
            const inner = (
              <>
                <span className="show-for-sr">Learn more about {p.title}</span>
                <div className="slide-item__main-link-plus plus-btn">
                  <PlusIcon />
                </div>
                        <span className="slide-item__main-link-button button">Learn More</span>
              </>
            );
            return (
              <article key={p.id} className="slide-item" data-index={i} data-slot={slot}>
                <div className="vertical-divider">
                  <div className="line-thin" />
                  <div className="line-green" />
                </div>
                <div className="card">
                  {p.href ? (
                    p.href.startsWith("#") ? (
                      <a className="slide-item__main-link" href={p.href} onClick={(e) => onCardClick(i, e, p.href)}>
                        {inner}
                      </a>
                    ) : (
                      <Link className="slide-item__main-link" to={p.href} onClick={(e) => onCardClick(i, e, p.href)}>
                        {inner}
                      </Link>
                    )
                  ) : (
                    <button className="slide-item__main-link" type="button" onClick={(e) => onCardClick(i, e)}>
                      {inner}
                    </button>
                  )}
                  <div className="overlay_bg" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} />
                  <img src={p.image} alt="" loading="lazy" decoding="async" />
                  <div className="card-content">
                    <div>
                      {p.kind ? <p className="card-content__tag">{p.kind}</p> : null}
                      <h3>{p.title}</h3>
                      <p>{p.card}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <ul className="cascade-dots">
          {items.map((p, i) => (
            <li key={p.id} className={order[0] === i && exiting === null ? "active" : ""}>
              <button type="button" aria-label={`Go to ${p.title}`} onClick={() => go(i)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
