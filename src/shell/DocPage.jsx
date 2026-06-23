import Layout from "./Layout.jsx"
import Seo from "./Seo.jsx"
import TableOfContents from "./TableOfContents.jsx"

/* shared layout for legal / policy documents:
   hero (title + effective/updated meta) + sticky TOC + prose body. */
export default function DocPage({
  title,
  kicker,
  effective,
  updated,
  toc,
  seoTitle,
  seoDescription,
  children,
}) {
  return (
    <Layout>
      <Seo title={seoTitle || title} description={seoDescription} />
      <section className="doc-hero">
        <div className="container">
          {kicker && <p className="kicker">{kicker}</p>}
          <h1 style={{ fontSize: "2.1rem", marginTop: "10px" }}>{title}</h1>
          {(effective || updated) && (
            <div className="doc-meta">
              {effective && <span>effective {effective}</span>}
              {updated && <span>last updated {updated}</span>}
            </div>
          )}
        </div>
      </section>
      <div className="container">
        <div className="doc-layout">
          {toc && toc.length > 0 ? <TableOfContents items={toc} /> : <div />}
          <article className="doc-body">{children}</article>
        </div>
      </div>
    </Layout>
  )
}
