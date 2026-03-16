/* ================================================
   SCROLL SECTION — sticky-scale panels

   Pattern (identical to Apple fiddle):
     .sp-wrap    →  160dvh tall container (provides scroll room)
     .sp-sticky  →  position:sticky, top:0, height:100dvh (pins to viewport)
     .sp-scale   →  JS sets transform:scale() → 1.0 to 1.5 as you scroll

   Critical fix: use getBoundingClientRect().top + scrollY (not offsetTop)
   because .scroll-section has position:relative making it the offsetParent,
   which would give wrap positions relative to the section, not the page.

   Words reveal via IntersectionObserver → .is-active class → CSS transition.
   ================================================ */

import { useEffect, useRef, Fragment } from "react"

const SCALE_DESKTOP = 0.5 // scale(1.0) → scale(1.5)
const SCALE_MOBILE = 0.15 // scale(1.0) → scale(1.15) — mobile: text is near full-width at base size

/* Renders words as individual spans with a space text-node between them */
function Words({ list }) {
  return list.map((w, i) => (
    <Fragment key={i}>
      <span className="word" style={{ "--word-i": i }}>
        {w}
      </span>
      {i < list.length - 1 && " "}
    </Fragment>
  ))
}

export default function ScrollSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const wraps = Array.from(section.querySelectorAll(".sp-wrap"))
    const scales = Array.from(section.querySelectorAll(".sp-scale"))

    if (wraps.length === 0) return

    /* ── Cache each wrap's document-top at mount time ──
       getBoundingClientRect().top gives viewport-relative position.
       Adding scrollY converts to document-relative (absolute page position).
       These positions are stable — wraps are normal-flow elements. */
    const wrapTops = wraps.map(
      (w) => w.getBoundingClientRect().top + window.scrollY,
    )

    /* ── Determine scale ceiling once at mount — mobile gets a tighter range
       so headline text (already near full viewport width at scale 1.0) doesn't
       overflow. Check is done here, not inside the scroll handler. ── */
    const scaleMax = window.innerWidth <= 768 ? SCALE_MOBILE : SCALE_DESKTOP

    /* ── Scroll → scale ── */
    const onScroll = () => {
      const sy = window.scrollY
      const ih = window.innerHeight

      scales.forEach((el, i) => {
        const top = wrapTops[i]
        const range = wraps[i].offsetHeight - ih // 160dvh - 100dvh = 60dvh of "sticky time"
        const progress = Math.max(0, Math.min(1, (sy - top) / range))
        el.style.transform = `scale(${1 + progress * scaleMax})`
      })
    }

    /* ── IntersectionObserver → word + sub-text reveal ── */
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle("is-active", e.isIntersecting),
        ),
      { threshold: 0.15 },
    )
    wraps.forEach((w) => io.observe(w))

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll() // run immediately so initial scale is correct

    return () => {
      window.removeEventListener("scroll", onScroll)
      io.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="scroll-section"
      aria-label="Philosophy"
    >
      {/* ── Static intro — normal in-flow, not sticky ── */}
      <header className="scroll-intro">
        <span className="label">01 — intelligence</span>
        <h2>
          When did the
          <br />
          tool become
          <br />
          the author?
        </h2>
      </header>

      {/* ── Panel 1 ── */}
      <div className="sp-wrap" data-nav-section>
        <div className="sp-sticky">
          <article className="sp-scale">
            <p className="sr-panel-number">001 / 005</p>
            <p className="sr-panel-text">
              <Words list={["Interfaces", "used", "to", "obey."]} />
            </p>
            <p className="sr-panel-sub">
              You clicked a button. A thing happened.
              <br />
              The relationship was transactional. Clean. Predictable.
              <br />
              <em>You were in control.</em>
            </p>
          </article>
        </div>
      </div>

      {/* ── Panel 2 ── */}
      <div className="sp-wrap" data-nav-section>
        <div className="sp-sticky">
          <article className="sp-scale">
            <p className="sr-panel-number">002 / 005</p>
            <p className="sr-panel-text accent-violet">
              <Words list={["Now", "they", "generate", "intentions."]} />
            </p>
            <p className="sr-panel-sub">
              The interface completes your sentence before you finish it.
              <br />
              It knows you from aggregate ghosts of everyone who came before.
              <br />
              <em>The model is a mirror made of other people's clicks.</em>
            </p>
          </article>
        </div>
      </div>

      {/* ── Panel 3 — morphing diamond ── */}
      <div className="sp-wrap" data-nav-section>
        <div className="sp-sticky">
          <article className="sp-scale">
            <p className="sr-panel-number">003 / 005</p>
            <div className="sp-morph-layout">
              <div className="sr-morph-box" aria-hidden="true" />
              <div>
                <p
                  className="sr-glitch-text"
                  data-text="Your Figma frames are training data."
                  aria-label="Your Figma frames are training data."
                >
                  Your Figma frames are training data.
                </p>
                <p className="sr-panel-sub">
                  The next designer won't open Figma.
                  <br />
                  They'll <em>describe</em> intent to something that never
                  sleeps,
                  <br />
                  never blinks, and has seen every dribbble shot since 2012.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* ── Panel 4 ── */}
      <div className="sp-wrap" data-nav-section>
        <div className="sp-sticky">
          <article className="sp-scale">
            <p className="sr-panel-number">004 / 005</p>
            <p className="sr-panel-text accent-green">
              <Words list={["Empathy", "at", "scale."]} />
            </p>
            <p className="sr-panel-sub">
              UX was always about understanding human need.
              <br />
              AI has infinite patience and zero ego.
              <br />
              <em>It will wait until you figure out what you actually want.</em>
            </p>
          </article>
        </div>
      </div>

      {/* ── Panel 5 ── */}
      <div className="sp-wrap" data-nav-section>
        <div className="sp-sticky">
          <article className="sp-scale">
            <p className="sr-panel-number">005 / 005</p>
            <p className="sr-panel-text accent-magenta">
              <Words list={["This", "is", "not", "a", "product."]} />
            </p>
            <p className="sr-panel-sub">
              It is a proposition.
              <br />
              What if the interface <em>is</em> the intelligence?
              <br />
              What if design and AI aren't intersecting — they're converging?
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
