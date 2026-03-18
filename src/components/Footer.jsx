/* ================================================
   FOOTER — domain name + self-aware humor
   ================================================ */

export default function Footer() {
  return (
    <footer className="footer" aria-label="Footer" data-nav-section>
      {/* Domain name as giant outline text */}
      {/* Domain name — SVG text with animated rainbow stroke rings */}
      <div
        className="footer-domain"
        role="heading"
        aria-level="2"
        aria-label="ux-ui.ai"
      >
        <svg
          className="footer-domain-svg"
          viewBox="0 0 1000 175"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          {/* Outer thick ring — bg fill cuts through, only stroke edge visible */}
          <text
            x="500"
            y="148"
            textAnchor="middle"
            fontFamily="'Oswald', sans-serif"
            fontWeight="700"
            fontSize="152"
            fill="#020208"
            stroke="#c084fc"
            strokeWidth="8"
          >
            UX-UI.AI
          </text>
          {/* Middle ring */}
          <text
            x="500"
            y="148"
            textAnchor="middle"
            fontFamily="'Oswald', sans-serif"
            fontWeight="700"
            fontSize="152"
            fill="#020208"
            stroke="#c084fc"
            strokeWidth="4"
          >
            UX-UI.AI
          </text>
          {/* Inner fine ring */}
          <text
            x="500"
            y="148"
            textAnchor="middle"
            fontFamily="'Oswald', sans-serif"
            fontWeight="700"
            fontSize="152"
            fill="#020208"
            stroke="#c084fc"
            strokeWidth="1"
          >
            UX-UI.AI
          </text>
        </svg>
      </div>

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
        <span>© ux-ui.ai</span>
        <span>·</span>
        <span>a signal from the edge</span>
      </div>
    </footer>
  )
}
