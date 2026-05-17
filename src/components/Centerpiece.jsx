/* ================================================
   CENTERPIECE — Canvas particle network + SVG psychedelic filter
   Mouse-reactive feTurbulence / feDisplacementMap distortion
   ================================================ */

import { useEffect, useRef, useCallback } from "react"

/* ── Particle System Config ── */
const PARTICLE_COUNT = 90
const CONNECTION_DIST = 130
const SPEED = 0.35

function createParticle(w, h) {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * SPEED,
    vy: (Math.random() - 0.5) * SPEED,
    r: Math.random() * 2.5 + 1,
    hue: Math.random() * 80 + 250, // violet–magenta range
  }
}

export default function Centerpiece() {
  const canvasRef = useRef(null)
  const turbulenceRef = useRef(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 }) // normalized 0–1
  const particlesRef = useRef([])

  /* ── Canvas particle animation ── */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    let raf

    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio
      canvas.height = canvas.offsetHeight * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
      // Re-scatter particles on resize
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () =>
        createParticle(canvas.offsetWidth, canvas.offsetHeight),
      )
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const render = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      const ps = particlesRef.current

      ctx.clearRect(0, 0, w, h)

      // Update + draw particles
      for (const p of ps) {
        p.x += p.vx
        p.y += p.vy

        // Bounce off walls
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        // Draw node
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, 0.85)`
        ctx.fill()
      }

      // Draw connections
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x
          const dy = ps[i].y - ps[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.6
            const hue = (ps[i].hue + ps[j].hue) / 2
            ctx.beginPath()
            ctx.moveTo(ps[i].x, ps[i].y)
            ctx.lineTo(ps[j].x, ps[j].y)
            ctx.strokeStyle = `hsla(${hue}, 100%, 70%, ${alpha})`
            ctx.lineWidth = (1 - dist / CONNECTION_DIST) * 1.5
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(render)
    }

    raf = requestAnimationFrame(render)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  /* ── Mouse → SVG filter distortion ── */
  const onMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width
    const ny = (e.clientY - rect.top) / rect.height

    mouseRef.current = { x: nx, y: ny }

    if (!turbulenceRef.current) return

    // Distance from center drives frequency (more at edges = more distortion)
    const dx = nx - 0.5
    const dy = ny - 0.5
    const dist = Math.sqrt(dx * dx + dy * dy) * 2 // 0 (center) → ~1 (corners)

    const baseFreq = 0.015 + dist * 0.04
    turbulenceRef.current.setAttribute(
      "baseFrequency",
      `${baseFreq} ${baseFreq}`,
    )
  }, [])

  const onMouseLeave = useCallback(() => {
    if (!turbulenceRef.current) return
    turbulenceRef.current.setAttribute("baseFrequency", "0.015 0.015")
  }, [])

  return (
    <section
      className="centerpiece-section"
      aria-label="Psychedelic centerpiece"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      data-nav-section
    >
      <p className="centerpiece-label" aria-hidden="true">
        — the intersection of intention and emergence —
      </p>

      {/* Canvas + SVG filter wrapper */}
      <div className="centerpiece-canvas-wrap">
        {/* Particle network canvas */}
        <canvas
          ref={canvasRef}
          className="centerpiece-canvas"
          aria-hidden="true"
        />

        {/* SVG psychedelic overlay with feTurbulence distortion */}
        <svg
          className="centerpiece-svg"
          viewBox="0 0 400 400"
          aria-hidden="true"
        >
          <defs>
            {/* Psychedelic distortion filter */}
            <filter
              id="psychedelic-filter"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feTurbulence
                ref={turbulenceRef}
                type="fractalNoise"
                baseFrequency="0.015 0.015"
                numOctaves="4"
                seed="42"
              >
                {/* Animate the turbulence seed over time for organic movement */}
                <animate
                  attributeName="seed"
                  from="1"
                  to="200"
                  dur="30s"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                scale="18"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>

            {/* Glow filter for the rings */}
            <filter id="neon-glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Clip to circle */}
            <clipPath id="circle-clip">
              <circle cx="200" cy="200" r="195" />
            </clipPath>

            {/* Radial gradient fills */}
            <radialGradient id="ring-grad-1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7b2fff" stopOpacity="0" />
              <stop offset="100%" stopColor="#7b2fff" stopOpacity="0.6" />
            </radialGradient>
            <radialGradient id="ring-grad-2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff006e" stopOpacity="0" />
              <stop offset="100%" stopColor="#ff006e" stopOpacity="0.4" />
            </radialGradient>
          </defs>

          {/* Geometric rings — filtered for distortion */}
          <g filter="url(#psychedelic-filter)" clipPath="url(#circle-clip)">
            {/* Outer ring */}
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="none"
              stroke="url(#ring-grad-1)"
              strokeWidth="1.5"
              opacity="0.9"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 200 200"
                to="360 200 200"
                dur="20s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Mid ring */}
            <circle
              cx="200"
              cy="200"
              r="140"
              fill="none"
              stroke="url(#ring-grad-2)"
              strokeWidth="1"
              strokeDasharray="4 8"
              opacity="0.7"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="360 200 200"
                to="0 200 200"
                dur="15s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Inner polygon */}
            <polygon
              points="200,70 330,155 330,245 200,330 70,245 70,155"
              fill="none"
              stroke="#39ff14"
              strokeWidth="0.8"
              opacity="0.5"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 200 200"
                to="360 200 200"
                dur="25s"
                repeatCount="indefinite"
              />
            </polygon>

            {/* Inner triangle */}
            <polygon
              points="200,100 310,280 90,280"
              fill="none"
              stroke="#c084fc"
              strokeWidth="0.8"
              opacity="0.6"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="360 200 200"
                to="0 200 200"
                dur="18s"
                repeatCount="indefinite"
              />
            </polygon>

            {/* Pulsing center circle */}
            <circle
              cx="200"
              cy="200"
              r="30"
              fill="rgba(123,47,255,0.15)"
              stroke="#7b2fff"
              strokeWidth="1"
            >
              <animate
                attributeName="r"
                values="25;38;25"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.6;1;0.6"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Spoke lines */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180
              const x2 = 200 + Math.cos(rad) * 170
              const y2 = 200 + Math.sin(rad) * 170
              return (
                <line
                  key={i}
                  x1="200"
                  y1="200"
                  x2={x2}
                  y2={y2}
                  stroke="rgba(192,132,252,0.2)"
                  strokeWidth="0.5"
                />
              )
            })}
          </g>

          {/* Center label — not filtered */}
          <text
            x="200"
            y="207"
            textAnchor="middle"
            fontFamily="'Bebas Neue', sans-serif"
            fontSize="16"
            letterSpacing="4"
            fill="rgba(232,232,248,0.5)"
          >
            UX · UI · AI
          </text>

          {/* Rotating text path */}
          <path
            id="circle-path"
            d="M 200,30 A 170,170 0 1,1 199.9,30"
            fill="none"
          />
          <text
            fontFamily="'Space Mono', monospace"
            fontSize="9"
            fill="rgba(112,112,176,0.7)"
            letterSpacing="3"
          >
            <textPath href="#circle-path">
              ux-ui.ai · the intersection of intention and emergence · ux-ui.ai
              · the intersection of intention and emergence ·
            </textPath>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 200 200"
              to="360 200 200"
              dur="60s"
              repeatCount="indefinite"
            />
          </text>
        </svg>
      </div>

      <p className="centerpiece-domain">ux-ui.ai</p>
    </section>
  )
}
