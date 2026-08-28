import { useEffect, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import ProductCascade from "../components/ProductCascade";
import MissionTabs from "../components/MissionTabs";
import PinnedCases from "../components/PinnedCases";
import StackAccordion from "../components/StackAccordion";
import LogoMarquee from "../components/LogoMarquee";

export default function Home() {
  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    let killed = false;
    async function setup() {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (killed) return;
      gsap.registerPlugin(ScrollTrigger);
      const bg = document.querySelector(".mission_tabber_section .hero-bg");
      const started = document.getElementById("get_started");
      ctx = gsap.context(() => {
        if (bg) {
          gsap.to(bg, {
            yPercent: 18,
            ease: "none",
            scrollTrigger: {
              trigger: ".mission_tabber_section",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
        if (started) {
          gsap.fromTo(
            started.querySelector("h2"),
            { y: 40, opacity: 0.4 },
            {
              y: 0,
              opacity: 1,
              ease: "none",
              scrollTrigger: { trigger: started, start: "top 80%", end: "top 30%", scrub: true },
            },
          );
        }
      });
    }
    setup();
    return () => {
      killed = true;
      ctx?.revert();
    };
  }, []);

  function goToCapabilities(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const el = document.getElementById("manufacturing");
    if (!el) return;
    const lenis = (
      window as Window & { __lenis?: { scrollTo: (target: HTMLElement, opts?: { offset?: number }) => void } }
    ).__lenis;
    if (lenis) lenis.scrollTo(el, { offset: -20 });
    else el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div className="cm-banner-wrap complete_center cont-align-center">
        <div className="cm-banner-group has-banner has-hero-video has-hero-still">
          <img
            className="hero-video"
            src="/hero/sovereign-stack.png"
            alt=""
            aria-hidden
          />
          <div className="overlay-bg" />
          <div className="content-wrapper">
            <div className="banner-content">
              <div className="banner-left">
                <div className="hero-banner-lower-text">
                  <h1 style={{ textAlign: "center" }}>Leading digital nations</h1>
                  <p style={{ textAlign: "center" }}>
                    <span style={{ color: "#ffffff" }}>
                      We build the sovereign AI, cloud, and cyber backbone that enables governments
                      to move from ambition to real-world impact, at scale.
                    </span>
                  </p>
                </div>
                <div className="button-group">
                  <div className="button-item">
                    <a className="button primary" href="#manufacturing" onClick={goToCapabilities}>
                      Explore now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductCascade />
      <MissionTabs />
      <PinnedCases />
      <StackAccordion />
      <LogoMarquee />

      <section className="full-width-bg type1" id="get_started">
        <div className="content-wrapper">
          <h2>Get started with AxeOra</h2>
          <div className="button-group">
            <Link className="button primary" to="/contact">
              Contact sales
            </Link>
            <Link className="button Secondary" to="/africa">
              Join us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
