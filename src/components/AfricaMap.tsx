import { useEffect, useId, useMemo, useRef } from "react";
import { africaCountryNodes } from "../data";

type Props = {
  activeCountry?: string | null;
  onSelect?: (country: string | null) => void;
  className?: string;
  autoVisible?: boolean;
};

const NODES = [
  { cx: 0.5, cy: 23.3, r: 0.9 },
  { cx: 16.5, cy: 25.6, r: 0.75 },
  { cx: 14, cy: 32.7, r: 0.75 },
  { cx: 18, cy: 32.4, r: 0.75 },
  { cx: 25.5, cy: 28.9, r: 0.9 },
  { cx: 54.8, cy: 39.3, r: 0.9 },
  { cx: 48.1, cy: 39.9, r: 0.75 },
  { cx: 53.7, cy: 44.2, r: 0.75 },
  { cx: 46.3, cy: 53.4, r: 0.75 },
  { cx: 46.2, cy: 63.7, r: 0.9 },
  { cx: 65.5, cy: 56.9, r: 0.75 },
  { cx: 50.6, cy: 63.9, r: 0.9 },
] as const;

const nodeToCountry = Object.entries(africaCountryNodes).reduce<Record<number, string>>(
  (acc, [country, indices]) => {
    indices.forEach((i) => {
      if (!acc[i]) acc[i] = country;
    });
    return acc;
  },
  {},
);

function activeNodeSet(country: string | null | undefined): Set<number> {
  if (!country) return new Set();
  return new Set(africaCountryNodes[country] ?? []);
}

