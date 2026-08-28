export const company = {
  name: "AxeOra UAE",
  short: "AxeOra",
  tagline: "AI, Cybersecurity & Sovereign Digital Infrastructure Leader",
  positioning:
    "Building Secure Digital Nations Through AI, Sovereign Infrastructure and Cyber Resilience.",
  group: "Supported by Mark Cables UAE",
  location: "United Arab Emirates",
};

const photos = {
  hall: "/photos/servers2.jpg",
  racks: "/photos/ai-hall.jpg",
  dubai: "/photos/dubai.jpg",
  szr: "/photos/dubai-night.jpg",
  marina: "/photos/dubai3.jpg",
  nairobi: "/photos/nairobi.jpg",
  cape: "/photos/cape-town.jpg",
  dash: "/photos/dashboard.jpg",
  data: "/photos/analytics.jpg",
  ident: "/photos/digital-identity.webp",
  auth: "/photos/citizen-authentication.webp",
  superApp: "/photos/government-super-apps.webp",
  payments: "/photos/national-payment-gateways.mp4",
  cctv: "/photos/cctv.jpg",
  cam: "/photos/cameras.jpg",
  enforce: "/photos/traffic-enforcement.webp",
  traffic: "/photos/smart-traffic.mp4",
  conf: "/photos/conference.jpg",
  ops: "/photos/ops.jpg",
  power: "/photos/power.jpg",
  solar: "/photos/solar.jpg",
  tower: "/photos/enterprise.jpg",
  plan: "/photos/building.jpg",
  brief: "/photos/briefing.jpg",
  cyberNational: "/photos/national-cybersecurity.jpg",
  cyber: "/photos/cyber-defence.jpg",
  frameworks: "/photos/national-frameworks.mp4",
  soc: "/photos/illo-cyber-soc.jpg",
  fusion: "/photos/illo-cyber-fusion.jpg",
  zeroTrust: "/photos/illo-cyber-zerotrust.jpg",
  incident: "/photos/illo-cyber-incident.jpg",
  cloudSov: "/photos/illo-cloud-sovereign.jpg",
  dataLake: "/photos/illo-ai-datalake.jpg",
  llm: "/photos/llm-enablement.webp",
  vision: "/photos/illo-ai-vision.jpg",
  dpi: "/photos/illo-dpi.jpg",
  identHall: "/photos/illo-dpi-identity.jpg",
  authGate: "/photos/illo-dpi-auth.jpg",
  superAppHall: "/photos/illo-dpi-superapp.jpg",
  wallet: "/photos/illo-dpi-wallet.jpg",
  payGate: "/photos/illo-dpi-payments.jpg",
  privateCloud: "/photos/signature-private-cloud.jpg",
} as const;

export const navProducts = [
  {
    to: "/solutions/ai-infrastructure",
    label: "AI Infrastructure",
    blurb: "National AI platforms, data lakes, and decision intelligence.",
  },
  {
    to: "/solutions/sovereign-cloud",
    label: "Sovereign Cloud",
    blurb: "In-country architecture with full ownership of critical assets.",
  },
  {
    to: "/solutions/cybersecurity",
    label: "National Cybersecurity",
    blurb: "Security-by-design for government systems and critical infrastructure.",
  },
  {
    to: "/solutions/digital-public-infrastructure",
    label: "Digital Public Infrastructure",
    blurb: "Identity, payments, wallets, and government super apps.",
  },
  {
    to: "/solutions/smart-cities",
    label: "Smart Cities",
    blurb: "Computer vision, mobility, and urban command centres.",
  },
];

