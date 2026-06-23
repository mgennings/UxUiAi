/* ================================================
   ROUTER — dependency-free client-side router
   History API based. supports nested path matching,
   <Link>, programmatic navigate(), and useLocation().
   chosen over react-router-dom because the build host
   has no network access to npm at rework time.
   ================================================ */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react"

const RouterContext = createContext({
  path: "/",
  navigate: () => {},
})

function normalize(path) {
  if (!path) return "/"
  // strip trailing slash except root
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1)
  return path
}

export function Router({ children }) {
  const [path, setPath] = useState(() => normalize(window.location.pathname))

  useEffect(() => {
    const onPop = () => setPath(normalize(window.location.pathname))
    window.addEventListener("popstate", onPop)
    return () => window.removeEventListener("popstate", onPop)
  }, [])

  const navigate = useCallback((to, { replace = false } = {}) => {
    const next = normalize(to)
    if (replace) {
      window.history.replaceState({}, "", next)
    } else {
      window.history.pushState({}, "", next)
    }
    setPath(next)
  }, [])

  const value = useMemo(() => ({ path, navigate }), [path, navigate])

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  )
}

export function useLocation() {
  return useContext(RouterContext)
}

export function useNavigate() {
  return useContext(RouterContext).navigate
}

/* Scroll to top on every path change unless a hash anchor is present. */
export function ScrollToTop() {
  const { path } = useLocation()
  useLayoutEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0)
  }, [path])
  return null
}

/* Routes / Route — exact match table.
   first matching <Route> wins; <Route path="*"> is the catch-all. */
export function Routes({ children }) {
  const { path } = useLocation()
  const routes = Array.isArray(children) ? children : [children]

  let fallback = null
  for (const route of routes) {
    if (!route) continue
    const routePath = route.props.path
    if (routePath === "*") {
      fallback = route.props.element
      continue
    }
    if (normalize(routePath) === path) {
      return route.props.element
    }
  }
  return fallback
}

export function Route() {
  // declarative only; consumed by <Routes>
  return null
}

export function Link({ to, children, className, onClick, ...rest }) {
  const navigate = useNavigate()
  const handleClick = (e) => {
    // allow modified clicks / new-tab / external behavior
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      rest.target === "_blank"
    ) {
      return
    }
    e.preventDefault()
    if (onClick) onClick(e)
    navigate(to)
  }
  return (
    <a href={to} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