export default function AfricaMap({
  activeCountry = null,
  onSelect,
  className = "",
  autoVisible = false,
}: Props) {
  const uid = useId().replace(/:/g, "");
  const root = useRef<HTMLDivElement>(null);
  const activeNodes = activeNodeSet(activeCountry);
  const hasFocus = activeCountry !== null;

  const tooltipPos = useMemo(() => {
    if (!activeCountry) return null;
    const indices = africaCountryNodes[activeCountry];
    if (!indices?.length) return null;
    const node = NODES[indices[0]];
    return { x: node.cx, y: node.cy };
  }, [activeCountry]);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (autoVisible) {
      el.classList.add("is-visible");
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [autoVisible]);

  return (
    <div className={`africa-map-wrap${hasFocus ? " has-focus" : ""} ${className}`.trim()} ref={root}>
      {activeCountry && tooltipPos ? (
        <p className="africa-map__tooltip" aria-live="polite">
          {activeCountry}
        </p>
      ) : null}

      <svg
        viewBox="-6 -8 92 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Map showing digital corridors from the UAE to twelve African countries"
      >
        <defs>
          <linearGradient id={`af-${uid}`} x1="0" y1="0" x2=".6" y2="1">
            <stop offset="0%" stopColor="#16406E" />
            <stop offset="55%" stopColor="#102F53" />
            <stop offset="100%" stopColor="#0A2340" />
          </linearGradient>
          <linearGradient id={`lk-${uid}`} x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#31BDF2" />
            <stop offset="55%" stopColor="#17B3AC" />
            <stop offset="100%" stopColor="#22B168" />
          </linearGradient>
          <radialGradient id={`gl-${uid}`} cx=".5" cy=".5" r=".5">
            <stop offset="0%" stopColor="#17B3AC" stopOpacity=".2" />
            <stop offset="100%" stopColor="#17B3AC" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="36" cy="38" rx="46" ry="42" fill={`url(#gl-${uid})`} />

        <path
          d="M12.1 2.2 L28.2 1 L29.1 0.9 L33.2 5.7 L38.1 5.9 L47.9 6.8 L50.3 6.8 L50.5 8.1 L53.5 14.1 L55.2 18.4 L57.5 22.4 L61.3 25.4 L63 27.6 L69.4 26.2 L63.3 36 L59 40.3 L57.3 44.8 L58.6 49 L58 54 L52.9 57.8 L50.6 63.9 L49 67.9 L43.6 72 L38 72.8 L36.4 72 L32.5 60.9 L30.2 53.2 L31.2 46.8 L29.8 42.8 L27.4 37.6 L27.7 34 L23.5 33.7 L18 32.4 L14 32.7 L10.3 33.6 L4.8 29.5 L0.5 23.3 L2 19.9 L2 17 L5.1 10.1 L8.4 7.6 L10.4 4.4 Z"
          fill={`url(#af-${uid})`}
          stroke="#4B92DA"
          strokeWidth=".35"
          strokeLinejoin="round"
          opacity=".95"
        />
        <path
          d="M67.5 50.2 L68.5 53.5 L67.5 56 L65.5 61.5 L63.2 63.6 L61.3 59.3 L61.5 55.5 L64 53.7 L66.3 51.4 Z"
          fill={`url(#af-${uid})`}
          stroke="#4B92DA"
          strokeWidth=".35"
          strokeLinejoin="round"
          opacity=".95"
        />

        <g className="africa-map__terr" stroke="#3D7FC4" strokeWidth=".24" opacity=".75">
          <path d="M0.5 23.3 L16.5 25.6 L25.5 28.9 L48.1 39.9 L54.8 39.3" />
          <path d="M14 32.7 L18 32.4 L25.5 28.9" />
          <path d="M48.1 39.9 L53.7 44.2 L46.3 53.4 L50.6 63.9" />
          <path d="M46.3 53.4 L46.2 63.7 L50.6 63.9" />
          <path d="M54.8 39.3 L53.7 44.2" />
          <path d="M50.6 63.9 L65.5 56.9" />
          <path d="M16.5 25.6 L14 32.7" />
        </g>

        <g stroke={`url(#lk-${uid})`} strokeWidth=".5" strokeLinecap="round" fill="none">
          <path id={`a1-${uid}`} className="africa-map__arc" d="M73.3 12.8 C 66 26, 60 32, 54.8 39.3" />
          <path id={`a2-${uid}`} className="africa-map__arc" d="M73.3 12.8 C 52 14, 34 20, 25.5 28.9" />
          <path id={`a3-${uid}`} className="africa-map__arc" d="M73.3 12.8 C 78 34, 66 54, 50.6 63.9" />
          <path id={`a4-${uid}`} className="africa-map__arc" d="M73.3 12.8 C 44 10, 14 14, 0.5 23.3" />
        </g>

        <g className="africa-map__pkt" fill="#8FE6FF">
          <circle r=".72">
            <animateMotion dur="3.4s" repeatCount="indefinite" begin="0s">
              <mpath href={`#a1-${uid}`} />
            </animateMotion>
          </circle>
          <circle r=".72">
            <animateMotion dur="4.1s" repeatCount="indefinite" begin=".7s">
              <mpath href={`#a2-${uid}`} />
            </animateMotion>
          </circle>
          <circle r=".72">
            <animateMotion dur="3.8s" repeatCount="indefinite" begin="1.4s">
              <mpath href={`#a3-${uid}`} />
            </animateMotion>
          </circle>
          <circle r=".72">
            <animateMotion dur="4.5s" repeatCount="indefinite" begin="2.1s">
              <mpath href={`#a4-${uid}`} />
            </animateMotion>
          </circle>
        </g>

        <g fill="#31BDF2">
          {NODES.map((node, i) => {
            const isActive = activeNodes.has(i);
            const isDimmed = hasFocus && !isActive;
            return (
              <circle
                key={i}
                className={`africa-map__node${isActive ? " is-active" : ""}${isDimmed ? " is-dimmed" : ""}`}
                style={{ transitionDelay: `${1.5 + i * 0.1}s` }}
                cx={node.cx}
                cy={node.cy}
                r={isActive ? node.r * 1.6 : node.r}
                onMouseEnter={onSelect ? () => onSelect(nodeToCountry[i] ?? null) : undefined}
                onMouseLeave={onSelect ? () => onSelect(null) : undefined}
              />
            );
          })}
        </g>

        <circle cx="73.3" cy="12.8" r="3.8" fill="none" stroke="#31BDF2" strokeWidth=".26" opacity=".5" />
        <circle cx="73.3" cy="12.8" r="2.1" fill="none" stroke="#31BDF2" strokeWidth=".42" />
        <circle cx="73.3" cy="12.8" r="1.05" fill="#31BDF2" />
        <text
          x="73.3"
          y="7"
          textAnchor="middle"
          fontFamily="var(--font)"
          fontSize="3"
          fontWeight="600"
          letterSpacing=".4"
          fill="#9FC7EE"
        >
          UAE
        </text>
      </svg>
    </div>
  );
}
