import { Link } from "react-router-dom";
import { navProducts } from "../data";

type Props = {
  open: boolean;
  overHero?: boolean;
  onToggle: () => void;
};

const Chevron = () => (
  <svg className="htm__nav-label-icon" width="11" height="8" viewBox="0 0 11 8" fill="none" aria-hidden>
    <path d="M0 0.337864L5.5 6.33786L11 0.337864" stroke="currentColor" />
  </svg>
);

export default function Header({ open, overHero, onToggle }: Props) {
  return (
    <header
      className={`header header--clone header--top-variant${overHero ? " header--over-hero" : ""}${open ? " is-open" : ""}`}
    >
      <div className="content-wrapper">
        <div className="header-left-side">
          <Link to="/" className="brand custom-logo" aria-label="AxeOra UAE home">
            <img src="/brand/mark.png" alt="" width={83} height={50} />
            <span className="brand-copy">
              <span className="brand-name">AXEORA</span>
              <span className="brand-sub">UAE</span>
            </span>
          </Link>

          <div className="header-right-side">
            <nav className="htm" aria-label="Primary">
              <ul className="htm__nav-list">
                <li className="htm__nav-item">
                  <input className="htm__nav-input" id="submenu-products" type="checkbox" hidden />
                  <label className="htm__nav-label" htmlFor="submenu-products">
                    <span className="htm__nav-label-text">Products</span>
                    <Chevron />
                  </label>
                  <div className="htm__nav-sublist-container" data-type="rich">
                    <ul className="htm__nav-sublist">
                      {navProducts.map((p) => (
                        <li className="htm__nav-subitem" key={p.to}>
                          <Link to={p.to} className="htm__nav-subitem-link">
                            <p className="htm__nav-subitem-link-text">
                              <span className="htm__nav-subitem-link-title">{p.label}</span>
                              <span className="htm__nav-subitem-link-desc">{p.blurb}</span>
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li className="htm__nav-item">
                  <Link className="htm__nav-item-link" to="/about">
                    About AxeOra
                  </Link>
                </li>
                <li className="htm__nav-item">
                  <Link className="htm__nav-item-link" to="/africa">
                    UAE–Africa
                  </Link>
                </li>
                <li className="htm__nav-item">
                  <Link className="htm__nav-item-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <button
              className="menu-toggle htm-mobile-label"
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={onToggle}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
