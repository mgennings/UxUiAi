# Timeline — uxuiai.org

Timestamped record of major decisions and changes. Newest first.

## 2026-06-24 — /apps hero redesign + sitewide light/dark

**What:** Rebuilt the `/apps` hero (it was using `.doc-hero`, the same
treatment as legal/privacy pages — a document header pretending to be a
hero). New hero is an asymmetric split: plasma-masked headline on the left
("the products that **prove the idea**"), an app constellation on the right
(real AirBridge framed iPhone screenshot with a light/dark twin + a floating
undertext chip), ambient plasma glow, Apple-tempo load reveal + hover lift.

**Also shipped (the dependency that made it possible):** a full light/dark
theme system ported from `~/Developer/airbridge/www` —

- `src/shell/theme.jsx` (ThemeProvider, key `uxui-theme`)
- no-flash bootstrap in `index.html`
- sun/moon toggle in `Header.jsx`
- `[data-theme="dark"]` token block + chrome tokens (`--header-bg`,
  `--link`, `--link-hover`) + motion tokens + reduced-motion block in
  `shell.css`
- tokenized the hardcoded `#fff` card surfaces + `--ea-blue` links across
  shell/home css so every shell page flips correctly in dark mode.

**Why this hero:** Matt: "this is the fucking HUB" — uxuiai.org is the
one-stop home for experience Architects, not the art piece. The apps page is
the front door to the products and was the weakest surface. He loved
airbridgehealth.com's light/dark + split hero and wanted that DNA here.

**Skills applied:** brainstorming, frontend-design, apple-transitions
(motion tokens + reduced-motion), apple-repo-conventions (informed the
token/feature discipline; full bootstrap NOT run — out of scope).

**Verified:** light + dark × desktop + mobile via chrome-devtools, zero
console errors, `npm run build` clean. Branch `feat/apps-hero-redesign`.

**Left alone deliberately:** manifesto `Hero.jsx`, homepage `.hub-hero`,
the dead `.ab-hero`/`.price-card` styles in product.css (the
/apps/airbridge route now redirects away), the README's art-voice copy.
