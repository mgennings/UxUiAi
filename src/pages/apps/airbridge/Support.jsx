import Layout from "../../../shell/Layout.jsx"
import Seo from "../../../shell/Seo.jsx"
import { Link } from "../../../router/router.jsx"

const faqs = [
  {
    q: "how do I connect my Fitbit?",
    a: "airbridge connects to your Fitbit data through Google Health, not the old Fitbit app. open airbridge, tap connect, and sign in with the Google account your Fitbit is linked to. airbridge requests read-only access to your activity, heart rate, sleep, and body measurements, then mirrors that data into Apple Health on your iPhone.",
  },
  {
    q: "what data does airbridge sync?",
    a: "steps and activity, heart rate, sleep, and body measurements from Google Health, written into Apple Health and attributed to their source. airbridge Pro also brings over the richer signals Google won't sync to Apple Health natively — like HRV, detailed sleep stages, and the Fitbit Air completion pack — so your record is complete.",
  },
  {
    q: "do you store my data?",
    a: "no. all health data is processed on your iPhone and is never sent to a server we control. we have no analytics, no tracking, and no account system. your Google refresh token stays in the iOS Keychain on your device. for the full picture, read the privacy policy.",
  },
  {
    q: "how do I cancel airbridge Pro?",
    a: "airbridge Pro is billed through Apple, so you cancel it in your Apple Account: open Settings, tap your name, tap Subscriptions, choose airbridge, and turn off auto-renewal. you keep Pro access until the end of the current period. lifetime purchases are one-time and have nothing to cancel.",
  },
  {
    q: "what is airbridge Pro?",
    a: "airbridge is free forever for today's data — open it and see today's steps, sleep, and heart rate in Apple Health, with no signup. Pro unlocks a 30-day backfill, always-on background sync, and the complete-data pack (HRV, sleep stages, and provenance Google won't sync natively).",
  },
  {
    q: "why is my sync slow?",
    a: "the first sync after connecting, and any large backfill, takes longer because airbridge is pulling and writing a lot of history at once. it also depends on Google Health having finished importing your latest Fitbit data, and on iOS scheduling background work when your phone is unlocked and on Wi-Fi. leave airbridge open for the first run, and later syncs will be quick and incremental.",
  },
  {
    q: "what about the September 2026 Fitbit Web API sunset?",
    a: "Google is retiring the old Fitbit Web API in September 2026 and moving everything to Google Health. airbridge already reads from Google Health, not the legacy Fitbit API, so it is built for what comes after the sunset rather than what came before it. you do not need to do anything differently — the bridge keeps working.",
  },
]

export default function AirbridgeSupport() {
  return (
    <Layout>
      <Seo
        title="airbridge health — support"
        description="having trouble with airbridge health? email matt@uxuiai.org. answers to common questions about Fitbit, Google Health, syncing, airbridge Pro, and the September 2026 Fitbit Web API sunset."
      />
      <section className="doc-hero">
        <div className="container">
          <p className="kicker">airbridge health</p>
          <h1 style={{ fontSize: "2.1rem", marginTop: "10px" }}>support</h1>
          <p className="lead" style={{ marginTop: "14px", maxWidth: "620px" }}>
            having trouble? the fastest way to get help is to email{" "}
            <a href="mailto:matt@uxuiai.org">matt@uxuiai.org</a> — a real person
            reads every message.
          </p>
          <div
            style={{
              marginTop: "22px",
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <a
              className="btn btn--primary"
              href="mailto:matt@uxuiai.org?subject=airbridge%20support"
            >
              email support
            </a>
            <Link className="btn btn--ghost" to="/apps/airbridge">
              back to airbridge
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container prose">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>
            common questions
          </h2>
          <div>
            {faqs.map((f) => (
              <div className="faq-item" key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: "32px", color: "var(--ink-faint)" }}>
            still stuck? email{" "}
            <a href="mailto:matt@uxuiai.org">matt@uxuiai.org</a>. you can also
            read the <Link to="/apps/airbridge/privacy">privacy policy</Link> or
            the <Link to="/apps/airbridge/terms">terms of service</Link>.
          </p>
        </div>
      </section>
    </Layout>
  )
}
