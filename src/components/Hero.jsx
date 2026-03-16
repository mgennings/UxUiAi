/* ================================================
   HERO — WebGL plasma background + typographic statement
   ================================================ */

import { useEffect, useRef } from "react"

/* ── WebGL Shaders ── */

const VERT = `
  attribute vec2 a_pos;
  void main() {
    gl_Position = vec4(a_pos, 0.0, 1.0);
  }
`

// Fractal color tunnel — IQ palette technique
// Creates flowing violet/magenta/acid psychedelic background
const FRAG = `
  precision highp float;
  uniform float u_t;
  uniform vec2  u_res;

  #define TAU 6.28318530718

  /* Inigo Quilez cosine palette */
  vec3 palette(float t) {
    vec3 a = vec3(0.25, 0.10, 0.50);
    vec3 b = vec3(0.50, 0.20, 0.50);
    vec3 c = vec3(1.00, 0.70, 1.00);
    vec3 d = vec3(0.00, 0.25, 0.50);
    return a + b * cos(TAU * (c * t + d));
  }

  void main() {
    vec2 uv  = (gl_FragCoord.xy * 2.0 - u_res) / min(u_res.x, u_res.y);
    vec2 uv0 = uv;
    vec3 col = vec3(0.0);

    for (float i = 0.0; i < 4.0; i++) {
      uv = fract(uv * 1.5) - 0.5;

      float d  = length(uv) * exp(-length(uv0));
      vec3  c  = palette(length(uv0) + i * 0.4 + u_t * 0.22);

      d = sin(d * 8.0 + u_t * 0.4) / 8.0;
      d = abs(d);
      d = pow(0.012 / d, 1.15);

      col += c * d;
    }

    /* Darken + vignette */
    float vig = 1.0 - smoothstep(0.4, 1.2, length(uv0));
    col = col * vig * 0.55;

    gl_FragColor = vec4(col, 1.0);
  }
`

function initGL(canvas) {
  const gl =
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
  if (!gl) return null

  const compile = (type, src) => {
    const s = gl.createShader(type)
    gl.shaderSource(s, src)
    gl.compileShader(s)
    return s
  }

  const prog = gl.createProgram()
  gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT))
  gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG))
  gl.linkProgram(prog)
  gl.useProgram(prog)

  // Full-screen triangle pair
  const verts = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1])
  const buf = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buf)
  gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW)

  const posLoc = gl.getAttribLocation(prog, "a_pos")
  gl.enableVertexAttribArray(posLoc)
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

  return {
    gl,
    uTime: gl.getUniformLocation(prog, "u_t"),
    uRes: gl.getUniformLocation(prog, "u_res"),
  }
}

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = initGL(canvas)
    if (!ctx) return

    const { gl, uTime, uRes } = ctx
    let raf,
      start = performance.now()

    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio
      canvas.height = canvas.offsetHeight * devicePixelRatio
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const render = () => {
      const t = (performance.now() - start) / 1000
      gl.uniform1f(uTime, t)
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      raf = requestAnimationFrame(render)
    }

    raf = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <section className="hero" aria-label="Hero" data-nav-section>
      {/* WebGL generative background */}
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />

      {/* Houdini aurora overlay */}
      <div className="hero-aurora" aria-hidden="true" />

      {/* Radial vignette */}
      <div className="hero-vignette" aria-hidden="true" />

      {/* Content */}
      <div className="hero-content">
        <p className="hero-eyebrow">uxuiai.org — signal incoming</p>

        <h1 className="hero-title" aria-label="The Interface Is Dreaming">
          <span className="hero-title-line line-1">The Interface</span>
          <span className="hero-title-line line-2" data-text="Is Dreaming">
            Is Dreaming
          </span>
        </h1>

        <p className="hero-subtitle">
          — before you touch it, it already knows you —
        </p>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint" aria-hidden="true">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
