# Timeline — uxuiai.org

Timestamped record of major decisions and changes. Newest first.

## 2026-06-24 (later) — undertext promoted to shipping + two-app constellation

undertext turned out to be fully shipped (App Store id6778455656, live at
undertext.org, local at ~/Developer/undertext) — not "coming soon." So:

- /apps hero: replaced the floating undertext chip with a REAL second device.
  AirBridge is the front/primary phone; undertext sits smaller + angled
  behind-right at depth = a genuine two-app constellation.
- both apps now light/dark twins that swap with the page theme. undertext
  twins were baked from sim captures via the device-mockup skill
  (`iframe.py`, auto Bezel = iPhone 17 Pro Max Deep Blue, 1470×3000) — same
  geometry as the AirBridge frames so the swap doesn't jump.
- /apps + homepage catalog cards: undertext upgraded to status "shipping",
  external link to undertext.org, craft-led copy ("a quieter way to read
  scripture — sit with the language beneath the verse"). tag iOS · reading.
- "browse the catalog" button: was an invisible ghost on the dark hero →
  new `.btn--invert` (solid white, deep-blue ink) as the inverse of primary.
- spacing audited to the 8px grid (16 default / 12 tight): hero rhythm now
  16→24→32, column gap 48, card padding 32, grid gap 24, .more 16.
- homepage hub-hero veil strengthened (centered scrim) so the headline is
  legible over the plasma in the always-dark hero.
- assets: undertext-reader-framed.png + undertext-reader-dark-framed.png in
  public/images/app-screens.

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
