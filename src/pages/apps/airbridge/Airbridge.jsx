import Layout from "../../../shell/Layout.jsx"
import Seo from "../../../shell/Seo.jsx"
import { Link } from "../../../router/router.jsx"

const APP_STORE_URL = "https://apps.apple.com/us/app/id6783452784"

const features = [
  {
    color: "#7b2fff",
    title: "bidirectional sync",
    body: "airbridge reads your Fitbit data from Google Health and writes it into Apple Health on your iPhone, attributed clearly to its source. background delivery keeps it current without you opening the app.",
  },
  {
    color: "#ff006e",
    title: "complete data",
    body: "Pro brings over the signals Google won't sync to Apple Health natively — HRV, detailed sleep stages, and provenance — plus the Fitbit Air completion pack. your record arrives whole, not flattened.",
  },
  {
    color: "#39ff14",
    title: "private by design",
    body: "everything is processed on-device. no analytics, no tracking, no server storing your health data. your Google token lives in the iOS Keychain and never leaves your phone.",
  },
]

const faqs = [
  {
    q: "do I still need the Fitbit app?",
    a: "no. airbridge reads your data through Google Health, which is where Fitbit data lives going forward.",
  },
  {
    q: "what happens after the Fitbit Web API sunset in September 2026?",
    a: "airbridge already reads from Google Health, not the legacy Fitbit Web API, so it keeps working through and after the sunset.",
  },
  {
    q: "is my data sent anywhere?",
    a: "no. all health data is processed on your iPhone and never sent to a server we control. read the privacy policy for the full data flow.",
  },
]

export default function Airbridge() {
  return (
    <Layout>
      <Seo
        title="airbridge health — your Fitbit data, finally in Apple Health"
        description="airbridge health is the bridge between your Fitbit and Apple Health. on-device, private, and built for Google Health after the September 2026 Fitbit Web API sunset."
      />

      {/* hero */}
      <section className="ab-hero">
        <div className="container ab-hero__inner">
          <div>
            <p className="kicker">airbridge health</p>
            <h1>your Fitbit data, finally in Apple Health</h1>
            <p className="lead">
              airbridge is the bridge between your Fitbit and Apple Health.
              every step belongs in one place — and now it lives there, mirrored
              on your iPhone, private by design.
            </p>
            <div className="ab-cta-row">
              <a
                className="btn btn--appstore"
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener"
              >
                download on the App Store
              </a>
              <Link
                className="btn btn--ghost"
                to="/apps/airbridge/support"
                style={{
                  color: "var(--night-text)",
                  borderColor: "rgba(255,255,255,0.25)",
                }}
              >
                support
              </Link>
            </div>
            <p className="ab-price-note">
              free forever for today's data · airbridge Pro unlocks backfill and
              background sync
            </p>
          </div>
          <div
            className="ab-shot"
            role="img"
            aria-label="airbridge health app screenshot placeholder"
          >
            <span>app screenshots coming soon</span>
          </div>
        </div>
      </section>

      {/* features */}
      <section className="ab-features">
        <div className="container">
          <div className="card-grid">
            {features.map((f) => (
              <article className="card ab-feature" key={f.title}>
                <h3>
                  <span className="dot" style={{ background: f.color }} />
                  {f.title}
                </h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* pricing */}
      <section className="ab-pricing">
        <div className="container">
          <p className="kicker">pricing</p>
          <h2 style={{ fontSize: "1.7rem", marginTop: "8px" }}>
            free to start, Pro when you want the whole record
          </h2>
          <p className="lead" style={{ maxWidth: "600px", marginTop: "10px" }}>
            airbridge is free forever for today's data. airbridge Pro adds a
            30-day backfill, always-on background sync, and the complete-data
            pack.
          </p>
          <div className="price-grid">
            <div className="price-card">
              <p className="tier">monthly</p>
              <p className="amount">
                $2.99 <small>/ month</small>
              </p>
              <p className="price-foot">cancel anytime in Apple settings</p>
            </div>
            <div className="price-card price-card--featured">
              <span className="price-badge">save 44%</span>
              <p className="tier">yearly</p>
              <p className="amount">
                $19.99 <small>/ year</small>
              </p>
              <p className="price-foot">about $1.67 / month, billed yearly</p>
            </div>
            <div className="price-card">
              <span className="price-badge">one-time, forever</span>
              <p className="tier">lifetime</p>
              <p className="amount">
                $49.99 <small>once</small>
              </p>
              <p className="price-foot">pay once, keep Pro for good</p>
            </div>
          </div>
          <p className="price-foot" style={{ marginTop: "20px" }}>
            intro pricing — first 30 days. matt's reviewing the long-term price.
            the exact price always appears in the app at purchase, billed
            through Apple.
          </p>
        </div>
      </section>

      {/* faq */}
      <section className="section section--tight">
        <div className="container prose">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>questions</h2>
          {faqs.map((f) => (
            <div className="faq-item" key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
          <p style={{ marginTop: "28px", color: "var(--ink-faint)" }}>
            more answers on the{" "}
            <Link to="/apps/airbridge/support">support page</Link>. read the{" "}
            <Link to="/apps/airbridge/privacy">privacy policy</Link> and{" "}
            <Link to="/apps/airbridge/terms">terms of service</Link>.
          </p>
        </div>
      </section>
    </Layout>
  )
}
