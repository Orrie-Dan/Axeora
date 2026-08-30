import { Link } from "react-router-dom";
import { navProducts } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid content-wrapper">
        <div className="footer-logo">
          <Link to="/" className="footer-brand" aria-label="AxeOra UAE home">
            <img src="/brand/mark.png" alt="" width={83} height={50} />
            <span className="footer-brand-copy">
              <span className="footer-brand-name">AXEORA</span>
              <span className="footer-brand-sub">UAE</span>
            </span>
          </Link>
        </div>
        <div>
          <div className="footer-col-title">Solutions</div>
          <ul className="footer-links">
            {navProducts.map((p) => (
              <li key={p.to}>
                <Link to={p.to}>{p.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Resources</div>
          <ul className="footer-links">
            <li>
              <Link to="/solutions/ai-infrastructure">Solutions</Link>
            </li>
            <li>
              <Link to="/africa">UAE–Africa</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Company</div>
          <ul className="footer-links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/africa">UAE–Africa</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Delivery</div>
          <ul className="footer-links">
            <li>
              <Link to="/about">PPP &amp; BOT frameworks</Link>
            </li>
            <li>
              <Link to="/about">Technology transfer</Link>
            </li>
            <li>
              <Link to="/about">Mark Cables UAE</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <span className="footer-copy">© {new Date().getFullYear()} AxeOra UAE. All rights reserved.</span>
        <div className="footer-legal">
          <Link to="/privacy">Privacy Notice</Link>
          <Link to="/terms">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
