import { Link, useLocation } from "../router/router.jsx"
import Symbol from "./Symbol.jsx"

export default function Header() {
  const { path } = useLocation()
  const isActive = (prefix) =>
    prefix === "/" ? path === "/" : path.startsWith(prefix)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link
          to="/"
          className="brand-lockup"
          aria-label="experience Architects — home"
        >
          <Symbol className="brand-symbol" />
          <span className="brand-wordmark">
            experience <span className="cap">Architects</span>
          </span>
        </Link>
        <nav className="site-nav" aria-label="primary">
          <Link
            to="/work"
            aria-current={isActive("/work") ? "page" : undefined}
          >
            work
          </Link>
          <Link
            to="/apps"
            aria-current={isActive("/apps") ? "page" : undefined}
          >
            apps
          </Link>
          <Link
            to="/contact"
            aria-current={isActive("/contact") ? "page" : undefined}
          >
            contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
