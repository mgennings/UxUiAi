/* ================================================
   THEME — light/dark with OS default + manual override.
   the initial value is set in index.html before React
   mounts (to avoid a first-paint flash). this provider
   wraps that state, exposes a toggle, and persists the
   user's choice in localStorage under "uxui-theme".

   ported from the airbridge www theme system, retuned to
   the experience Architects shell. the apps hub is the
   first surface here to go light/dark; the rest of the
   shell can follow incrementally.
   ================================================ */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"

const STORAGE_KEY = "uxui-theme"

const ThemeContext = createContext({
  theme: "light",
  toggle: () => {},
  setTheme: () => {},
})

function readInitial() {
  if (typeof document === "undefined") return "light"
  const attr = document.documentElement.getAttribute("data-theme")
  if (attr === "light" || attr === "dark") return attr
  return "light"
}

// did the user ever make an explicit light/dark choice? this is the ONLY thing
// that should pin the theme. an OS-default value must never be persisted —
// otherwise the first visit silently writes the key and the site stops
// following the system from then on (the bug this guards against).
function readHasChosen() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === "light" || saved === "dark"
  } catch (e) {
    return false
  }
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(readInitial)
  const [hasChosen, setHasChosen] = useState(readHasChosen)

  // apply to <html data-theme="...">. persistence is deliberate: we only write
  // the key once the user has made an explicit choice, so an OS-default theme
  // never gets baked in and the site keeps tracking the system until then.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    if (!hasChosen) return
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch (e) {
      /* private mode etc — silently fall back to in-memory state */
    }
  }, [theme, hasChosen])

  // follow OS preference live, but only while the user has not made an explicit
  // choice. once they choose, their pick wins and we stop listening to the OS.
  useEffect(() => {
    if (hasChosen || !window.matchMedia) return
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = (e) => setThemeState(e.matches ? "dark" : "light")
    mq.addEventListener?.("change", onChange)
    return () => mq.removeEventListener?.("change", onChange)
  }, [hasChosen])

  const setTheme = useCallback((next) => {
    if (next !== "light" && next !== "dark") return
    setHasChosen(true)
    setThemeState(next)
  }, [])

  const toggle = useCallback(() => {
    setHasChosen(true)
    setThemeState((t) => (t === "dark" ? "light" : "dark"))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggle, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
