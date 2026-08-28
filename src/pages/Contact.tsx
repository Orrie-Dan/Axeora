import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <section className="page-hero" data-aos="fade-up">
        <div className="wrap">
          <p className="kicker">Contact</p>
          <h1>Engineer your digital-nation program with AxeOra</h1>
          <p>
            Trusted by governments and strategic enterprises seeking sovereign AI, cloud, and cyber
            capability. Connect with our team to explore a briefing.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Why governments brief AxeOra</h2>
            <ul className="points" style={{ marginTop: 24 }}>
              <li>
                <strong>National-scale AI infrastructure</strong>
                <span>Data centres, sovereign platforms, data lakes, and LLM enablement.</span>
              </li>
              <li>
                <strong>Sovereign-grade security and governance</strong>
                <span>Security-by-design, in-country control, and cyber resilience programs.</span>
              </li>
              <li>
                <strong>PPP and BOT delivery</strong>
                <span>From planning to operation, with technology transfer and local capability.</span>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
