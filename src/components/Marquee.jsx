/* ================================================
   MARQUEE — kinetic dual-row scrolling text ribbon
   Pure CSS animation, no JS
   ================================================ */

const ROW_1 = [
  "Design is the ghost in the machine's machine",
  "AI learned your aesthetics",
  "now what",
  "the cursor knows where you're going",
  "shape language for minds that don't sleep",
  "every pixel is a decision the model almost made",
]

const ROW_2 = [
  "your next design system was trained on your last",
  "UX was always about empathy",
  "AI has infinite patience",
  "the interface anticipates",
  "hierarchy · contrast · emergence",
  "the model has good taste — it studied yours first",
]

function MarqueeRow({ items, reverse = false }) {
  // Duplicate items so the loop is seamless
  const doubled = [...items, ...items]

  return (
    <div
      className={`marquee-track${reverse ? " reverse" : ""}`}
      aria-hidden="true"
    >
      <div className="marquee-inner">
        {doubled.map((text, i) => (
          <span key={i} className="marquee-item">
            {text}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <section
      className="marquee-section"
      aria-label="Scrolling phrases"
      data-nav-section
    >
      {/* Edge fade masks */}
      <div className="marquee-fade left" aria-hidden="true" />
      <div className="marquee-fade right" aria-hidden="true" />

      <MarqueeRow items={ROW_1} />
      <MarqueeRow items={ROW_2} reverse />
    </section>
  )
}
