type IconProps = { className?: string };

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function AiIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden {...stroke}>
      <circle cx="10" cy="14" r="3.2" />
      <circle cx="10" cy="34" r="3.2" />
      <circle cx="24" cy="8" r="3.2" />
      <circle cx="24" cy="24" r="4" />
      <circle cx="24" cy="40" r="3.2" />
      <circle cx="38" cy="14" r="3.2" />
      <circle cx="38" cy="34" r="3.2" />
      <path d="M13 15.5 20.4 10.2M13 16.8 20.6 22.2M13 32.2 20.6 25.8M13 33.5 20.4 37.8M27.6 10.2 35 15.5M27.4 22.2 35 16.8M27.4 25.8 35 32.2M27.6 37.8 35 33.5M24 12v8M24 28v8" />
    </svg>
  );
}

export function CloudIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden {...stroke}>
      <path d="M14 32a7.5 7.5 0 0 1 .5-14.2 10.5 10.5 0 0 1 19.6-1.8A8.2 8.2 0 0 1 35 32Z" />
      <rect x="20" y="22" width="8" height="10" rx="1.5" />
      <circle cx="24" cy="26.2" r="1.3" />
      <path d="M24 27.5v2.6" />
    </svg>
  );
}

export function CyberIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden {...stroke}>
      <path d="M24 6 40 12v12.2C40 33.2 33.2 41 24 44 14.8 41 8 33.2 8 24.2V12Z" />
      <circle cx="24" cy="23" r="5.5" />
      <path d="M24 20.6v2.2a1.6 1.6 0 0 0 1.5 1.6" />
    </svg>
  );
}

export function DpiIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden {...stroke}>
      <rect x="7" y="12" width="22" height="16" rx="2" />
      <circle cx="14.5" cy="20" r="3" />
      <path d="M20 17.5h5.5M20 22.5h4" />
      <rect x="19" y="24" width="22" height="14" rx="2" />
      <path d="M24 29h12M24 33h8" />
      <rect x="33.5" y="28" width="4" height="3.2" rx="0.6" />
    </svg>
  );
}

export function SmartCitiesIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden {...stroke}>
      <path d="M6 42V22l10-7v27M16 42V18l11 6v18M27 42V24l15 8v10" />
      <path d="M4 42h40" />
      <circle cx="34" cy="14" r="5.5" />
      <path d="M34 11.2v3.2l2.2 1.3" />
      <path d="M20 24v2.5M20 29v2.5M11 26v2.5M11 31v2.5" />
    </svg>
  );
}

export function EnergyIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden {...stroke}>
      <path d="M24 6v6" />
      <path d="M12.2 11.2 16.4 15M35.8 11.2 31.6 15" />
      <path d="M8 24h6M34 24h6" />
      <path d="M16 24a8 8 0 1 1 16 0c0 3.2-1.8 5.4-4.4 8.2L24 36.5 20.4 32.2C17.8 29.4 16 27.2 16 24Z" />
      <path d="M21 42h6M24 36.5V42" />
    </svg>
  );
}

export const capabilityIcons = {
  "ai-infrastructure": AiIcon,
  "sovereign-cloud": CloudIcon,
  cybersecurity: CyberIcon,
  "digital-public-infrastructure": DpiIcon,
  "smart-cities": SmartCitiesIcon,
} as const;

export const stackIcons = {
  services: DpiIcon,
  ai: AiIcon,
  cloud: CloudIcon,
  cyber: CyberIcon,
  energy: EnergyIcon,
} as const;
