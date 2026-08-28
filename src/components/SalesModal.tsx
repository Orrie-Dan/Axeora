import { useEffect, useState, type FormEvent } from "react";
import gsap from "gsap";
import FormLegalNotice from "./FormLegalNotice";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SalesModal({ open, onClose }: Props) {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const panel = document.querySelector(".sales-panel");
    const dim = document.querySelector(".sales-dim");
    if (!panel || !dim) return;
    if (open) {
      gsap.to(dim, { opacity: 1, pointerEvents: "auto", duration: 0.3 });
      gsap.to(panel, { x: 0, duration: 0.55, ease: "power3.out" });
    } else {
      gsap.killTweensOf([panel, dim]);
      gsap.set(dim, { opacity: 0, pointerEvents: "none" });
      gsap.set(panel, { x: "100%" });
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <button className={`sales-dim${open ? " is-open" : ""}`} type="button" aria-label="Close" onClick={onClose} />
      <aside className={`sales-panel${open ? " is-open" : ""}`} aria-hidden={!open}>
        <button className="sales-close" type="button" onClick={onClose} aria-label="Close">
          ×
        </button>
        <p className="kicker">Talk to us</p>
        <h2>See sovereign digital infrastructure, end-to-end.</h2>
        <p>A briefing tailored to your national or enterprise program.</p>
        {sent ? (
          <p className="lede">Thank you. We will follow up using the details you provided.</p>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="s-name">Full name *</label>
              <input id="s-name" required />
            </div>
            <div className="field">
              <label htmlFor="s-email">Work email *</label>
              <input id="s-email" type="email" required />
            </div>
            <div className="field">
              <label htmlFor="s-org">Organisation *</label>
              <input id="s-org" required />
            </div>
            <div className="field">
              <label htmlFor="s-msg">How can we help? *</label>
              <textarea id="s-msg" required />
            </div>
            <FormLegalNotice />
            <button className="btn btn-accent" type="submit">
              Talk to sales
            </button>
          </form>
        )}
      </aside>
    </>
  );
}
