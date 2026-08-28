import { Link } from "react-router-dom";
import LegalDoc from "../components/LegalDoc";

const toc = [
  ["who-we-are", "Who we are"],
  ["scope", "Scope of this notice"],
  ["data-we-collect", "Data we collect"],
  ["how-we-use", "How we use data"],
  ["legal-basis", "Legal basis"],
  ["sharing", "Sharing"],
  ["transfers", "International transfers"],
  ["retention", "Retention"],
  ["cookies", "Cookies and third-party technologies"],
  ["security", "Security"],
  ["rights", "Your rights"],
  ["contact", "Contact and complaints"],
  ["updates", "Updates"],
] as const;

export default function Privacy() {
  return (
    <LegalDoc title="Privacy Notice">
      <nav className="legal-toc" aria-label="Privacy Notice contents">
        <p className="legal-toc-title">Contents</p>
        <ol>
          {toc.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ol>
      </nav>

      <p>
        AxeOra UAE respects the confidentiality of government and enterprise counterparts.
        This Privacy Notice explains how we handle personal data collected through this
        website and its enquiry forms. It does not cover personal data processed inside
        customer deployments, national platforms, or other programmes delivered under a
        separate agreement.
      </p>

      <h2 id="who-we-are">1. Who we are</h2>
      <p>
        This notice is issued by AxeOra UAE, an Emirati technology company specialising in
        artificial intelligence, sovereign cloud, cybersecurity, and digital public
        infrastructure (“AxeOra”, “we”, “us”). We are based in the United Arab Emirates
        and are supported by Mark Cables UAE.
      </p>
      <p>
        For the purposes of Federal Decree-Law No. 45 of 2021 on the Protection of Personal
        Data (the UAE PDPL), AxeOra UAE is the controller of personal data collected through
        this website. A registered office address will be provided on request through the{" "}
        <Link to="/contact">Contact</Link> page.
      </p>

      <h2 id="scope">2. Scope of this notice</h2>
      <p>This notice applies to:</p>
      <ul>
        <li>visitors to this public website;</li>
        <li>
          people who submit an enquiry through the Contact page or the “Talk to sales”
          form; and
        </li>
        <li>people who correspond with us about a briefing or programme discussion.</li>
      </ul>
      <p>
        It does not apply to citizen data, national identity systems, payment rails, smart-city
        sensors, or other operational data processed for a government or enterprise customer.
        Those processing activities are governed by the relevant programme contract and
        applicable public-sector rules — not by this website notice.
      </p>

      <h2 id="data-we-collect">3. Data we collect</h2>
      <p>When you submit an enquiry we collect:</p>
      <ul>
        <li>full name;</li>
        <li>work email address;</li>
        <li>organisation name;</li>
        <li>area of interest (for example AI infrastructure or UAE–Africa programmes); and</li>
        <li>the message you write, including any other details you choose to include.</li>
      </ul>
      <p>
        We ask for work contact details because this site is intended for government and
        enterprise counterparts, not for consumer accounts.
      </p>
      <p>
        Your browser also sends technical data in the ordinary course of loading a website,
        such as IP address, browser type, and pages requested. We do not run advertising or
        analytics tags that profile you. Third-party services used to deliver the site may
        still see technical data, as described in section 9.
      </p>
      <p>We do not knowingly collect personal data from children under 18.</p>

      <h2 id="how-we-use">4. How we use data</h2>
      <p>We use enquiry data solely to:</p>
      <ul>
        <li>respond to your request and administer briefings;</li>
        <li>
          understand which capabilities you are interested in so we can route the enquiry;
        </li>
        <li>keep a record of business correspondence related to sovereign infrastructure
          programmes; and
        </li>
        <li>protect the security and integrity of this website.</li>
      </ul>
      <p>
        We do not sell personal data. We do not use website enquiry data to train publicly
        available AI models, and we do not use it for automated decisions that produce legal
        or similarly significant effects.
      </p>

      <h2 id="legal-basis">5. Legal basis</h2>
      <p>
        Under the UAE PDPL we process this data because it is necessary to take steps at
        your request with a view to a commercial or institutional relationship, and because
        we have a legitimate interest in responding to government and enterprise enquiries
        about our capabilities.
      </p>
      <p>
        If you include special-category or operationally sensitive information in a free-text
        field, we will treat that as inadvertently received and will handle it under the
        confidentiality expectations in our{" "}
        <Link to="/terms">Website Terms of Use</Link>. Please do not send classified,
        citizen, or national-security material through this website.
      </p>

      <h2 id="sharing">6. Sharing</h2>
      <p>We share enquiry data only as needed to handle your request:</p>
      <ul>
        <li>with AxeOra personnel responsible for briefings and programme development;</li>
        <li>
          with Mark Cables UAE, where industrial delivery, supply chain, or group support is
          relevant to assessing or responding to your enquiry; and
        </li>
        <li>
          with service providers who host this website or transmit email, acting on our
          instructions.
        </li>
      </ul>
      <p>
        We may also disclose data if required by UAE law, a competent authority, or to
        protect AxeOra’s legal rights. We do not share website enquiry data with advertising
        networks.
      </p>

      <h2 id="transfers">7. International transfers</h2>
      <p>
        AxeOra is based in the United Arab Emirates. If your enquiry concerns a UAE–Africa
        or other cross-border programme, we may correspond with partners or counterparts
        outside the UAE in order to respond. We will only do so where it is necessary for
        that correspondence.
      </p>
      <p>
        Loading this site currently involves requests to Google Fonts (to serve Host Grotesk
        and Schibsted Grotesk) and to a third-party video host for the homepage film. Those
        providers may process your IP address outside the UAE. See section 9.
      </p>

      <h2 id="retention">8. Retention</h2>
      <p>
        We keep enquiry records for as long as needed to complete the correspondence and
        for up to 24 months after last contact, unless a longer period is required for an
        active programme discussion, a legal obligation, or the establishment or defence of
        legal claims. We then delete or irreversibly anonymise the record.
      </p>

      <h2 id="cookies">9. Cookies and third-party technologies</h2>
      <p>
        This website does not use advertising, analytics, or tracking cookies, and it does
        not currently set first-party cookies for that purpose. Closing the announcement bar
        or opening the sales panel stores state only in the current browser session.
      </p>
      <p>The site does load third-party resources:</p>
      <ul>
        <li>
          Google Fonts, which may receive your IP address and user-agent when typefaces are
          fetched; and
        </li>
        <li>
          a content-delivery network used for the homepage video (currently hosted via
          Pexels).
        </li>
      </ul>
      <p>
        Those requests are made by your browser to deliver the page. They are not used by
        AxeOra to build a marketing profile. If we later add analytics or optional cookies,
        this notice will be updated and, where required, a consent mechanism will be added.
      </p>

      <h2 id="security">10. Security</h2>
      <p>
        We apply security measures appropriate to a public corporate website. No internet
        transmission is guaranteed secure. Do not use the enquiry forms for classified
        material, credentials, or citizen personal data. Programme-grade controls apply only
        under a signed delivery agreement, not to this marketing site.
      </p>

      <h2 id="rights">11. Your rights</h2>
      <p>
        Subject to the UAE PDPL and any applicable exemptions, you may request to:
      </p>
      <ul>
        <li>access the personal data we hold about you;</li>
        <li>correct inaccurate or incomplete data;</li>
        <li>erase data, or restrict or object to certain processing; and</li>
        <li>receive a copy of data you provided, where that right applies.</li>
      </ul>
      <p>
        We may need to verify your identity before fulfilling a request. Some requests can
        be declined where UAE law requires us to retain information or where another
        exemption applies.
      </p>

      <h2 id="contact">12. Contact and complaints</h2>
      <p>
        To exercise your rights or ask a privacy question, use the{" "}
        <Link to="/contact">Contact</Link> page and identify the message as a privacy
        request. We will respond using the work email you provide.
      </p>
      <p>
        If you are not satisfied with our response, you may have the right to lodge a
        complaint with the UAE Data Office, the supervisory authority established under the
        PDPL.
      </p>

      <h2 id="updates">13. Updates</h2>
      <p>
        We may update this notice to reflect changes in our site, our processing, or the
        law. The “Last updated” date at the top of this page will change when we do. The
        current version is the one published at this URL.
      </p>
    </LegalDoc>
  );
}
