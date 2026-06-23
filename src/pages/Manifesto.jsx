/* MANIFESTO — the original uxuiai.org art piece, preserved verbatim.
   this is the WebGL plasma fever-dream that used to live at /.
   the IQ-palette shader, the film grain, the cursor, the audio toggle,
   the scroll sections — all kept intact. only its home moved. */

import { useEffect } from "react"
import Cursor from "../components/Cursor.jsx"
import AudioToggle from "../components/AudioToggle.jsx"
import NavControls from "../components/NavControls.jsx"
import Hero from "../components/Hero.jsx"
import Marquee from "../components/Marquee.jsx"
import ScrollSection from "../components/ScrollSection.jsx"
import Centerpiece from "../components/Centerpiece.jsx"
import Footer from "../components/Footer.jsx"
import "../styles/global.css"

export default function Manifesto() {
  // the manifesto wants the dark body + hidden cursor; the shell undoes them.
  // toggle a body class for the lifetime of this route so the two surfaces
  // never fight over global styles.
  useEffect(() => {
    document.body.classList.add("manifesto-active")
    document.title = "experience Architects — the interface is dreaming"
    return () => document.body.classList.remove("manifesto-active")
  }, [])

  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <div className="site-intro-overlay" aria-hidden="true" />
      <Cursor />
      <AudioToggle />
      <NavControls />
      <main>
        <Hero />
        <Marquee />
        <ScrollSection />
        <Centerpiece />
        <Footer />
      </main>
    </>
  )
}
