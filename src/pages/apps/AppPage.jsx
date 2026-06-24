import Layout from "../../shell/Layout.jsx"
import Seo from "../../shell/Seo.jsx"
import { Link } from "../../router/router.jsx"

/* ================================================
   APP PAGE — one reusable, data-driven page per app.
   each app gets its own route (/apps/<id>) rendering this with its record
   from APPS below: a dedicated hero, feature beats, a screenshot rail, and
   a closing CTA out to the app's own site + the App Store.

   to add an app: drop a record in APPS, add one <Route> in App.jsx. that's
   the whole scale path.
   ================================================ */
export const APPS = {
  airbridge: {
    id: "airbridge",
    name: "AirBridge Health",
    tag: "iOS · health",
    site: "https://airbridgehealth.com",
    appStore: "https://apps.apple.com/us/app/id6783452784",
    seoDesc:
      "AirBridge Health — private, on-device Fitbit-to-Apple-Health sync, built on the new Google Health API ahead of the September 2026 Fitbit Web API retirement.",
    // hero
    heroLine: "your Fitbit data,",
    heroAccent: "finally in Apple Health",
    heroSub:
      "the bridge between your Fitbit and Apple Health — rebuilt on the new Google Health API ahead of the September 2026 Fitbit Web API retirement. on-device, private, and quietly out of your way.",
    heroShot: {
      light: "/images/app-screens/onboarding-light-framed.webp",
      dark: "/images/app-screens/onboarding-dark-framed.webp",
    },
    features: [
      {
        title: "bidirectional sync",
        body: "reads from Google Health, writes to Apple HealthKit. background delivery keeps it current without opening the app.",
      },
      {
        title: "the whole record",
        body: "Pro brings over what Google won't sync natively — HRV, detailed sleep stages, provenance. your history arrives whole, not flattened.",
      },
      {
        title: "private by design",
        body: "everything is processed on-device. no analytics, no tracking, no server holding your health data; your token lives in the iOS Keychain.",
      },
    ],
    rail: [
      {
        src: "/images/app-screens/onboarding-light-framed.webp",
        dark: "/images/app-screens/onboarding-dark-framed.webp",
      },
      {
        src: "/images/app-screens/sync-pro-light-framed.webp",
        dark: "/images/app-screens/sync-pro-dark-framed.webp",
      },
    ],
  },
  undertext: {
    id: "undertext",
    name: "undertext",
    tag: "iOS · reading",
    site: "https://undertext.org",
    appStore: "https://apps.apple.com/us/app/undertext-bible/id6778455656",
    seoDesc:
      "undertext — a quieter way to read scripture. original-language roots in Hebrew, Greek, and the Aramaic Peshitta, word study, and a still place to read.",
    heroLine: "sit with the language",
    heroAccent: "beneath the verse",
    heroSub:
      "a quieter way to read scripture. not a translation — the Hebrew, Greek, and Aramaic Peshitta under the text, held one word at a time, in a still place to read.",
    heroShot: {
      light: "/images/app-screens/undertext-reader-framed.png",
      dark: "/images/app-screens/undertext-reader-dark-framed.png",
    },
    features: [
      {
        title: "original-language roots",
        body: "every verse opens to its Hebrew, Greek, and Aramaic Peshitta words, with transliteration and meaning, word by word.",
      },
      {
        title: "word study",
        body: "tap any term to follow its root and sense across the passage — the connective tissue most readers never see.",
      },
      {
        title: "a still place",
        body: "no feed, no noise, no streak pressure. a 'be still' mode and a calm, paper-warm interface in light and dark.",
      },
    ],
    rail: [
      { src: "/images/app-screens/undertext-reader-framed.png" },
      { src: "/images/app-screens/undertext-word-study-framed.png" },
      { src: "/images/app-screens/undertext-be-still-framed.png" },
    ],
  },
}

export default function AppPage({ app }) {
  return (
    <Layout>
      <Seo
        title={`${app.name} — experience Architects`}
        description={app.seoDesc}
      />

      {/* per-app hero — same split + plasma DNA as the home hero, but the
         statement and the device are this app's own. */}
      <section
        className="apps-hero apps-hero--app"
        aria-label={`${app.name} intro`}
        data-reveal
      >
        <div className="apps-hero__glow" aria-hidden="true" />

        <div className="container apps-hero__inner">
          <div className="apps-hero__copy">
            <nav className="app-back" aria-label="breadcrumb">
              <Link to="/apps" aria-label="back to all apps">
                <span aria-hidden="true">←</span> all apps
              </Link>
            </nav>
            <p className="kicker">{app.tag} · shipping</p>
            <h1 className="apps-hero__title">
              <span className="apps-hero__line">{app.heroLine}</span>
              <span className="apps-hero__line">
                <span className="plasma-text">{app.heroAccent}</span>.
              </span>
            </h1>
            <p className="lead apps-hero__lead">{app.heroSub}</p>
            <div className="apps-hero__cta">
              <a
                className="btn btn--primary"
                href={app.site}
                target="_blank"
                rel="noopener"
              >
                visit site ↗
              </a>
              <a
                className="btn btn--appstore"
                href={app.appStore}
                target="_blank"
                rel="noopener"
              >
                App Store ↗
              </a>
            </div>
          </div>

          {/* single hero device, theme-aware */}
          <div
            className="apps-hero__stage apps-hero__stage--solo"
            aria-hidden="true"
          >
            <figure className="apps-hero__device apps-hero__device--solo">
              <img
                className="apps-hero__shot is-light"
                src={app.heroShot.light}
                alt=""
                loading="eager"
              />
              <img
                className="apps-hero__shot is-dark"
                src={app.heroShot.dark}
                alt=""
                loading="eager"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* features */}
      <section className="app-features">
        <div className="container">
          <ul className="app-features__grid">
            {app.features.map((f) => (
              <li className="app-feature" key={f.title}>
                <h2>{f.title}</h2>
                <p>{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* screenshot rail */}
      <section className="app-rail">
        <div className="container">
          <div className="app-rail__track">
            {app.rail.map((s, i) => (
              <figure className="app-rail__shot" key={i}>
                <img
                  className={s.dark ? "apps-hero__shot is-light" : undefined}
                  src={s.src}
                  alt=""
                  loading="lazy"
                />
                {s.dark && (
                  <img
                    className="apps-hero__shot is-dark"
                    src={s.dark}
                    alt=""
                    loading="lazy"
                  />
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* closing CTA */}
      <section className="app-cta">
        <div className="container app-cta__inner">
          <h2>get {app.name}</h2>
          <div className="apps-hero__cta">
            <a
              className="btn btn--primary"
              href={app.site}
              target="_blank"
              rel="noopener"
            >
              visit site ↗
            </a>
            <a
              className="btn btn--appstore"
              href={app.appStore}
              target="_blank"
              rel="noopener"
            >
              App Store ↗
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