export const products = [
  {
    slug: "ai-infrastructure",
    kind: "Product",
    title: "Artificial Intelligence Infrastructure",
    cardTitle: "AI Infrastructure",
    card:
      "A full-stack national platform delivering data centres, sovereign AI, and peak performance across inference and training workloads.",
    hero: "Design and deploy AI-ready national infrastructure.",
    intro:
      "AxeOra designs and deploys AI-ready national infrastructure that supports emerging digital economies. These solutions empower governments to drive efficiency, automate service delivery, enhance national productivity, and unlock data-driven policymaking.",
    image: photos.hall,
    items: [
      "AI Data Centers",
      "Sovereign AI Platforms",
      "National Data Lakes",
      "Generative AI Solutions",
      "Machine Learning & Predictive Analytics",
      "AI for Government Services",
      "AI-Powered Decision Intelligence",
      "Smart City Analytics",
      "Computer Vision & Video Analytics",
      "Large Language Model (LLM) Enablement Platforms",
    ],
  },
  {
    slug: "sovereign-cloud",
    kind: "Product",
    title: "Sovereign Cloud & Digital Sovereignty",
    cardTitle: "Sovereign Cloud",
    card:
      "In-country architecture with full ownership of critical assets, data residency, and operational independence.",
    hero: "Keep critical digital assets under national control.",
    intro:
      "AxeOra enables nations to maintain full ownership and control over critical digital assets. The approach ensures data residency, operational independence, and long-term national digital sovereignty.",
    image: photos.privateCloud,
    items: [
      "National Sovereign Cloud Architecture",
      "Government Private Cloud Deployments",
      "Sovereign Data Hosting",
      "Hybrid Multi-Cloud Environments",
      "Critical Infrastructure Protection",
      "Regulatory Compliance Frameworks",
      "Secure Government Platforms",
    ],
  },
  {
    slug: "cybersecurity",
    kind: "Product",
    title: "National Cybersecurity Programs",
    cardTitle: "National Cybersecurity",
    card:
      "Security-by-design for government systems and critical infrastructure — SOC, zero trust, and cyber resilience.",
    hero: "Security-by-design for governments and critical infrastructure.",
    intro:
      "Cybersecurity is embedded into every AxeOra solution through a security-by-design methodology. AxeOra partners with leading global cybersecurity technology providers to protect government systems, critical infrastructure, and citizen data against evolving cyber threats.",
    image: photos.cyberNational,
    items: [
      "National Cybersecurity Frameworks",
      "Security Operations Centers (SOC)",
      "Cyber Fusion Centers",
      "Critical Infrastructure Protection",
      "Digital Identity Security",
      "Threat Intelligence Platforms",
      "Incident Response & Recovery",
      "Security Monitoring & Analytics",
      "Zero Trust Architectures",
      "Cyber Resilience Programs",
    ],
  },
  {
    slug: "digital-public-infrastructure",
    kind: "Product",
    title: "Digital Public Infrastructure",
    cardTitle: "Digital Public Infrastructure",
    card:
      "Identity, payments, wallets, and government super apps that form the rails of a secure digital economy.",
    hero: "The rails of a secure digital economy.",
    intro:
      "AxeOra develops integrated Digital Public Infrastructure (DPI) ecosystems that accelerate inclusion, transparency, and economic growth. These platforms provide the foundation for secure digital economies and next-generation public services.",
    image: photos.dpi,
    items: [
      "National Digital Identity",
      "Citizen Authentication Platforms",
      "Government Super Apps",
      "Digital Wallets",
      "Digital Payments",
      "National Payment Gateways",
      "E-Government Services",
      "Digital Trust Frameworks",
    ],
  },
  {
    slug: "smart-cities",
    kind: "Service",
    title: "Smart Cities & Intelligent Mobility",
    cardTitle: "Smart Cities",
    card:
      "AI and computer vision for safety, mobility, and urban command centres — delivered as a national service.",
    hero: "Intelligent urban systems that improve citizen services.",
    intro:
      "Leveraging AI and computer vision technologies, AxeOra delivers intelligent urban solutions that enhance safety, mobility, and operational efficiency. Such systems enable governments to improve citizen services while optimizing infrastructure investments.",
    image: photos.enforce,
    items: [
      "Intelligent Video Analytics",
      "Smart Traffic Management",
      "Digital Traffic Enforcement",
      "Public Safety Monitoring",
      "Smart Mobility Platforms",
      "AI-Powered Urban Command Centers",
      "Real-Time Situational Awareness",
      "Transportation Analytics",
    ],
  },
];

export const productPages: Record<
  string,
  {
    features: { title: string; text: string }[];
    accordionTitle: string;
    accordionLead: string;
    highlights: { title: string; body: string; image: string }[];
    forLead: string;
    for: { id: string; kind?: string; title: string; card: string; image: string }[];
  }
