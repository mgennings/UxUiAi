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
