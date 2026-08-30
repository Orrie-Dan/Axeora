import { useId } from "react";
import { africaCountryFlags, africaGlobeNodes } from "../data";

const HUB = { x: 488, y: 208 };

function arcPath(to: { x: number; y: number }) {
  const mx = (HUB.x + to.x) / 2;
  const my = (HUB.y + to.y) / 2 - 36;
  return `M ${HUB.x} ${HUB.y} Q ${mx} ${my} ${to.x} ${to.y}`;
}

type Props = {
  active?: string | null;
  onSelect?: (country: string | null) => void;
};

export default function HeroGlobe({ active = null, onSelect }: Props) {
  const uid = useId().replace(/:/g, "");
  const hasFocus = active !== null;

  return (
    <div className="hero-globe">
      <div className="hero-globe__orb" aria-hidden />

      {active ? (
        <p className="hero-globe__active-label">
          <img
            src={`https://flagcdn.com/w40/${africaCountryFlags[active as keyof typeof africaCountryFlags]}.png`}
            width={20}
            height={14}
            alt=""
          />
          {active}
        </p>
      ) : null}

      <svg
        className="hero-globe__svg"
        viewBox="0 0 640 640"
        role="img"
        aria-label="Map showing digital corridors from the UAE to twelve African nations"
      >
        <defs>
          <clipPath id={`globe-clip-${uid}`}>
            <circle cx="320" cy="320" r="248" />
          </clipPath>
          <radialGradient id={`globe-shade-${uid}`} cx="38%" cy="32%" r="68%">
            <stop offset="0%" stopColor="#1a2420" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0a100e" stopOpacity="0.7" />
          </radialGradient>
          <filter id={`globe-glow-${uid}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx="320" cy="320" r="248" fill={`url(#globe-shade-${uid})`} />

        <g clipPath={`url(#globe-clip-${uid})`} opacity="0.35" stroke="rgba(255, 255, 255, 0.14)" strokeWidth="0.6" fill="none">
          {[-0.4, 0, 0.4].map((t) => (
            <ellipse key={`lat-${t}`} cx="320" cy={320 + t * 220} rx={Math.sqrt(1 - t * t) * 248} ry={24} />
          ))}
          {[-40, 20, 80].map((deg) => (
            <ellipse key={`lng-${deg}`} cx="320" cy="320" rx="36" ry="248" transform={`rotate(${deg} 320 320)`} />
          ))}
        </g>

        <g clipPath={`url(#globe-clip-${uid})`}>
          <g transform="translate(198 148) scale(4.05)" fill="#152019" stroke="rgba(197, 160, 89, 0.28)" strokeWidth="0.32" strokeLinejoin="round">
            <path d="M12.1 2.2 L28.2 1 L29.1 0.9 L33.2 5.7 L38.1 5.9 L47.9 6.8 L50.3 6.8 L50.5 8.1 L53.5 14.1 L55.2 18.4 L57.5 22.4 L61.3 25.4 L63 27.6 L69.4 26.2 L63.3 36 L59 40.3 L57.3 44.8 L58.6 49 L58 54 L52.9 57.8 L50.6 63.9 L49 67.9 L43.6 72 L38 72.8 L36.4 72 L32.5 60.9 L30.2 53.2 L31.2 46.8 L29.8 42.8 L27.4 37.6 L27.7 34 L23.5 33.7 L18 32.4 L14 32.7 L10.3 33.6 L4.8 29.5 L0.5 23.3 L2 19.9 L2 17 L5.1 10.1 L8.4 7.6 L10.4 4.4 Z" />
            <path d="M67.5 50.2 L68.5 53.5 L67.5 56 L65.5 61.5 L63.2 63.6 L61.3 59.3 L61.5 55.5 L64 53.7 L66.3 51.4 Z" />
          </g>
        </g>

        <circle cx="320" cy="320" r="248" fill="none" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1.2" className="hero-globe__rim" />

        <g fill="none" stroke="rgba(197, 160, 89, 0.22)" strokeWidth="1" strokeLinecap="round">
          {africaGlobeNodes.map((n, i) => (
            <path
              key={`arc-${n.country}`}
              className={`hero-globe__arc${active === n.country ? " is-active" : ""}${hasFocus && active !== n.country ? " is-dim" : ""}`}
              style={{ animationDelay: `${i * 0.35}s` }}
              d={arcPath(n)}
            />
          ))}
        </g>

        {africaGlobeNodes.map((n, i) => {
          const isActive = active === n.country;
          const isDim = hasFocus && !isActive;
          return (
            <g
              key={n.country}
              className={`hero-globe__node${isActive ? " is-active" : ""}${isDim ? " is-dim" : ""}`}
              style={{ animationDelay: `${i * 0.45}s` }}
              onMouseEnter={() => onSelect?.(n.country)}
              onMouseLeave={() => onSelect?.(null)}
            >
              <circle
                className="hero-globe__node-glow"
                cx={n.x}
                cy={n.y}
                r={isActive ? 14 : 10}
                fill="rgba(197, 160, 89, 0.12)"
              />
              <circle
                className="hero-globe__node-dot"
                cx={n.x}
                cy={n.y}
                r={isActive ? 5 : 3.2}
                fill={isActive ? "#48de93" : "#c5a059"}
                filter={`url(#globe-glow-${uid})`}
              />
            </g>
          );
        })}

        <g className="hero-globe__hub">
          <circle className="hero-globe__hub-ring" cx={HUB.x} cy={HUB.y} r="10" fill="none" stroke="#c5a059" strokeWidth="1" />
          <circle className="hero-globe__hub-ring hero-globe__hub-ring--delay" cx={HUB.x} cy={HUB.y} r="10" fill="none" stroke="#c5a059" strokeWidth="1" />
          <circle cx={HUB.x} cy={HUB.y} r="4.2" fill="#c5a059" filter={`url(#globe-glow-${uid})`} />
          <text x={HUB.x} y={HUB.y - 12} textAnchor="middle" className="hero-globe__hub-label">
            UAE
          </text>
        </g>
      </svg>
    </div>
  );
}
