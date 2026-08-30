import { useEffect, useRef } from "react";
import { stack } from "../data";

const PlusIcon = () => (
  <svg className="open" width="24" height="23" viewBox="0 0 24 23" fill="none" aria-hidden>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.0001 10.4563V12.5437H15.2163C14.5482 12.5437 13.9149 12.2865 13.4475 11.8367L11.6499 10.1C11.1824 9.65137 10.9253 9.04247 10.9253 8.41281V0H13.0774V9.73325C13.0774 10.1277 13.409 10.4506 13.8248 10.4506H24.0013V10.4563H24.0001Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 12.5483V10.4609H8.78386C9.45196 10.4609 10.0852 10.7181 10.5526 11.1679L12.3503 12.9046C12.8189 13.3532 13.0749 13.9621 13.0749 14.5918V23H10.9227V13.2667C10.9227 12.8723 10.5911 12.5494 10.1753 12.5494H0V12.5483Z"
      fill="currentColor"
    />
  </svg>
);

export default function StackAccordion() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    let killed = false;
    const cleanups: Array<() => void> = [];

    async function setup() {
      const gsap = (await import("gsap")).default;
      if (killed || !root.current) return;
      const items = Array.from(root.current.querySelectorAll<HTMLElement>(".accordion-item"));
      items.forEach((item) => {
        const content = item.querySelector<HTMLElement>(".accordion-content");
        if (!content) return;
        content.style.height = "auto";
        content.style.paddingBottom = "20px";
        content.dataset.naturalHeight = `${content.scrollHeight}px`;
        content.style.height = "0px";
        content.style.paddingBottom = "0px";
      });
      items.forEach((item, index) => {
        const header = item.querySelector<HTMLElement>(".accordion-header");
        if (!header) return;
        const onClick = () => {
          items.forEach((it, i) => {
            const content = it.querySelector<HTMLElement>(".accordion-content");
            const btn = it.querySelector<HTMLButtonElement>(".accordion-header");
            if (!content) return;
            if (i !== index || it.classList.contains("active")) {
              it.classList.remove("active");
              btn?.setAttribute("aria-expanded", "false");
              gsap.to(content, { height: 0, paddingBottom: "0px", duration: 0.4, ease: "power2.out" });
            } else {
              it.classList.add("active");
              btn?.setAttribute("aria-expanded", "true");
              gsap.to(content, {
                height: content.dataset.naturalHeight,
                paddingBottom: "20px",
                duration: 0.6,
                ease: "power2.out",
              });
            }
          });
        };
        header.addEventListener("click", onClick);
        cleanups.push(() => header.removeEventListener("click", onClick));
      });
    }

    setup();
    return () => {
      killed = true;
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <section className="intelligence-section-wrap" id="manufacturing" ref={root}>
      <div className="intelligence-section">
        <div className="intelligence-left">
          <p className="capabilities-eyebrow capabilities-eyebrow--dark">The sovereign stack</p>
          <h2 className="intelligence-left__title">One national platform, five integrated layers</h2>
          <p className="large-text">
            AxeOra assembles AI, sovereign cloud, cybersecurity, and digital public infrastructure
            into one national stack governments can own and operate.
          </p>
          <p>
            From in-country data centres to identity, payments, and urban command centres — delivered
            with PPP and BOT models, and technology transfer.
          </p>
        </div>
        <div className="intelligence-right">
          <div className="accordion-wrapper">
            {stack.map((s) => (
              <div className="accordion-item" key={s.id}>
                <button className="accordion-header" type="button" aria-expanded="false">
                  <div className="icon">
                    <img src={s.icon} alt="" />
                  </div>
                  <span className="accordion-title">
                    {s.title}
                    <div className="acc-trigger">
                      <PlusIcon />
                    </div>
                  </span>
                </button>
                <div className="accordion-content">
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
