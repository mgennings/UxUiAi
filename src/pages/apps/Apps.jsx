import Layout from "../../shell/Layout.jsx"
import Seo from "../../shell/Seo.jsx"
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
      <section className="doc-hero">
        <div className="container">
          <p className="kicker">experience Architects</p>
          <h1 style={{ fontSize: "2.1rem", marginTop: "10px" }}>apps</h1>
          <p className="lead" style={{ marginTop: "12px", maxWidth: "620px" }}>
            the products built along the way. each one is shipped under the same
            hand as the consultancy work, and each has its own legal home here.
          </p>
        </div>
      </section>
      <section className="section section--tight">
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
