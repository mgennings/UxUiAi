/* ================================================
   NAV CONTROLS — fixed bottom-left section navigator
   Watches [data-nav-section] elements with an IntersectionObserver
   whose rootMargin collapses the detection zone to the viewport midpoint.
   Whichever section's bounds straddle the midpoint is "current".
   ================================================ */

import { useEffect, useRef, useState } from "react"

export default function NavControls() {
  const [current, setCurrent] = useState(0)
  const [total, setTotal] = useState(0)
  const sectionsRef = useRef([])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-nav-section]"))
    sectionsRef.current = sections
    setTotal(sections.length)

    if (sections.length === 0) return

    /* ── Track active section via midpoint crossing ──
       rootMargin '-49% 0px -49%' shrinks the intersection root to a 2%
       band at the viewport center. A section "intersects" when the
       viewport midpoint falls inside its bounds. One section at a time. */
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrent(sections.indexOf(entry.target))
          }
        })
      },
      { rootMargin: "-49% 0px -49% 0px", threshold: 0 },
    )

    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  const goTo = (index) => {
    const sections = sectionsRef.current
    if (index < 0 || index >= sections.length) return
    sections[index].scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const isFirst = current === 0
  const isLast = current === total - 1

  return (
    <nav className="nav-controls" aria-label="Section navigation">
      {/* Up button — disabled (muted) on first section */}
      <button
        className={`nav-btn${isFirst ? " nav-btn--muted" : ""}`}
        onClick={() => goTo(current - 1)}
        aria-label="Previous section"
        aria-disabled={isFirst}
        tabIndex={isFirst ? -1 : 0}
      >
        <i className="fa-solid fa-angle-up" aria-hidden="true" />
      </button>

      {/* Down button — becomes scroll-to-top on last section */}
      <button
        className="nav-btn"
        onClick={() => goTo(isLast ? 0 : current + 1)}
        aria-label={isLast ? "Scroll to top" : "Next section"}
        title={isLast ? "Scroll to top" : undefined}
      >
        {isLast ? (
          <i className="fa-solid fa-angles-up" aria-hidden="true" />
        ) : (
          <i className="fa-solid fa-angle-down" aria-hidden="true" />
        )}
      </button>
    </nav>
  )
}
