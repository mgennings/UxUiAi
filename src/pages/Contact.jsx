import Layout from "../shell/Layout.jsx"
import Seo from "../shell/Seo.jsx"

export default function Contact() {
  return (
    <Layout>
      <Seo
        title="contact — experience Architects"
        description="get in touch with experience Architects. email matt@uxuiai.org."
      />
      <section className="doc-hero">
        <div className="container">
          <p className="kicker">experience Architects</p>
          <h1 style={{ fontSize: "2.1rem", marginTop: "10px" }}>contact</h1>
        </div>
      </section>
      <section className="section section--tight">
        <div className="container prose">
          <p className="lead">
            the best way to reach experience Architects is email. a real person
            reads everything that comes in.
          </p>
          <p style={{ marginTop: "24px" }}>
            <a className="btn btn--primary" href="mailto:matt@uxuiai.org">
              matt@uxuiai.org
            </a>
          </p>
          <p style={{ marginTop: "28px", color: "var(--ink-faint)" }}>
            for airbridge health questions specifically, the{" "}
            <a href="/apps/airbridge/support">support page</a> has answers to
            the most common ones. for consultancy engagements, the sales surface
            lives at{" "}
            <a href="https://ux-ui.ai" target="_blank" rel="noopener">
              ux-ui.ai
            </a>
            .
          </p>
        </div>
      </section>
    </Layout>
  )
}
