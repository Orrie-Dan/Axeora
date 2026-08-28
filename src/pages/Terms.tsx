import { Link } from "react-router-dom";
import LegalDoc from "../components/LegalDoc";

const toc = [
  ["about", "About these terms"],
  ["who-we-are", "Who we are"],
  ["no-offer", "Informational use only"],
  ["programmes", "Programme contracts"],
  ["licence", "Licence and acceptable use"],
  ["ip", "Intellectual property"],
  ["enquiries", "Enquiries and confidentiality"],
  ["third-parties", "Third-party content"],
  ["disclaimer", "Disclaimer"],
  ["liability", "Limitation of liability"],
  ["changes", "Changes"],
  ["law", "Governing law"],
  ["contact", "Contact"],
] as const;

export default function Terms() {
  return (
    <LegalDoc title="Website Terms of Use">
      <nav className="legal-toc" aria-label="Website Terms of Use contents">
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
        These Website Terms of Use govern access to this public site. They are not the
        contract for a national programme, tender, or professional engagement. By using the
        site you accept them. If you do not, please do not use the site.
      </p>
      <p>
        Personal data submitted through the site is handled under our{" "}
        <Link to="/privacy">Privacy Notice</Link>.
      </p>

      <h2 id="about">1. About these terms</h2>
      <p>
        This website describes AxeOra UAE capabilities for informational purposes. It is a
        corporate brochure site. It is not a hosted platform, citizen portal, or
        software-as-a-service product, and these terms are not a “service” subscription.
      </p>

      <h2 id="who-we-are">2. Who we are</h2>
      <p>
        The site is operated by AxeOra UAE, an Emirati technology company based in the
        United Arab Emirates (“AxeOra”, “we”, “us”), supported by Mark Cables UAE. A
        registered office address will be provided on request through the{" "}
        <Link to="/contact">Contact</Link> page.
      </p>

      <h2 id="no-offer">3. Informational use only</h2>
      <p>
        Nothing on this website constitutes an offer, invitation to treat, tender, or
        contractual commitment. Capability descriptions, case-style narratives, and
        geographic references are illustrative. They do not represent a warranty of
        current deployment in any named country, nor a promise of performance, funding, or
        delivery.
      </p>
      <p>
        Requests for proposals, memoranda of understanding, and similar instruments must
        follow a formal process. Website copy cannot be relied on as a bid, specification,
        or statement of work.
      </p>

      <h2 id="programmes">4. Programme contracts</h2>
      <p>
        National and enterprise programmes are scoped under separate written agreements.
        Those may include public–private partnership (PPP) and Build-Operate-Transfer (BOT)
        frameworks, technology-transfer provisions, and security schedules, as applicable.
      </p>
      <p>
        If there is any conflict between these website terms and a signed programme
        agreement, the signed agreement prevails for that programme. These terms continue
        to govern use of this public website.
      </p>

      <h2 id="licence">5. Licence and acceptable use</h2>
      <p>
        We grant you a limited, revocable, non-exclusive licence to view this site for
        lawful information purposes, including internal evaluation by a government or
        enterprise counterpart. You may not:
      </p>
      <ul>
        <li>copy, scrape, or republish substantial parts of the site for a competing bid
          or commercial offering without our prior written consent;
        </li>
        <li>remove proprietary notices, or present AxeOra materials as your own;</li>
        <li>
          attempt to probe, disrupt, or gain unauthorised access to the site or related
          systems;
        </li>
        <li>
          use the site in a way that would violate applicable export-control, sanctions,
          or national-security laws; or
        </li>
        <li>
          submit unlawful, defamatory, or operationally sensitive content through the
          forms.
        </li>
      </ul>

      <h2 id="ip">6. Intellectual property</h2>
      <p>
        The site, including text, layout, graphics, photographs, video, and the AxeOra
        name and marks, is owned by AxeOra or its licensors. Mark Cables UAE marks remain
        the property of their owner. Nothing on the site grants a licence to product
        designs, architectures, source code, or delivery methodologies except the limited
        viewing licence above.
      </p>
      <p>
        Stock photography and the homepage video may be licensed from third parties and
        remain subject to those licences.
      </p>

      <h2 id="enquiries">7. Enquiries and confidentiality</h2>
      <p>
        You may send a briefing request through the Contact page or the “Talk to sales”
        form. You agree that:
      </p>
      <ul>
        <li>
          the form is for high-level programme interest, not for classified, restricted,
          citizen, or operationally sensitive data;
        </li>
        <li>
          we will treat bona fide government and enterprise enquiries with professional
          confidentiality appropriate to a pre-contract discussion; and
        </li>
        <li>
          a non-disclosure agreement, if required, will be a separate document. Submitting
          the website form does not create an NDA.
        </li>
      </ul>
      <p>
        If you send material that should not have been submitted through a public form, we
        may delete it and ask you to use an agreed secure channel.
      </p>

      <h2 id="third-parties">8. Third-party content</h2>
      <p>
        The site may link to third-party sites or load third-party resources (including
        fonts and video). We are not responsible for their content, availability, or
        privacy practices. Those resources are governed by their own terms.
      </p>

      <h2 id="disclaimer">9. Disclaimer</h2>
      <p>
        The site is provided “as is”. We do not warrant that it is complete, current,
        error-free, or suitable for a particular decision. Capability statements are
        general and may change. You are responsible for independent evaluation and for
        any decision made on the basis of information on this site.
      </p>

      <h2 id="liability">10. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by UAE law, AxeOra and Mark Cables UAE are not
        liable for indirect, consequential, special, or incidental loss arising from use
        of this website, including loss of profit, data, opportunity, or reputation, and
        whether in contract, tort (including negligence), or otherwise.
      </p>
      <p>
        Our aggregate liability arising from use of this website is limited to AED 1,000.
        This cap applies only to website use. It does not limit liability under a signed
        programme agreement, which will contain its own liability terms. Nothing in these
        terms excludes liability that cannot be excluded under UAE law.
      </p>

      <h2 id="changes">11. Changes</h2>
      <p>
        We may change these terms or the site at any time. The “Last updated” date at the
        top of this page will change when the terms are revised. Continued use of the
        site after a change constitutes acceptance of the revised terms.
      </p>

      <h2 id="law">12. Governing law</h2>
      <p>
        These terms are governed by the laws of the United Arab Emirates. The courts of
        Dubai, United Arab Emirates, have exclusive jurisdiction over disputes arising
        from use of this website, without prejudice to any jurisdiction or dispute-resolution
        clause in a separate programme agreement.
      </p>

      <h2 id="contact">13. Contact</h2>
      <p>
        Questions about these terms can be sent through the{" "}
        <Link to="/contact">Contact</Link> page. For how we handle personal data, see the{" "}
        <Link to="/privacy">Privacy Notice</Link>.
      </p>
    </LegalDoc>
  );
}
