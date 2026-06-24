# /apps/ hero redesign — design spec

Date: 2026-06-24
Repo: `~/Developer/UxUiAi` → uxuiai.org
Surface: `uxuiai.org/apps/` (the apps showcase, NOT the manifesto, NOT the homepage hub)

## Problem

`src/pages/apps/Apps.jsx` opens with `.doc-hero` — the exact same treatment used by the legal / privacy / terms prose pages. The result is a document header masquerading as a hero: a `experience Architects` kicker, an `h1` of just "apps" shrunk with an inline `style={{ fontSize: "2.1rem" }}` band-aid, one line of lead, and a gray hairline. It has no image, no artifact, no energy, and no light/dark. It treats the product showcase like a terms-of-service page, so the two app cards below carry all the visual weight while the "hero" contributes nothing. That is why it "makes no sense."

The hero pattern Matt loves already exists on airbridgehealth.com (`~/Developer/airbridge/www`): an asymmetric split, a real artifact on the right, ambient color, and a full light/dark system with a no-flash bootstrap. We steal that DNA and push it one step further for the apps hub.

## Goal

A genuine apps-showcase hero that:

1. Shows the apps (an app constellation), not just names them.
2. Carries a full light/dark system ported from airbridge.
3. Has one memorable signature: the plasma gradient masked into the headline type — the UX·UI·AI convergence made literal — reusing the existing shader palette.
4. Moves at Apple tempo (200ms / ease-out), honors reduced motion, and meets the quality floor (responsive to mobile, visible focus).

## Design tokens (this surface)

Reuse the existing plasma palette already in `shell.css` (`--plasma-violet #7b2fff`, `--plasma-magenta #ff006e`, `--plasma-acid #39ff14`, `--plasma-cyan #00f5ff`). The new work is making the shell themable.

- **Color (light):** paper `#f5f5f0`, paper-2 `#eceae1`, ink `#16161d`, hair `#d9d7cd` — already defined.
- **Color (dark):** new `[data-theme="dark"]` block — paper `#0b0b14`, paper-2 `#11111f`, ink `#e8e8f8`, hair `#26263a`, mirroring airbridge's approach but in the uxuiai night palette (`--night #060614`).
- **Plasma as accent, dimmed in dark:** the ambient hero glow uses the plasma hexes at low alpha; in dark mode the glow opacity drops (airbridge rule: depth via shadow + dimmed glow, not louder color).
- **Type:** keep Inter (display + body) and Space Mono (utility / kicker) — already loaded. The signature is the plasma text-clip, not a new typeface, so we don't add a font.
- **Motion:** introduce airbridge-style tokens into the themed root — `--t-fast 140ms`, `--t-med 200ms`, `--t-slow 320ms`, `--ease-out cubic-bezier(0,0,0.5,1)`. The shell already has `--ease`; we keep it and add these.

## Architecture

### 1. Theme system (ported from airbridge, adapted to uxuiai)

- **`index.html`** — add the no-flash bootstrap script (reads `localStorage('uxui-theme')` or OS `prefers-color-scheme`, sets `data-theme` on `<html>` before React mounts). Two `theme-color` metas (light/dark). Key: never persist an OS-default value — only persist an explicit user choice (airbridge's guarded bug).
- **`src/shell/theme.jsx`** — new. `ThemeProvider` + `useTheme()`, copied from airbridge, with the storage key renamed to `uxui-theme`. Follows OS live until the user makes an explicit choice, then pins it.
- **`src/App.jsx`** — wrap the tree in `ThemeProvider`.
- **`src/shell/Header.jsx`** — add the light/dark toggle button (sun/moon SVG) from airbridge, wired to `useTheme()`.
- **`src/styles/shell.css`** — split the `:root` token block into `:root, [data-theme="light"]` + a new `[data-theme="dark"]` block; convert hardcoded surface/ink/hair references to the tokens where the shell already uses `var()`. **Do not mass-reformat or re-theme every component in this pass** — scope the dark block to what the apps page + header + shell chrome actually render, and let the rest follow incrementally (apple-repo-conventions rule: no giant reformat commit).

### 2. The hero (`src/pages/apps/Apps.jsx` + `src/styles/product.css`)

- New `AppsHero` markup replacing the `.doc-hero` block in `Apps.jsx`. Asymmetric grid `1.05fr 0.95fr` (airbridge), copy left, constellation right.
- **Left column:** mono kicker (`experience Architects · apps`), an `h1` where one word ("think" or "ship") is wrapped in `.plasma-text` (the existing gradient text-clip), a calm lead, and a CTA row using the real `.btn` system (no inline-style band-aids — the invisible-button bug came from inline overrides).
- **Right column — app constellation:** the AirBridge framed iPhone screenshot (light/dark twin that swaps with theme, airbridge's `.is-light` / `.is-dark` opacity technique) floating with a soft plasma glow behind it, and the undertext represented by its mark/card offset with depth. Parallax/lift on hover, calm float on load.
- **Ambient background:** plasma-colored radial blobs (`::before` / `::after`) that dim in dark mode — airbridge's exact pattern, recolored to the plasma palette.

### 3. Assets

Copy AirBridge's framed light/dark webp from `~/Developer/airbridge/www/public/images/app-screens/` into `~/Developer/UxUiAi/public/images/app-screens/` (self-contained; no hotlinking). At minimum `onboarding-light-framed.webp` + `onboarding-dark-framed.webp`; optionally `sync-pro-*` as a second constellation element. undertext has no screenshot yet → represent with the EA mark or a typographic placeholder card, clearly "in progress."

### 4. Motion (apple-transitions)

- **Headline reveal on load:** lines translateY + fade, staggered ~60ms, `--t-slow` `--ease-out`. One orchestrated moment, not scattered effects.
- **Constellation:** hover lift `translateY(-4px)` on each artifact (airbridge `.ab-phone:hover`), theme-swap cross-fade on the screenshot (`opacity` `--t-slow`).
- **Toggle + header:** standard 200ms color transitions.
- **Reduced motion:** the global `@media (prefers-reduced-motion: reduce)` block (port from airbridge) zeroes animation/transition durations.

## What we are NOT doing (YAGNI / scope)

- Not touching the manifesto `Hero.jsx` or its shader.
- Not redesigning the homepage hub hero in this pass (separate surface; can follow).
- Not running the full apple-repo-conventions bootstrap (husky/eslint/coverage) — out of scope for a hero redesign.
- Not mass-reformatting the codebase to Apple Prettier values.
- Not adding a new font family.

## Risk / edge cases

- **First-paint flash:** mitigated by the index.html bootstrap running before React.
- **WebGL absent:** the hero must read correctly with no shader — the plasma is an accent (text-clip + CSS blobs), not the load-bearing background, so a no-WebGL device still gets a complete hero. (The text-clip gradient is pure CSS; only the manifesto uses live WebGL.)
- **Button contrast in both themes:** the `.btn--primary` / `.btn--ghost` colors must be verified in light AND dark (this repo has a history of invisible-button bugs from inline-style hacks — fix at the token level, no inline overrides).
- **Theme persistence bug:** never write `uxui-theme` for an OS-default value; only on explicit toggle.

## Success criteria

- `/apps/` opens with a composed split hero that shows AirBridge (and gestures at undertext), not a document header.
- A header toggle flips the whole surface light↔dark with no flash; choice persists; OS-followed until first explicit choice.
- The plasma-masked headline word is the one memorable signature.
- Buttons are legible in both themes with no inline-style overrides.
- Responsive to mobile (single column under 820px), visible keyboard focus, reduced motion respected.
- `npm run build` succeeds.
