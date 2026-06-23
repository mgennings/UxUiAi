import DocPage from "../../shell/DocPage.jsx"
import { Link } from "../../router/router.jsx"

const toc = [
  { id: "scope", label: "scope" },
  { id: "principle", label: "our principle" },
  { id: "what", label: "what we collect" },
  { id: "apps", label: "per-app policies" },
  { id: "website", label: "this website" },
  { id: "contact", label: "contact" },
]

export default function OrgPrivacy() {
  return (
    <DocPage
      kicker="experience Architects"
      title="privacy policy"
      effective="June 23, 2026"
      updated="June 23, 2026"
      toc={toc}
      seoTitle="experience Architects — privacy policy"
      seoDescription="the organization-wide privacy policy for experience Architects and its apps."
    >
      <h2 id="scope">scope</h2>
      <p>
        this is the organization-wide privacy policy for experience Architects,
        the studio of Matt Gennings. it covers this website and serves as the
        baseline for the apps we ship. where an app has its own policy, that
        policy governs that app.
      </p>

      <h2 id="principle">our principle</h2>
      <p>
        we design for privacy first. our apps are built to process data
        on-device wherever possible, and we avoid analytics SDKs, third-party
        trackers, and advertising identifiers across the board. we do not sell
        personal data — we generally do not collect it.
      </p>

      <h2 id="what">what we collect</h2>
      <p>
        experience Architects has no account system across its products and does
        not maintain a central profile of you. if you email us, we receive your
        message and email address so we can reply, and nothing more.
      </p>

      <h2 id="apps">per-app policies</h2>
      <p>
        each app states exactly how it handles data. the airbridge health policy
        is the canonical example — read it for the full data flow:
      </p>
      <ul>
        <li>
          <Link to="/apps/airbridge/privacy">
            airbridge health privacy policy
          </Link>
        </li>
      </ul>

      <h2 id="website">this website</h2>
      <p>
        uxuiai.org may use privacy-respecting, aggregate analytics to understand
        traffic. it does not build advertising profiles. the site is static and
        does not require an account.
      </p>

      <h2 id="contact">contact</h2>
      <p>
        privacy questions can go to{" "}
        <a href="mailto:matt@uxuiai.org">matt@uxuiai.org</a>. see also the{" "}
        <Link to="/legal/terms">terms of service</Link>.
      </p>
    </DocPage>
  )
}
