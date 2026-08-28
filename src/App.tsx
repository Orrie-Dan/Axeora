import { useEffect, useState, type CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";
import { navProducts } from "./data";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Overlay from "./components/Overlay";
import SalesModal from "./components/SalesModal";
import SmoothScroll from "./motion/SmoothScroll";
import Home from "./pages/Home";
import About from "./pages/About";
import Africa from "./pages/Africa";
import Contact from "./pages/Contact";
import Solution from "./pages/Solution";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [announce, setAnnounce] = useState(true);
  const [sales, setSales] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setSales(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen || sales ? "hidden" : "";
    const lenis = (window as Window & { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    if (menuOpen || sales) lenis?.stop();
    else lenis?.start();
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [menuOpen, sales]);

  const page = (() => {
    if (location.pathname === "/") return <Home />;
    if (location.pathname === "/about") return <About />;
    if (location.pathname === "/africa") return <Africa />;
    if (location.pathname === "/contact") return <Contact />;
    if (location.pathname === "/privacy") return <Privacy />;
    if (location.pathname === "/terms") return <Terms />;
    const match = location.pathname.match(/^\/solutions\/([a-z0-9-]+)$/);
    if (match) return <Solution slug={match[1]} />;
    return <NotFound />;
  })();

  const overHero = location.pathname === "/" || location.pathname.startsWith("/solutions/");
  const chromePad = overHero ? 0 : announce ? 137 : 86;

  return (
    <>
      <SmoothScroll />
      <div className={`chrome${overHero ? " chrome--over-hero" : ""}`}>
        {announce && (
          <div className="top-bar announce">
            <div className="top-bar__inner">
              <p className="top-bar__text">
                <span className="top-bar__announcement">
                  AxeOra UAE — sovereign AI, cloud, and cyber infrastructure for governments
                </span>
                <Link className="top-bar__link" to="/about">
                  View announcement
                </Link>
              </p>
            </div>
            <button className="announce-close close-icon" type="button" onClick={() => setAnnounce(false)} aria-label="Dismiss">
              ×
            </button>
          </div>
        )}
        <Header
          open={menuOpen}
          overHero={overHero}
          onToggle={() => {
            setSales(false);
            setMenuOpen((v) => !v);
          }}
        />
      </div>
      <Overlay open={menuOpen} products={navProducts} onClose={() => setMenuOpen(false)} />
      <div id="smooth-wrapper" style={{ "--chrome": `${overHero ? (announce ? 137 : 86) : chromePad}px` } as CSSProperties}>
        <div id="smooth-content">
          <main style={{ paddingTop: chromePad }}>{page}</main>
          <Footer />
        </div>
      </div>
      <SalesModal open={sales} onClose={() => setSales(false)} />
      <button
        className="talk-fab"
        type="button"
        onClick={() => {
          setMenuOpen(false);
          setSales(true);
        }}
      >
        Talk to sales
      </button>
    </>
  );
}
