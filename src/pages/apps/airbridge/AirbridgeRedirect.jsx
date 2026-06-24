import { useEffect } from "react"

/* AirBridge Health moved to its own marketing domain at airbridgehealth.com.
   the old /apps/airbridge[/*] routes used to render the product pages inline
   on uxuiai.org; they now redirect to the equivalent path on the new domain
   so existing bookmarks and old App Store metadata still resolve.

   path map:
     /apps/airbridge          -> https://airbridgehealth.com/
     /apps/airbridge/privacy  -> https://airbridgehealth.com/privacy
     /apps/airbridge/terms    -> https://airbridgehealth.com/terms
     /apps/airbridge/support  -> https://airbridgehealth.com/support
*/
export default function AirbridgeRedirect({ to = "/" }) {
  useEffect(() => {
    window.location.replace(`https://airbridgehealth.com${to}`)
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
        <p
          style={{
            fontFamily: "var(--shell-mono)",
            fontSize: "0.72rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--ink-faint)",
          }}
        >
          AirBridge Health
        </p>
        <h1 style={{ fontSize: "1.8rem", margin: "12px 0 16px" }}>
          redirecting to airbridgehealth.com
        </h1>
        <p style={{ color: "var(--ink-2)" }}>
          AirBridge Health has its own home now. if your browser does not
          redirect automatically,{" "}
          <a href={`https://airbridgehealth.com${to}`}>tap here to continue</a>.
        </p>
      </div>
    </div>
  )
}
