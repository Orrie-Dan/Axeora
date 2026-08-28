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

const StackMark = () => (
  <svg
    className="intelligence-img-top"
    viewBox="0 0 752 438"
    width={752}
    height={438}
    role="img"
    aria-labelledby="stack-mark-title"
  >
    <title id="stack-mark-title">The sovereign stack</title>
    <rect width="752" height="438" fill="#f4f3ef" />
    <g stroke="#182d21" strokeWidth="1.4" fill="none">
      <line x1="48" y1="56" x2="620" y2="72" />
      <line x1="620" y1="72" x2="708" y2="210" />
      <line x1="708" y1="210" x2="430" y2="390" />
      <line x1="430" y1="390" x2="48" y2="56" />
      <line x1="48" y1="56" x2="708" y2="210" />
      <line x1="620" y1="72" x2="430" y2="390" />
    </g>
    <g fill="#48DE93">
      <circle cx="48" cy="56" r="7" />
      <circle cx="620" cy="72" r="7" />
      <circle cx="708" cy="210" r="7" />
      <circle cx="430" cy="390" r="7" />
    </g>
    <text
      x="40"
      y="168"
      fill="#182d21"
      fontFamily="Host Grotesk, sans-serif"
      fontWeight="700"
      fontSize="92"
      letterSpacing="-3"
    >
      THE
    </text>
    <text
      x="40"
      y="262"
      fill="#182d21"
      fontFamily="Host Grotesk, sans-serif"
      fontWeight="700"
      fontSize="92"
      letterSpacing="-3"
    >
      SOVEREIGN
    </text>
    <text
      x="40"
      y="356"
      fill="#182d21"
      fontFamily="Host Grotesk, sans-serif"
      fontWeight="700"
      fontSize="92"
      letterSpacing="-3"
    >
      STACK
    </text>
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
    <section className="intelligence-section-wrap" id="intelligence" ref={root}>
      <div className="intelligence-section">
        <div className="intelligence-left">
          <StackMark />
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
                    <img src={s.icon} alt="" width={128} height={128} />
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