> = {
  "ai-infrastructure": {
    features: [
      {
        title: "Sovereign by design",
        text: "National AI platforms, data lakes, and LLM enablement that keep training and inference under sovereign control.",
      },
      {
        title: "From data to decision",
        text: "Generative AI, predictive analytics, and decision intelligence that turn government data into operational outcomes.",
      },
      {
        title: "Built for public services",
        text: "AI for citizen services, smart-city analytics, and computer vision — deployed at national scale.",
      },
    ],
    accordionTitle: "Built for Choice, Scale, and Trust",
    accordionLead:
      "AxeOra brings together AI-ready data centres, sovereign platforms, and production-grade intelligence in one national stack.",
    highlights: [
      {
        title: "AI Data Centers",
        body: "Purpose-built facilities that host training and inference workloads with the power, cooling, and connectivity national programmes require.",
        image: photos.hall,
      },
      {
        title: "Sovereign AI Platforms",
        body: "In-country platforms for model hosting, fine-tuning, and governed access — so national data never leaves national control.",
        image: photos.privateCloud,
      },
      {
        title: "National Data Lakes",
        body: "Unified lakes that make government data usable for analytics, generative AI, and cross-agency decision intelligence.",
        image: photos.dataLake,
      },
      {
        title: "LLM Enablement",
        body: "Large language model platforms for public-sector use cases, with security, auditability, and local-language capability.",
        image: photos.llm,
      },
      {
        title: "Computer Vision",
        body: "Video analytics for safety, mobility, and urban operations — feeding command centres in real time.",
        image: photos.vision,
      },
    ],
    forLead:
      "From ministries standing up their first national AI platform to enterprises that need sovereign compute, AxeOra delivers infrastructure that scales with confidence.",
    for: [
      {
        id: "gov",
        kind: "Audience",
        title: "Governments",
        card: "National AI platforms, data lakes, and decision intelligence for citizen-centric public services.",
        image: photos.conf,
      },
      {
        id: "ent",
        kind: "Audience",
        title: "Strategic enterprises",
        card: "Train, fine-tune, and deploy AI on sovereign platforms without compromising compliance.",
        image: photos.tower,
      },
      {
        id: "afr",
        kind: "Audience",
        title: "UAE–Africa partners",
        card: "AI-ready infrastructure delivered with technology transfer so nations can own and operate it.",
        image: photos.nairobi,
      },
    ],
  },
  "sovereign-cloud": {
    features: [
      {
        title: "In-country control",
        text: "National sovereign cloud architecture with data residency, operational independence, and regulatory-grade compliance.",
      },
      {
        title: "Government private cloud",
        text: "Dedicated environments for sensitive workloads, critical infrastructure, and cross-government platforms.",
      },
      {
        title: "Hybrid without compromise",
        text: "Hybrid multi-cloud that keeps crown-jewel systems sovereign while allowing controlled interconnection.",
      },
    ],
    accordionTitle: "Sovereignty is infrastructure",
    accordionLead:
      "Keep critical digital assets under national control — with architecture engineered for residency, independence, and long-term digital sovereignty.",
    highlights: [
      {
        title: "National Sovereign Cloud",
        body: "Architecture designed so governments retain ownership of data, keys, operations, and the platforms that run the state.",
        image: photos.privateCloud,
      },
      {
        title: "Government Private Cloud",
        body: "Isolated deployments for ministries and critical national infrastructure, with dedicated tenancy and audit trails.",
        image: photos.racks,
      },
      {
        title: "Sovereign Data Hosting",
        body: "In-country hosting that meets residency, classification, and regulatory requirements for citizen and state data.",
        image: photos.hall,
      },
      {
        title: "Hybrid Multi-Cloud",
        body: "Connect sovereign estates to selected public clouds without surrendering control of sensitive workloads.",
        image: photos.szr,
      },
      {
        title: "Secure Government Platforms",
        body: "Hardened platforms for digital government, with identity, encryption, and continuous compliance built in.",
        image: photos.ident,
      },
    ],
    forLead:
      "From public-sector excellence across cloud, data, and AI to regulated enterprises that cannot compromise on residency.",
    for: [
      {
        id: "gov",
        kind: "Audience",
        title: "Government / sovereign cloud",
        card: "Data sovereignty and compliance for public-sector excellence across cloud, data, and AI.",
        image: photos.conf,
      },
      {
        id: "ent",
        kind: "Audience",
        title: "Large enterprises",
        card: "Scalable infrastructure for complex operations — from idea to production without friction.",
        image: photos.tower,
      },
      {
        id: "afr",
        kind: "Audience",
        title: "National programmes",
        card: "PPP and BOT delivery so nations can deploy world-class cloud while building local capability.",
        image: photos.cape,
      },
    ],
  },
  cybersecurity: {
    features: [
      {
        title: "Security-by-design",
        text: "Cybersecurity embedded into every layer — frameworks, SOCs, fusion centres, and zero trust.",
      },
      {
        title: "National operations",
        text: "Security operations and cyber fusion centres that protect government systems and critical infrastructure.",
      },
      {
        title: "Resilience under pressure",
        text: "Threat intelligence, incident response, and recovery programmes built for evolving national threats.",
      },
    ],
    accordionTitle: "Protect the digital nation",
    accordionLead:
      "AxeOra partners with leading global cybersecurity providers to protect government systems, critical infrastructure, and citizen data.",
    highlights: [
      {
        title: "National Frameworks",
        body: "Cybersecurity frameworks aligned to national policy, regulation, and the threat landscape governments actually face.",
        image: photos.frameworks,
      },
      {
        title: "Security Operations Centers",
        body: "SOCs that monitor, detect, and respond around the clock — with playbooks tuned for government and CNI.",
        image: photos.soc,
      },
      {
        title: "Cyber Fusion Centers",
        body: "Fused intelligence across agencies so threats are seen once and acted on together.",
        image: photos.fusion,
      },
      {
        title: "Zero Trust Architectures",
        body: "Identity-first access, micro-segmentation, and continuous verification across government estates.",
        image: photos.zeroTrust,
      },
      {
        title: "Incident Response",
        body: "Preparedness, response, and recovery so a breach does not become a national crisis.",
        image: photos.incident,
      },
    ],
    forLead:
      "From national SOCs to regulated enterprises that need zero-trust architectures and cyber resilience they can operate.",
    for: [
      {
        id: "gov",
        kind: "Audience",
        title: "Public sector",
        card: "National frameworks, SOCs, and fusion centres that protect government systems and citizen data.",
        image: photos.conf,
      },
      {
        id: "cni",
        kind: "Audience",
        title: "Critical infrastructure",
        card: "Protection programmes for energy, transport, telecoms, and other nationally significant systems.",
        image: photos.power,
      },
      {
        id: "ent",
        kind: "Audience",
        title: "Regulated industries",
        card: "Zero trust, monitoring, and incident response for finance, healthcare, aviation, and energy.",
        image: photos.tower,
      },
    ],
  },
  "digital-public-infrastructure": {
    features: [
      {
        title: "Identity first",
        text: "National digital identity and citizen authentication that unlock every other public service.",
      },
      {
        title: "Payments that include",
        text: "Wallets, payment gateways, and digital rails that accelerate inclusion and economic growth.",
      },
      {
        title: "Government in an app",
        text: "Super apps and e-government services that make the state usable, transparent, and trusted.",
      },
    ],
    accordionTitle: "The rails of a digital economy",
    accordionLead:
      "Integrated DPI ecosystems that accelerate inclusion, transparency, and growth — identity, wallets, payments, and e-government.",
    highlights: [
      {
        title: "National Digital Identity",
        body: "Foundational identity that lets citizens prove who they are — securely, once, across government.",
        image: photos.identHall,
      },
      {
        title: "Citizen Authentication",
        body: "Trusted login and consent for every public service, with privacy and auditability designed in.",
        image: photos.authGate,
      },
      {
        title: "Government Super Apps",
        body: "A single front door for licences, benefits, payments, and civic services.",
        image: photos.superAppHall,
      },
      {
        title: "Digital Wallets",
        body: "Citizen wallets for credentials, payments, and benefits — portable across agencies and partners.",
        image: photos.wallet,
      },
      {
        title: "National Payment Gateways",
        body: "Sovereign payment rails that move money for government, merchants, and people with transparency.",
        image: photos.payments,
      },
    ],
    forLead:
      "From ministries building identity and payments to partners connecting UAE innovation with African digital economies.",
    for: [
      {
        id: "gov",
        kind: "Audience",
        title: "Governments",
        card: "Identity, wallets, and e-government that make public services inclusive, transparent, and trusted.",
        image: photos.conf,
      },
      {
        id: "fin",
        kind: "Audience",
        title: "Financial inclusion",
        card: "National payment gateways and wallets that bring more people into the formal economy.",
        image: photos.payGate,
      },
      {
        id: "afr",
        kind: "Audience",
        title: "UAE–Africa partners",
        card: "DPI programmes delivered with technology transfer across twelve African nations.",
        image: photos.nairobi,
      },
    ],
  },
  "smart-cities": {
    features: [
      {
        title: "See the city clearly",
        text: "Intelligent video analytics and public-safety monitoring that give operators real-time situational awareness.",
      },
      {
        title: "Move people better",
        text: "Smart traffic, digital enforcement, and mobility platforms that make streets safer and journeys shorter.",
      },
      {
        title: "One command centre",
        text: "AI-powered urban operations that connect cameras, sensors, and agencies in a single picture.",
      },
    ],
    accordionTitle: "Intelligence from street to command centre",
    accordionLead:
      "AI and computer vision for safety, mobility, and operational efficiency — delivered as a national urban service.",
    highlights: [
      {
        title: "Intelligent Video Analytics",
        body: "Computer vision that turns camera estates into live intelligence for safety and operations.",
        image: photos.cctv,
      },
      {
        title: "Smart Traffic Management",
        body: "Adaptive control and analytics that reduce congestion and improve corridor performance.",
        image: photos.traffic,
      },
      {
        title: "Digital Traffic Enforcement",
        body: "Fair, auditable enforcement that improves compliance without slowing the city down.",
        image: photos.enforce,
      },
      {
        title: "Urban Command Centers",
        body: "AI-powered centres where traffic, safety, and city services share one operational picture.",
        image: photos.dash,
      },
      {
        title: "Smart Mobility",
        body: "Platforms that coordinate public transport, enforcement, and real-time traveller information.",
        image: photos.marina,
      },
    ],
    forLead:
      "From capital-city traffic authorities to national public-safety programmes that need computer vision they can trust.",
    for: [
      {
        id: "city",
        kind: "Audience",
        title: "Cities & mobility",
        card: "Traffic, enforcement, and mobility platforms that make streets safer and journeys shorter.",
        image: photos.szr,
      },
      {
        id: "safe",
        kind: "Audience",
        title: "Public safety",
        card: "Video analytics and command centres that improve response without compromising rights.",
        image: photos.enforce,
      },
      {
        id: "gov",
        kind: "Audience",
        title: "National programmes",
        card: "Urban intelligence delivered under PPP and BOT so cities can operate and evolve the system.",
        image: photos.cape,
      },
    ],
  },
};

