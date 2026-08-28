import { type MouseEvent } from "react";
import { productPages, products } from "../data";
import NotFound from "./NotFound";
import TwoColAccordion from "../components/TwoColAccordion";
import CardCascade from "../components/CardCascade";
import LogoMarquee from "../components/LogoMarquee";
import ContactForm, { interestBySlug } from "../components/ContactForm";

const FeatureMark = () => (
  <svg className="features-grid__icon" width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden>
    <rect x="22" y="6" width="6" height="6" fill="#48DE93" />
    <rect x="16" y="12" width="6" height="6" fill="#48DE93" />
    <rect x="28" y="12" width="6" height="6" fill="#48DE93" />
    <rect x="10" y="18" width="6" height="6" fill="#48DE93" />
    <rect x="34" y="18" width="6" height="6" fill="#48DE93" />
    <rect x="4" y="24" width="6" height="6" fill="#48DE93" />
    <rect x="40" y="24" width="6" height="6" fill="#48DE93" />
    <rect x="10" y="30" width="6" height="6" fill="#48DE93" />
    <rect x="34" y="30" width="6" height="6" fill="#48DE93" />
    <rect x="16" y="36" width="6" height="6" fill="#48DE93" />
    <rect x="28" y="36" width="6" height="6" fill="#48DE93" />
    <rect x="22" y="42" width="6" height="6" fill="#48DE93" />
  </svg>
);

function scrollToId(id: string, e?: MouseEvent<HTMLAnchorElement>) {
  e?.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = (
    window as Window & { __lenis?: { scrollTo: (target: HTMLElement, opts?: { offset?: number }) => void } }
  ).__lenis;
  if (lenis) lenis.scrollTo(el, { offset: -20 });
  else el.scrollIntoView({ behavior: "smooth" });
}

export default function Solution({ slug }: { slug: string }) {
  const product = products.find((p) => p.slug === slug);
  const page = productPages[slug];
  if (!product || !page) return <NotFound />;

  return (
    <>
      <div className="cm-banner-wrap complete_center cont-align-center">
        <div
          className="cm-banner-group has-banner"
          style={{ backgroundImage: `url(${product.image})` }}
        >
          <div className="overlay-bg" style={{ background: "rgba(0, 0, 0, 0.35)" }} />
          <div className="content-wrapper">
            <div className="banner-content">
              <div className="banner-left">
                <div className="hero-banner-lower-text">
                  <h1 style={{ textAlign: "center" }}>{product.cardTitle}</h1>
                  <p style={{ textAlign: "center" }}>
                    <span style={{ color: "#ffffff" }}>{product.intro}</span>
                  </p>
                </div>
                <div className="button-group">
                  <div className="button-item">
                    <a className="button primary" href="#capabilities" onClick={(e) => scrollToId("capabilities", e)}>
                      Explore {product.cardTitle}
                    </a>
                  </div>
                  <div className="button-item">
                    <a className="button secondary" href="#contact" onClick={(e) => scrollToId("contact", e)}>
                      Contact Sales
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="features-grid center" id="capabilities" aria-label="Key features">
        <div className="features-grid__seps" aria-hidden>
          <span className="features-grid__sep" style={{ left: 0, width: 12 }} />
          <span className="features-grid__sep" style={{ left: "2%", width: 3 }} />
          <span className="features-grid__sep" style={{ left: "6%", width: 22 }} />
          <span className="features-grid__sep" style={{ left: "6%", width: 3 }} />
          <span className="features-grid__sep" style={{ right: "calc(6% + 20px)", width: 22 }} />
          <span className="features-grid__sep" style={{ right: "6%", width: 3 }} />
          <span className="features-grid__sep" style={{ right: "2%", width: 6 }} />
          <span className="features-grid__sep" style={{ right: 0, width: 10 }} />
        </div>
        <div className="features-grid__container content-wrapper">
          <div className="features-grid__items">
            {page.features.map((f, i) => (
              <div key={f.title} className="features-grid__cluster">
                {i > 0 ? <div className="features-grid__divider" aria-hidden /> : null}
                <div className="features-grid__item">
                  <FeatureMark />
                  <h3 className="features-grid__title">{f.title}</h3>
                  <p className="features-grid__desc">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TwoColAccordion title={page.accordionTitle} lead={page.accordionLead} rows={page.highlights} />

      <CardCascade
        id="who"
        heading={
          <>
            Who
            <br />
            is this for
          </>
        }
        lead={page.forLead}
        items={page.for.map((item) => ({ ...item, href: "#contact" }))}
      />

      <LogoMarquee />

      <section className="full-width-bg type1 has-form" id="contact">
        <div className="content-wrapper">
          <h2>Get started with {product.cardTitle}</h2>
          <p className="cta-form-lead">
            Tell us about your programme. Our team will follow up with a briefing tailored to{" "}
            {product.cardTitle}.
          </p>
          <div className="custom-form-group">
            <ContactForm
              idPrefix="sol-"
              defaultInterest={interestBySlug[slug] ?? "ai"}
              submitLabel="Contact us"
            />
          </div>
        </div>
      </section>
    </>
  );
}
