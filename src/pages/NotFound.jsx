import Layout from "../shell/Layout.jsx"
import Seo from "../shell/Seo.jsx"
import { Link } from "../router/router.jsx"

export default function NotFound() {
  return (
    <Layout>
      <Seo title="not found — experience Architects" />
      <section className="section">
        <div className="container prose">
          <p className="kicker">404</p>
          <h1 style={{ fontSize: "2rem", marginTop: "10px" }}>nothing here</h1>
          <p className="lead" style={{ marginTop: "12px" }}>
            this page does not exist. try the <Link to="/">apps</Link> or the{" "}
            <Link to="/manifesto">manifesto</Link>.
          </p>
        </div>
      </section>
    </Layout>
  )
}
