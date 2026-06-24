import Layout from "../../shell/Layout.jsx"
import Seo from "../../shell/Seo.jsx"
import Symbol from "../../shell/Symbol.jsx"
import { Link } from "../../router/router.jsx"

const apps = [
  {
    to: "https://airbridgehealth.com",
    external: true,
    tag: "iOS · health",
    name: "AirBridge Health",
    blurb:
      "the bridge between your Fitbit and Apple Health. reads from Google Health, writes to Apple Health, all on-device. built for the world after the September 2026 Fitbit Web API retirement.",
    status: "shipping",
  },
  {
    to: "/apps",
    tag: "writing",
    name: "undertext",
    blurb:
      "a quieter way to write — surfacing the text beneath the text. more soon.",
    status: "in progress",
  },
]

export default function Apps() {
  return (
    <Layout>
      <Seo
        title="apps — experience Architects"
        description="the apps shipped by experience Architects, including AirBridge Health and undertext."
      />

      {/* hero — a real showcase, not a doc header. asymmetric split:
         the statement on the left, the apps themselves on the right. */}
      <section className="apps-hero" aria-label="apps intro" data-reveal>
        {/* ambient plasma glow — pure CSS, dims in dark mode. the hero
           reads complete with no WebGL; the shader is reserved for the
           manifesto. */}
        <div className="apps-hero__glow" aria-hidden="true" />

        <div className="container apps-hero__inner">
          <div className="apps-hero__copy">
            <p className="kicker">experience Architects · apps</p>
            <h1 className="apps-hero__title">
              <span className="apps-hero__line">the products</span>
              <span className="apps-hero__line">
                that <span className="plasma-text">prove the idea</span>.
              </span>
            </h1>
            <p className="lead apps-hero__lead">
              interfaces that think aren't a thesis here — they ship. each one
              is built and maintained under the same hand as the consultancy
              work, and each keeps its legal home on this site.
            </p>
            <div className="apps-hero__cta">
              <a
                className="btn btn--primary"
                href="https://airbridgehealth.com"
                target="_blank"
                rel="noopener"
              >
                visit AirBridge Health
              </a>
              <a className="btn btn--ghost" href="#catalog">
                browse the catalog
              </a>
            </div>
          </div>

          {/* constellation — the shipping app, framed and theme-aware,
             with the next one floating behind it at depth. */}
          <div className="apps-hero__stage" aria-hidden="true">
            <figure className="apps-hero__device">
              <img
                className="apps-hero__shot is-light"
                src="/images/app-screens/onboarding-light-framed.webp"
                alt=""
                loading="eager"
                width="340"
                height="694"
              />
              <img
                className="apps-hero__shot is-dark"
                src="/images/app-screens/onboarding-dark-framed.webp"
                alt=""
                loading="eager"
                width="340"
                height="694"
              />
            </figure>

            <div className="apps-hero__chip apps-hero__chip--undertext">
              <Symbol fill="plasma" className="apps-hero__chip-mark" />
              <div>
                <p className="apps-hero__chip-name">undertext</p>
                <p className="apps-hero__chip-meta">writing · soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* the catalog */}
      <section id="catalog" className="section section--tight">
        <div className="container">
          <div className="feature-grid">
            {apps.map((a) => {
              const inner = (
                <>
                  <span className="tag">
                    {a.tag} · {a.status}
                  </span>
                  <h3>{a.name}</h3>
                  <p>{a.blurb}</p>
                  <span className="more">
                    {a.external
                      ? "visit site →"
                      : a.to === "/apps"
                        ? "coming soon"
                        : "view product →"}
                  </span>
                </>
              )
              if (a.external) {
                return (
                  <a
                    className="feature-card"
                    href={a.to}
                    key={a.name}
                    target="_blank"
                    rel="noopener"
                  >
                    {inner}
                  </a>
                )
              }
              return (
                <Link className="feature-card" to={a.to} key={a.name}>
                  {inner}
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}
