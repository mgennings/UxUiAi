import Layout from "../shell/Layout.jsx"
import Seo from "../shell/Seo.jsx"
import { Link } from "../router/router.jsx"

const engagements = [
  {
    tag: "product · engineering",
    name: "AI-native product acceleration",
    blurb:
      "design and front-end engineering for teams shipping AI into real interfaces — from prototype to production, with an eye on what the interface should feel like, not just what it can do.",
  },
  {
    tag: "design systems",
    name: "interface systems",
    blurb:
      "component libraries, motion language, and the connective tissue that lets a product feel coherent as it grows.",
  },
  {
    tag: "0 → 1",
    name: "shipped products",
    blurb:
      "the apps in the apps index are the proof — products taken from idea to App Store under the experience Architects practice.",
  },
]

export default function Work() {
  return (
    <Layout>
      <Seo
        title="work — experience Architects"
        description="consultancy work by experience Architects: AI-native product design and engineering, design systems, and shipped products."
      />
      <section className="doc-hero">
        <div className="container">
          <p className="kicker">experience Architects</p>
          <h1 style={{ fontSize: "2.1rem", marginTop: "10px" }}>work</h1>
          <p className="lead" style={{ marginTop: "12px", maxWidth: "640px" }}>
            product design and engineering for the convergence of UX, UI, and
            AI. the consultancy surface, and the case it makes, lives at{" "}
            <a href="https://ux-ui.ai" target="_blank" rel="noopener">
              ux-ui.ai
            </a>
            .
          </p>
        </div>
      </section>
      <section className="section section--tight">
        <div className="container">
          <div className="card-grid">
            {engagements.map((e) => (
              <article className="card" key={e.name}>
                <span className="kicker">{e.tag}</span>
                <h3 style={{ marginTop: "8px" }}>{e.name}</h3>
                <p>{e.blurb}</p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "32px" }}>
            want to talk about an engagement?{" "}
            <Link to="/contact">get in touch →</Link>
          </p>
        </div>
      </section>
    </Layout>
  )
}