export const strengths = [
  "Deep B2G and G2G engagement expertise.",
  "Strong track record and engagement across Africa.",
  "Expertise in AI, Cybersecurity, Sovereign Cloud and Digital Infrastructure.",
  "End-to-end project delivery under PPP and BOT frameworks.",
  "Technology transfer and local capacity-building programs.",
  "Strategic partnerships with leading international technology providers.",
];

export const africaCountries = [
  "Senegal",
  "Côte d'Ivoire",
  "Ghana",
  "Nigeria",
  "Kenya",
  "Tanzania",
  "Rwanda",
  "Zambia",
  "South Africa",
  "Burkina Faso",
  "Mozambique",
  "Madagascar",
];

export const audiences = [
  {
    id: "governments",
    label: "Public Sector & Governments",
    title: "Powering digital nations with mission-critical AI",
    body: "AxeOra serves as a trusted partner to governments seeking to modernize public services, safeguard critical digital assets, and harness Artificial Intelligence for citizen-centric development. By combining advanced technologies with strategic PPP and Build-Operate-Transfer (BOT) delivery models, we enable nations to deploy world-class digital infrastructure while building sustainable local capabilities.",
    points: [
      {
        title: "Sovereignty with control",
        text: "Deploy government systems on architecture engineered for data residency, operational independence, and regulatory compliance.",
      },
      {
        title: "National-scale digital government",
        text: "Support citizen services, critical workloads, and cross-government platforms with reliable, sovereign infrastructure.",
      },
      {
        title: "Security-by-design",
        text: "Embed cybersecurity, auditability, access controls, and trusted governance across every layer.",
      },
      {
        title: "AI for public services",
        text: "Enable agencies to modernize operations, automate processes, and deliver intelligent, efficient services to citizens.",
      },
    ],
  },
  {
    id: "enterprises",
    label: "Strategic Enterprises",
    title: "Infrastructure that accelerates enterprise transformation",
    body: "AxeOra equips strategic enterprises with AI-ready platforms, sovereign cloud, and cybersecurity programs that accelerate modernization without compromising compliance — particularly in regulated environments where data protection is critical.",
    points: [
      {
        title: "Enterprise-ready AI",
        text: "Train, fine-tune, and deploy AI workloads on sovereign platforms spanning data lakes, generative AI, and decision intelligence.",
      },
      {
        title: "Modernization you can trust",
        text: "Transform legacy systems and migrate to cloud architectures built for governance, resilience, and continuity.",
      },
      {
        title: "Regulated industries",
        text: "Tailored for finance, healthcare, energy, aviation, and environments where data protection and compliance are critical.",
      },
      {
        title: "PPP and BOT delivery",
        text: "Move from plan to production with end-to-end project delivery and world-class technology partners.",
      },
    ],
  },
  {
    id: "africa",
    label: "UAE–Africa Partners",
    title: "A strategic bridge from UAE innovation to African ambition",
    body: "With active engagements spanning twelve African nations, AxeOra acts as a strategic bridge connecting UAE innovation, investment, and expertise with Africa’s digital transformation ambitions — backed by Mark Cables UAE for industrial capability and project delivery.",
    points: [
      {
        title: "UAE–Africa digital bridge",
        text: "Connect Emirati technology, capital, and delivery excellence with national digital programs across the continent.",
      },
      {
        title: "Local capability",
        text: "Technology transfer and capacity-building programs so nations own, operate, and evolve their own infrastructure.",
      },
      {
        title: "Group-backed execution",
        text: "Supported by Mark Cables UAE for supply-chain strength, industrial capability, and financial resilience.",
      },
      {
        title: "G2G engagement",
        text: "Deep government-to-government partnership models designed for national-scale programs, not one-off pilots.",
      },
    ],
  },
  {
    id: "cities",
    label: "Cities & Mobility",
    title: "Intelligent urban systems at city scale",
    body: "AxeOra delivers AI and computer-vision systems that enhance safety, mobility, and operational efficiency — enabling governments to improve citizen services while optimizing infrastructure investments.",
    points: [
      {
        title: "Urban command",
        text: "AI-powered command centres with real-time situational awareness across traffic, public safety, and mobility.",
      },
      {
        title: "Safer streets",
        text: "Intelligent video analytics, digital traffic enforcement, and public safety monitoring.",
      },
      {
        title: "Smart mobility",
        text: "Transportation analytics and mobility platforms that keep cities moving.",
      },
      {
        title: "Sovereign by default",
        text: "City systems hosted and governed under national digital sovereignty principles.",
      },
    ],
  },
];

