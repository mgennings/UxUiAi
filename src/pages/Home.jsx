import Layout from "../shell/Layout.jsx"
import Seo from "../shell/Seo.jsx"
import Symbol from "../shell/Symbol.jsx"
import PlasmaCanvas from "../shell/PlasmaCanvas.jsx"
import { Link } from "../router/router.jsx"

export default function Home() {
  return (
    <Layout>
      <Seo
        title="experience Architects — product design, engineering, and the apps built along the way"
        description="experience Architects is the studio of Matt Gennings: AI-native product design and engineering, plus the home for the apps shipped along the way, including AirBridge Health and undertext."
      />

      {/* hero — the one place on the shell that gets the plasma */}
      <section className="hub-hero" aria-label="intro">
        <PlasmaCanvas className="hub-hero__canvas" />
        <div className="hub-hero__veil" aria-hidden="true" />
        <div className="container hub-hero__inner">
          <Symbol fill="plasma" className="hub-hero__symbol" />
          <h1>
            interfaces that think,{" "}
            <span className="hub-plasma-text">and the apps that prove it</span>
          </h1>
          <p className="lead">
            experience Architects is the studio of Matt Gennings — product
            design and engineering for the convergence of UX, UI, and AI, and
            the home for the apps built along the way.
          </p>
          <div className="hub-hero__cta">
            <Link className="btn btn--primary" to="/work">
              see the work
            </Link>
            <Link
              className="btn btn--ghost"
              to="/apps"
              style={{
                color: "var(--night-text)",
                borderColor: "rgba(255,255,255,0.25)",
              }}
            >
              browse the apps
            </Link>
          </div>
        </div>
      </section>

      {/* intro band */}
      <section className="intro-band">
        <div className="container">
          <p className="kicker">the studio</p>
          <p className="lead" style={{ marginTop: "12px" }}>
            two surfaces, one practice. the consultancy ships client work as
            experience Architects; the products are shipped under the same hand.
            this is the one-stop home for both — the work, the apps, and the
            legal ground they stand on.
          </p>
        </div>
      </section>

      {/* featured work */}
      <section className="hub-section">
        <div className="container">
          <div className="hub-section__head">
            <h2>featured</h2>
            <Link to="/apps">all apps →</Link>
          </div>
          <div className="feature-grid">
            <a
              className="feature-card"
              href="https://airbridgehealth.com"
              target="_blank"
              rel="noopener"
            >
              <span className="tag">app · iOS</span>
              <h3>AirBridge Health</h3>
              <p>
                the bridge between your Fitbit and Apple Health. on-device,
                private, and built on the new Google Health API ahead of the
                September 2026 Fitbit Web API retirement.
              </p>
              <span className="more">visit site →</span>
            </a>
            <Link className="feature-card" to="/apps">
              <span className="tag">app · writing</span>
              <h3>undertext</h3>
              <p>
                a quieter way to write — surfacing the text beneath the text.
                part of the experience Architects app family.
              </p>
              <span className="more">view apps →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* manifesto pointer */}
      <section className="section section--dark">
        <div className="container prose">
          <p className="kicker" style={{ color: "var(--plasma-cyan)" }}>
            the idea
          </p>
          <h2 style={{ marginTop: "10px", fontSize: "1.6rem" }}>
            the interface is dreaming
          </h2>
          <p
            className="lead"
            style={{ color: "var(--night-dim)", marginTop: "10px" }}
          >
            before the work and the apps, there was the manifesto — a WebGL
            piece on the convergence of UX, UI, and AI. it still lives here.
          </p>
          <p style={{ marginTop: "18px" }}>
            <Link to="/manifesto" style={{ color: "var(--plasma-cyan)" }}>
              enter the manifesto →
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  )
}
