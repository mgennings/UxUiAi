# uxuiai.org

A parked domain that refused to stay quiet. This is a pure CSS/JS art piece exploring the intersection of UX/UI design and AI/LLM tools — not a product, not a landing page, not a "coming soon." It's a fever dream built with WebGL shaders, CSS scroll-driven animations, Houdini `@property` custom properties, SVG psychedelic filters, and a particle network that reacts to your mouse. Ben Böhmer plays in the background if you ask nicely. The kind of site another developer finds in their bookmarks two years from now and immediately sends to a friend.

## Tech Stack

- **React 18 + Vite 5** — component structure, fast dev server, static build
- **WebGL (raw, no library)** — fractal plasma shader in the hero using IQ's cosine palette technique
- **CSS Houdini `@property`** — animatable custom properties for aurora gradients, shimmer sweeps, glow sizes
- **CSS scroll-driven animations** — `animation-timeline: view()` for clip-path morphs, 3D panel reveals, fade-ins tied to scroll position (no JS required)
- **SVG filters** — `feTurbulence` + `feDisplacementMap` psychedelic distortion in the centerpiece, mouse-reactive frequency
- **Canvas 2D** — particle network with spring-connected nodes in the centerpiece
- **CSS clip-path morphing** — scroll-driven polygon morphs in the scroll section
- **CSS 3D transforms** — perspective panel reveals as sections enter viewport
- **CSS masking + `mix-blend-mode`** — layered text effects, cursor inversion
- **`100dvh`** throughout for iOS Safari compatibility
- **Custom animated cursor** — spring-lagged ring with `mix-blend-mode: difference`
- **CSS container queries** — adaptive layouts on hero and centerpiece sections
- **Fonts** — Bebas Neue (display) + Space Mono (editorial mono), Google Fonts CDN

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview  # preview the production build locally
```

The `dist/` folder is the complete deployable — just host it statically.

## Deploy

**Netlify (drag and drop):** Build the project, then drag the `dist/` folder to [app.netlify.com/drop](https://app.netlify.com/drop).

**Netlify CLI:**
```bash
npm run build
npx netlify deploy --prod --dir=dist
```

**Vercel:**
```bash
npm run build
npx vercel --prod
```

**GitHub Pages:** Push to a repo, set Pages source to the `dist/` branch, or use [github.com/peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages).

No server required. No environment variables. No database. Just vibes.
