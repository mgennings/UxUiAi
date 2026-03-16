/* ================================================
   CURSOR — custom dot + spring-lagged ring, mix-blend-mode: difference
   Only rendered when a real mouse is present (pointer: fine).
   On touch/coarse devices returns null — no stuck element at 0,0.
   ================================================ */

import { useEffect, useRef } from "react"

// Evaluated once per session — pointer capability doesn't change at runtime
const HAS_MOUSE = window.matchMedia("(pointer: fine)").matches

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Guard inside the effect so hooks are always called unconditionally
    if (!HAS_MOUSE) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let raf

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const tick = () => {
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
      ringX += (mouseX - ringX) * 0.14
      ringY += (mouseY - ringY) * 0.14
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  // Don't render DOM nodes on touch devices — all hooks called above so rules are satisfied
  if (!HAS_MOUSE) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
