import { Link } from "react-router-dom";
import { africaCountries } from "../data";

export default function Africa() {
  return (
    <>
      <section className="page-hero" data-aos="fade-up">
        <div className="wrap">
          <p className="kicker">UAE–Africa Digital Bridge</p>
          <h1>Connecting UAE innovation with Africa’s digital transformation</h1>
          <p>
            AxeOra acts as a strategic bridge connecting UAE innovation, investment, and expertise
            with Africa’s digital transformation ambitions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="prose">
            <p>
              With active engagements spanning Senegal, Côte d’Ivoire, Ghana, Nigeria, Kenya,
              Tanzania, Rwanda, Zambia, South Africa, Burkina Faso, Mozambique, and Madagascar,
              AxeOra brings Emirati technology, delivery models, and partnerships to national
              digital programs across the continent.
            </p>
            <p>
              Programs are structured for governments: PPP and Build-Operate-Transfer delivery,
              technology transfer, and local capacity-building so nations own and operate the
              infrastructure they deploy.
            </p>
            <Link className="btn btn-dark" to="/contact" style={{ marginTop: 24 }}>
              Discuss a national program
            </Link>
          </div>
          <div>
            <h2 style={{ fontSize: 22, marginBottom: 8 }}>Active engagements</h2>
            <div className="countries">
              {africaCountries.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cinema" style={{ minHeight: "56vh" }}>
        <img
          src="/photos/nairobi.jpg"
          alt="Nairobi skyline"
        />
        <div className="cinema-copy">
          <h2>Deep B2G and G2G engagement, built for national scale.</h2>
        </div>
      </section>
    </>
  );
}
