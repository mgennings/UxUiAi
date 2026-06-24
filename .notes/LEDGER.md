# Live Ledger

## Current task

- tighten the mobile homepage/apps hero so the headline, shorter supporting copy, CTAs, and app screenshots fit the first viewport more intentionally.

## Done

- loaded local operator/coding rules, project memory, design preferences, and frontend testing workflow.
- identified the target surface: `src/pages/apps/Apps.jsx` with `.apps-hero` styles in `src/styles/product.css`.
- shortened the hero support copy and CTA labels.
- added mobile-first hero sizing for type, spacing, CTA buttons, and the device stage, with desktop scale restored at the wide breakpoint.
- added `CHANGELOG.md`, bumped `package.json` / `package-lock.json` to 0.1.1, and indexed this ledger from `.notes/MEMORY.md`.
- verified with `npm run build`, `git diff --check`, Chrome DevTools mobile viewport at 393x852, no console warnings/errors, and the `browse apps` CTA.

## Next

- commit the mobile hero fix locally.
