import { partners } from "../data";

const partnerLogos: Record<string, string> = {
  Tech5: "/partners/tech5.png",
  UXE: "/partners/uxe.svg",
  Parkin: "/partners/parkin.svg",
  "National Pulse": "/partners/national-pulse.png",
  Dell: "/partners/dell.svg",
  Microsoft: "/partners/microsoft.svg",
  Cisco: "/partners/cisco.svg",
};

const loop = [...partners, ...partners, ...partners];

function slug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function LogoMarquee() {
  return (
    <section className="trusted-section" id="trusted" aria-labelledby="partners-heading">
      <div className="wrap">
        <p className="capabilities-eyebrow capabilities-eyebrow--dark" data-aos="fade-up">
          Partners
        </p>
        <h2 id="partners-heading" data-aos="fade-up">
          Technology partners for national-scale programmes
        </h2>
        <div className="partners-rule" />
      </div>
      <div className="partners-marquee">
        <div className="partners-track">
          {[0, 1].map((copy) => (
            <ul key={copy} className="partners-row" aria-hidden={copy === 1 || undefined}>
              {loop.map((name, i) => {
                const announced = copy === 0 && i < partners.length;
                return (
                  <li key={`${copy}-${name}-${i}`} aria-hidden={!announced || undefined}>
                    <img
                      className={`partner-logo partner-logo--${slug(name)}`}
                      src={partnerLogos[name]}
                      alt={announced ? name : ""}
                    />
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
