import { useEffect, useRef, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

type Product = { to: string; label: string; blurb: string };

type Props = {
  open: boolean;
  products: Product[];
  onClose: () => void;
  chromeHeight?: number;
};

export default function Overlay({ open, products, onClose, chromeHeight = 86 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const seenOpen = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open) {
      seenOpen.current = true;
      el.style.display = "block";
      gsap.fromTo(
        el,
        { y: "-8%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.45, ease: "power3.out" },
      );
      gsap.fromTo(
        el.querySelectorAll(".overlay-product, .overlay-side a, .overlay h3"),
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.04, delay: 0.08, ease: "power2.out" },
      );
      return;
    }
    gsap.killTweensOf(el);
    if (!seenOpen.current) {
      el.style.display = "none";
      return;
    }
    gsap.to(el, {
      y: "-6%",
      opacity: 0,
      duration: 0.28,
      ease: "power2.in",
      onComplete: () => {
        el.style.display = "none";
      },
    });
  }, [open]);

  return (
    <div
      className={`overlay${open ? " is-open" : ""}`}
      ref={ref}
      aria-hidden={!open}
      style={{ "--chrome": `${chromeHeight}px` } as CSSProperties}
    >
      <div className="overlay-grid">
        <div>
          <h3>Solutions</h3>
          {products.map((p) => (
            <Link key={p.to} className="overlay-product" to={p.to} onClick={onClose}>
              <strong>{p.label}</strong>
              <span>{p.blurb}</span>
            </Link>
          ))}
        </div>
        <div className="overlay-side">
          <h3>Company</h3>
          <Link to="/about" onClick={onClose}>
            About AxeOra
          </Link>
          <Link to="/africa" onClick={onClose}>
            UAE–Africa Bridge
          </Link>
          <Link to="/contact" onClick={onClose}>
            Get in touch
          </Link>
          <Link className="btn btn-accent overlay-cta" to="/contact" onClick={onClose}>
            Talk to us
          </Link>
        </div>
      </div>
    </div>
  );
}
