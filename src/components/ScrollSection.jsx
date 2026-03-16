/* ================================================
   SCROLL SECTION — scroll-driven animations via animation-timeline: view()
   CSS clip-path morphing, @property sweeps, 3D perspective panels
   ================================================ */

export default function ScrollSection() {
  return (
    <section className="scroll-section" aria-label="Philosophy">

      {/* ── Panel 0: Section header ── */}
      <header className="scroll-section-header">
        <p className="label">01 — intelligence</p>
        <h2>
          When did the<br />
          tool become<br />
          the author?
        </h2>
      </header>

      {/* ── Panel 1: Interfaces obeyed ── */}
      <article className="sr-panel">
        <p className="sr-panel-number">001 / 005</p>
        <p className="sr-panel-text">
          <span className="word">Interfaces</span>{' '}
          <span className="word">used</span>{' '}
          <span className="word">to</span>{' '}
          <span className="word">obey.</span>
        </p>
        <p className="sr-panel-sub">
          You clicked a button. A thing happened.<br />
          The relationship was transactional. Clean. Predictable.<br />
          <em>You were in control.</em>
        </p>
      </article>

      <div className="sr-divider" aria-hidden="true" />

      {/* ── Panel 2: Now they anticipate ── */}
      <article className="sr-panel">
        <p className="sr-panel-number">002 / 005</p>
        <p className="sr-panel-text accent-violet">
          <span className="word">Now</span>{' '}
          <span className="word">they</span>{' '}
          <span className="word">generate</span>{' '}
          <span className="word">intentions.</span>
        </p>
        <p className="sr-panel-sub">
          The interface completes your sentence before you finish it.<br />
          It knows you from aggregate ghosts of everyone who came before.<br />
          <em>The model is a mirror made of other people's clicks.</em>
        </p>
      </article>

      <div className="sr-divider" aria-hidden="true" />

      {/* ── Panel 3: Morphing box + glitch text ── */}
      <article className="sr-morph-panel">
        <div className="sr-morph-box" aria-hidden="true" />
        <div className="sr-morph-text-wrapper">
          <p className="sr-panel-number">003 / 005</p>
          <p
            className="sr-glitch-text"
            data-text="Your Figma frames are training data."
            aria-label="Your Figma frames are training data."
          >
            Your Figma frames are training data.
          </p>
          <p className="sr-panel-sub">
            The next designer won't open Figma.<br />
            They'll <em>describe</em> intent to something that never sleeps,<br />
            never blinks, and has seen every dribbble shot since 2012.
          </p>
        </div>
      </article>

      <div className="sr-divider" aria-hidden="true" />

      {/* ── Panel 4: Acid green ── */}
      <article className="sr-panel">
        <p className="sr-panel-number">004 / 005</p>
        <p className="sr-panel-text accent-green">
          <span className="word">Empathy</span>{' '}
          <span className="word">at</span>{' '}
          <span className="word">scale.</span>
        </p>
        <p className="sr-panel-sub">
          UX was always about understanding human need.<br />
          AI has infinite patience and zero ego.<br />
          <em>It will wait until you figure out what you actually want.</em>
        </p>
      </article>

      <div className="sr-divider" aria-hidden="true" />

      {/* ── Panel 5: Final statement ── */}
      <article className="sr-panel">
        <p className="sr-panel-number">005 / 005</p>
        <p className="sr-panel-text accent-magenta">
          <span className="word">This</span>{' '}
          <span className="word">is</span>{' '}
          <span className="word">not</span>{' '}
          <span className="word">a</span>{' '}
          <span className="word">product.</span>
        </p>
        <p className="sr-panel-sub">
          It is a proposition.<br />
          What if the interface <em>is</em> the intelligence?<br />
          What if design and AI aren't intersecting — they're converging?
        </p>
      </article>

    </section>
  )
}
