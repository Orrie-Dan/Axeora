import { useEffect, type MouseEvent, type ReactNode } from "react";

const DEFAULT_TITLE = "AxeOra UAE | Sovereign Digital Infrastructure";

type Props = {
  title: string;
  kicker?: string;
  updated?: string;
  children: ReactNode;
};

export default function LegalDoc({
  title,
  kicker = "Legal",
  updated = "28 August 2026",
  children,
}: Props) {
  useEffect(() => {
    document.title = `${title} | AxeOra UAE`;
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title]);

  function onClick(e: MouseEvent<HTMLElement>) {
    const anchor = (e.target as HTMLElement).closest("a");
    if (!anchor) return;
    const href = anchor.getAttribute("href");
    if (!href?.startsWith("#")) return;
    const el = document.getElementById(href.slice(1));
    if (!el) return;
    e.preventDefault();
    const lenis = (window as Window & { __lenis?: { scrollTo: (target: HTMLElement, opts?: { offset?: number }) => void } }).__lenis;
    if (lenis) lenis.scrollTo(el, { offset: -120 });
    else el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">{kicker}</p>
          <h1>{title}</h1>
          <p>Last updated {updated}.</p>
        </div>
      </section>
      <section className="section">
        <article className="wrap legal" onClick={onClick}>
          {children}
        </article>
      </section>
    </>
  );
}
