import { Link } from "../router/router.jsx"
import Symbol from "./Symbol.jsx"

export default function ShellFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="shell-footer">
      <div className="container">
        <div className="shell-footer__grid">
          <div className="shell-footer__brand">
            <Symbol fill="#f5f5f0" />
            <p>
              experience Architects is the studio of Matt Gennings — product
              design and engineering for interfaces that think, and the home for
              the apps built along the way.
            </p>
          </div>
          <div className="shell-footer__col">
            <h4>studio</h4>
            <Link to="/work">work</Link>
            <Link to="/manifesto">manifesto</Link>
            <Link to="/contact">contact</Link>
          </div>
          <div className="shell-footer__col">
            <h4>apps</h4>
            <Link to="/apps">all apps</Link>
            <a
              href="https://airbridgehealth.com"
              target="_blank"
              rel="noopener"
            >
              AirBridge Health
            </a>
            <a
              href="https://airbridgehealth.com/support"
              target="_blank"
              rel="noopener"
            >
              AirBridge support
            </a>
          </div>
          <div className="shell-footer__col">
            <h4>legal</h4>
            <Link to="/legal/privacy">privacy</Link>
            <Link to="/legal/terms">terms</Link>
            <a href="mailto:matt@uxuiai.org">matt@uxuiai.org</a>
          </div>
        </div>
        <div className="shell-footer__bottom">
          <span>© {year} experience Architects</span>
          <span>Austin, Texas</span>
        </div>
      </div>
    </footer>
  )
}
