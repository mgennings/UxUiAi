/* ================================================
   FOOTER — domain name + self-aware humor
   ================================================ */

export default function Footer() {
  return (
    <footer className="footer" aria-label="Footer">
      {/* Domain name as giant outline text */}
      <h2 className="footer-domain" aria-label="uxuiai.org">
        uxuiai.org
      </h2>

      {/* Self-aware taglines */}
      <div className="footer-taglines">
        <p>a parking lot at the edge of the future</p>
        <p>nothing is happening here.</p>
        <p>beautifully, specifically nothing.</p>

        <p className="status">
          <span className="status-dot" aria-hidden="true" />
          parked with purpose — est. 2022
        </p>
      </div>

      {/* Fine print */}
      <div className="footer-bottom">
        <span>© uxuiai.org</span>
        <span>·</span>
        <span>no product. no roadmap. just vibes.</span>
      </div>
    </footer>
  )
}