export const stats = [
  { value: "12", label: "African nations with active engagements" },
  { value: "5", label: "National-scale capability domains" },
  { value: "PPP", label: "And BOT delivery for sovereign programs" },
  { value: "UAE", label: "Emirati technology partner for digital nations" },
];

export const insights = [
  {
    kicker: "UAE–AFRICA",
    title: "A strategic bridge connecting UAE innovation with Africa’s digital ambitions",
    image: photos.nairobi,
    to: "/africa",
  },
  {
    kicker: "SOVEREIGN CLOUD",
    title: "Why digital sovereignty is now a national infrastructure question",
    image: photos.privateCloud,
    to: "/solutions/sovereign-cloud",
  },
  {
    kicker: "CYBERSECURITY",
    title: "Security-by-design for government systems and critical infrastructure",
    image: photos.cyber,
    to: "/solutions/cybersecurity",
  },
  {
    kicker: "DPI",
    title: "Digital public infrastructure as the foundation of inclusive economies",
    image: photos.dpi,
    to: "/solutions/digital-public-infrastructure",
  },
  {
    kicker: "AI",
    title: "From national data lakes to LLM enablement platforms",
    image: photos.hall,
    to: "/solutions/ai-infrastructure",
  },
];

export const useCases = [
  {
    kicker: "Public Sector",
    title: "Smarter government, better outcomes",
    text: "Modernize citizen services, automate administrative workflows, and enable data-driven policy while maintaining sovereign control over sensitive national data.",
    image: photos.dpi,
    to: "/solutions/digital-public-infrastructure",
  },
  {
    kicker: "Cyber Defence",
    title: "National-scale cyber resilience",
    text: "Stand up SOCs, fusion centres, and zero-trust architectures that protect government systems, critical infrastructure, and citizen data.",
    image: photos.cyber,
    to: "/solutions/cybersecurity",
  },
  {
    kicker: "Identity & Payments",
    title: "Digital rails for inclusion",
    text: "National digital identity, wallets, and payment gateways that accelerate inclusion, transparency, and economic growth.",
    image: photos.identHall,
    to: "/solutions/digital-public-infrastructure",
  },
  {
    kicker: "Cities",
    title: "Intelligence from street to command centre",
    text: "Optimize traffic, public safety, and mobility with computer vision and AI-powered urban operations.",
    image: photos.enforce,
    to: "/solutions/smart-cities",
  },
];

