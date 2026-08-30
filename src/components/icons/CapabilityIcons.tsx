type IconProps = { className?: string };

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function AiIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden {...stroke}>
      <rect x="15" y="15" width="18" height="18" />
      <path d="M20 15V8M28 15V8M20 40v-7M28 40v-7M15 20H8M15 28H8M40 20h-7M40 28h-7" />
      <circle cx="24" cy="24" r="3.6" />
    </svg>
  );
}

export function CloudIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden {...stroke}>
      <path d="M14 32a7 7 0 0 1 .6-13.9 10 10 0 0 1 19-2.4A8 8 0 0 1 34 32Z" />
      <path d="M24 24v10M24 34l-4-3.4M24 34l4-3.4" />
    </svg>
  );
}

export function CyberIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden {...stroke}>
      <path d="M24 6 39 11v11.5C39 32 32.6 39.6 24 43 15.4 39.6 9 32 9 22.5V11Z" />
      <path d="M18.5 24.2l3.9 3.9 7.4-7.6" />
    </svg>
  );
}

export function DpiIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden {...stroke}>
      <circle cx="24" cy="17" r="6.4" />
      <path d="M11 39c1.6-6.9 6.8-10.6 13-10.6S35.4 32.1 37 39" />
      <path d="M8 44h32" />
    </svg>
  );
}

export function SmartCitiesIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden {...stroke}>
      <path d="M6 41V22l11-6v25M17 41V16l12 7v18M29 41V23l13 7v11" />
      <path d="M4 41h40" />
    </svg>
  );
}

export function EnergyIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden {...stroke}>
      <path d="M26 6 14 26h10l-2 16 14-22H26l2-14Z" />
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
