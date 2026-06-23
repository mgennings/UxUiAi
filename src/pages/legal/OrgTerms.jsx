import DocPage from "../../shell/DocPage.jsx"
import { Link } from "../../router/router.jsx"

const toc = [
  { id: "scope", label: "scope" },
  { id: "use", label: "use of this site" },
  { id: "ip", label: "intellectual property" },
  { id: "apps", label: "per-app terms" },
  { id: "warranties", label: "disclaimer" },
  { id: "law", label: "governing law" },
  { id: "contact", label: "contact" },
]

export default function OrgTerms() {
  return (
    <DocPage
      kicker="experience Architects"
      title="terms of service"
      effective="June 23, 2026"
      updated="June 23, 2026"
      toc={toc}
      seoTitle="experience Architects — terms of service"
      seoDescription="the organization-wide terms of service for experience Architects and this website."
    >
      <h2 id="scope">scope</h2>
      <p>
        these terms govern your use of uxuiai.org, the website of experience
        Architects, the studio of Matt Gennings. apps we ship have their own
        terms, which govern those apps.
      </p>

      <h2 id="use">use of this site</h2>
      <p>
        you may browse and read this site for personal, informational purposes.
        do not misuse the site, attempt to disrupt it, or use it in violation of
        applicable law.
      </p>

      <h2 id="ip">intellectual property</h2>
      <p>
        the experience Architects name, symbol, wordmark, and the content of
        this site are owned by experience Architects unless otherwise noted. you
        may not reproduce the branding without permission.
      </p>

      <h2 id="apps">per-app terms</h2>
      <p>
        each app has its own terms of service. for airbridge health, see the{" "}
        <Link to="/apps/airbridge/terms">
          airbridge health terms of service
        </Link>
        .
      </p>

      <h2 id="warranties">disclaimer</h2>
      <p>
        this site is provided "as is," without warranties of any kind. we do not
        warrant that it will be uninterrupted or error-free.
      </p>

      <h2 id="law">governing law</h2>
      <p>
        these terms are governed by the laws of the state of Texas, without
        regard to its conflict-of-laws rules.
      </p>

      <h2 id="contact">contact</h2>
      <p>
        questions can go to <a href="mailto:matt@uxuiai.org">matt@uxuiai.org</a>
        . see also the <Link to="/legal/privacy">privacy policy</Link>.
      </p>
    </DocPage>
  )
}