export const stack = [
  {
    id: "services",
    title: "Digital public services",
    icon: "/intelligence/services.png",
    body: "National digital identity, citizen authentication, government super apps, wallets, and payments — the rails of a secure digital economy, with smart-city services that improve safety and mobility.",
  },
  {
    id: "ai",
    title: "AI infrastructure",
    icon: "/intelligence/ai.png",
    body: "AI-ready data centres, national data lakes, sovereign AI platforms, and LLM enablement so governments can train, fine-tune, and deploy intelligence without losing control of national data.",
  },
  {
    id: "cloud",
    title: "Sovereign cloud",
    icon: "/intelligence/cloud.png",
    body: "In-country architecture with full ownership of critical assets, data residency, and operational independence — government private cloud and hybrid environments built for regulatory-grade compliance.",
  },
  {
    id: "cyber",
    title: "Cybersecurity",
    icon: "/intelligence/cyber.png",
    body: "Security-by-design across every layer: national frameworks, SOCs, fusion centres, zero trust, and incident response — protecting government systems, critical infrastructure, and citizen data.",
  },
  {
    id: "energy",
    title: "Energy and compute",
    icon: "/intelligence/energy.png",
    body: "Purpose-built facilities and industrial delivery for training and inference workloads. Supported by Mark Cables UAE, with sustainable power generation as a brand pillar for national-scale programmes.",
  },
];

export const pillars = [
  { label: "Digitalisation", tone: "blue" },
  { label: "Sustainable Power Generation", tone: "green" },
  { label: "Digital Trade", tone: "blue" },
];

export const pageSections = [
  { id: "manufacturing", label: "Capabilities" },
  { id: "mission", label: "Mission" },
  { id: "use-case", label: "Use Cases" },
  { id: "intelligence", label: "Stack" },
  { id: "trusted", label: "Partners" },
  { id: "get_started", label: "Get Started" },
];

export const partners = [
  "Mark Cables UAE",
  "PPP Delivery",
  "BOT Frameworks",
  "Sovereign Cloud",
  "National SOC",
  "Digital Identity",
  "Smart Cities",
  "UAE–Africa Bridge",
  "Cyber Fusion",
  "LLM Enablement",
];

export const heroVideo =
  "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4";
