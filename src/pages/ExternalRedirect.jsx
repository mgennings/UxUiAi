import { useEffect } from "react"

/* generic client-side redirect to another domain. used for routes whose
   real home lives elsewhere — e.g. /work, which now points at the portfolio
   at mgennings.com rather than a stub page here. renders a brief fallback
   in case the browser does not redirect automatically. */
export default function ExternalRedirect({ to, label = "the right place" }) {
  useEffect(() => {
    window.location.replace(to)
  }, [to])

  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "480px" }}>
        <h1 style={{ fontSize: "1.8rem", margin: "0 0 16px" }}>redirecting…</h1>
        <p style={{ color: "var(--ink-2)" }}>
          taking you to {label}. if your browser does not redirect
          automatically, <a href={to}>tap here to continue</a>.
        </p>
      </div>
    </div>
  )
}
