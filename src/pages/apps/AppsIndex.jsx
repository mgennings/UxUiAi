import Layout from "../../shell/Layout.jsx"
import Seo from "../../shell/Seo.jsx"
import { Link } from "../../router/router.jsx"
import { APPS } from "./AppPage.jsx"

/* /apps — the apps index. a focused header + a card per shipping app, each
   routing into its own /apps/<id> page. distinct from home (which leads with
   the constellation hero); this is the plain "all apps" list. */
const ORDER = ["airbridge", "undertext"]

const TAGLINE = {
  airbridge:
    "the bridge between your Fitbit and Apple Health. on-device, private, built for the world after the September 2026 Fitbit Web API retirement.",
  undertext:
    "a quieter way to read scripture — sit with the language beneath the verse. word study, original-language roots, and a still place to read.",
}

export default function AppsIndex() {
  return (
    <Layout>
      <Seo
        title="apps — experience Architects"
        description="the apps shipped by experience Architects: AirBridge Health and undertext. each private, on-device, and built with intent."
      />

      <section className="apps-index">
        <div className="container">
          <header className="apps-index__head">
            <p className="kicker">experience Architects</p>
            <h1>apps</h1>
            <p className="lead">
              the products shipped along the way — each built and maintained
              under the same hand, each with its own home.
            </p>
          </header>

          <div className="feature-grid">
            {ORDER.map((id) => {
              const app = APPS[id]
              return (
                <Link className="feature-card" to={`/apps/${id}`} key={id}>
                  <span className="tag">{app.tag} · shipping</span>
                  <h3>{app.name}</h3>
                  <p>{TAGLINE[id]}</p>
                  <span className="more">explore →</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}
