# Gotchas — uxuiai.org

Project-specific footguns. Read before touching the shell or theme.

## Two heroes, do not confuse them

There are TWO hero treatments in this repo:

1. `src/components/Hero.jsx` — the **manifesto** WebGL fever-dream
   ("The Interface Is Dreaming"). Lives at `/manifesto`. Intentionally
   weird. Don't "fix" it.
2. The `/apps` hero (`src/pages/apps/Apps.jsx` → `.apps-hero` in
   `product.css`) — the **apps showcase**. Asymmetric split, plasma-masked
   headline, app constellation, full light/dark. This is the one rebuilt
   2026-06-24.

(There is also a `.hub-hero` on the homepage `Home.jsx`. Separate surface.)

## Light/dark theme system (added 2026-06-24)

- The theme is set on `<html data-theme="...">` by an inline bootstrap in
  `index.html` BEFORE React mounts — this is what prevents a first-paint
  flash. If you add a new entry HTML or change the mount, keep that script.
- `src/shell/theme.jsx` is the provider. Storage key is **`uxui-theme`**
  (NOT `ab-theme` — that's the airbridge repo this was ported from).
- **Never persist an OS-default value.** The provider only writes
  `uxui-theme` after an explicit user toggle. If you "simplify" it to always
  persist, the site stops following the OS on first visit. This is a
  deliberate guard, copied from the airbridge bug.
- Surfaces are tokenized: `:root,[data-theme="light"]` + `[data-theme="dark"]`
  in `shell.css`. The `--night*` tokens stay dark in BOTH themes (hero/footer
  are meant to read as night regardless of page mode).
- New chrome tokens: `--header-bg`, `--link`, `--link-hover`. Use these, not
  hardcoded hex, or the element won't flip in dark mode. The invisible-button
  history in this repo came from inline `style={}` overrides — fix at the
  token level, never inline.
- The brand `Symbol` SVG has a hardcoded deep-blue fill; a CSS override
  (`[data-theme="dark"] .brand-lockup svg path { fill: var(--link) }`) lifts
  it in dark mode. The `fill="plasma"` gradient variant is unaffected.

## Prettier is NOT the Apple 4-space config here

This repo predates the apple-repo-conventions SOPs. `.prettierrc` is
2-space / no-semi / double-quote / 80-col. Match the file, not the skill's
4-space/140-col values. `apple-repo-conventions` has NOT been run here.

## AirBridge screenshots are vendored

`public/images/app-screens/*-framed.webp` are copied from
`~/Developer/airbridge/www`. They're framed (bezel baked into the PNG/webp),
so the CSS wrapper must NOT add a radius/background/clip or it draws a second
frame. If AirBridge re-shoots its screens, re-copy.
