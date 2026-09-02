import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ once: true, duration: 1000, easing: "ease-out" });

    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.1,
    });

    lenis.on("scroll", () => {
      ScrollTrigger.update();
      AOS.refresh();
    });
    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);
    (window as Window & { __lenis?: Lenis }).__lenis = lenis;
    document.documentElement.classList.add("lenis");

    const onLoad = () => {
      window.setTimeout(() => document.documentElement.classList.add("page-loaded"), 400);
      ScrollTrigger.refresh();
    };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      gsap.ticker.remove(ticker);
      lenis.destroy();
      delete (window as Window & { __lenis?: Lenis }).__lenis;
      document.documentElement.classList.remove("lenis");
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    const lenis = (window as Window & { __lenis?: Lenis }).__lenis;
    lenis?.scrollTo(0, { immediate: true });
    window.setTimeout(() => {
      AOS.refreshHard();
      ScrollTrigger.refresh();
    }, 80);
  }, [location.pathname]);

  return null;
}
