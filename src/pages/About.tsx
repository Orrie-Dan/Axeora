import { Link } from "react-router-dom";
import { company, strengths } from "../data";

export default function About() {
  return (
    <>
      <section className="page-hero" data-aos="fade-up">
        <div className="wrap">
          <p className="kicker">About AxeOra</p>
          <h1>An Emirati partner for AI-powered digital nations</h1>
          <p>
            {company.tagline}. Founded on the UAE’s vision of innovation and technological
            leadership.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="prose">
            <p>
              AxeOra UAE is a next-generation Emirati technology company specializing in Artificial
              Intelligence, Sovereign Cloud Infrastructure, Cybersecurity, Digital Public
              Infrastructure, and national-scale digital transformation programs for governments
              and strategic enterprises.
            </p>
            <p>
              We deliver secure, intelligent, and future-ready digital ecosystems that accelerate
              economic growth, strengthen national resilience, and enable digital sovereignty.
            </p>
            <p>
              AxeOra serves as a trusted partner to governments seeking to modernize public
              services, safeguard critical digital assets, and harness the power of Artificial
              Intelligence for citizen-centric development. By combining advanced technologies with
              strategic PPP and Build-Operate-Transfer (BOT) delivery models, we enable nations to
              deploy world-class digital infrastructure while building sustainable local
              capabilities.
            </p>
          </div>
          <div className="cover cover--identity">
            <img src="/brand/lockup.png" alt="AxeOra UAE brand identity" />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <div>
            <h2>Vision</h2>
            <p className="lede">
              To become the leading Emirati partner for AI-powered digital nations, enabling
              governments through sovereign cloud infrastructure, cybersecurity excellence,
              intelligent public services, and sustainable digital economies.
            </p>
          </div>
          <div>
            <h2>Positioning</h2>
            <p className="lede">“{company.positioning}”</p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <h2>Strategic strengths</h2>
          <ul className="points" style={{ marginTop: 32, maxWidth: 760 }}>
            {strengths.map((s) => (
              <li key={s}>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Group ecosystem</h2>
            <p className="lede">
              Supported by Mark Cables UAE, AxeOra benefits from enhanced industrial capability,
              supply-chain strength, project delivery excellence, and financial resilience —
              enabling execution of large-scale national infrastructure programs.
            </p>
            <Link className="btn btn-dark" to="/contact" style={{ marginTop: 28 }}>
              Partner with AxeOra
            </Link>
          </div>
          <div className="cover">
            <img src="/brand/metal.png" alt="AxeOra metallic mark" />
          </div>
        </div>
      </section>
    </>
  );
}
