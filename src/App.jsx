import Cursor from "./components/Cursor.jsx"
import AudioToggle from "./components/AudioToggle.jsx"
import NavControls from "./components/NavControls.jsx"
import Hero from "./components/Hero.jsx"
import Marquee from "./components/Marquee.jsx"
import ScrollSection from "./components/ScrollSection.jsx"
import Centerpiece from "./components/Centerpiece.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {
  return (
    <>
      {/* Film grain texture — fixed overlay, pointer-events: none */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Black screen that dissolves on load — creates the "waking up" entrance */}
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
