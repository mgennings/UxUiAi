# uxuiai.org

a parked domain that refused to stay parked. it's alive at **[www.uxuiai.org](https://www.uxuiai.org)**.

this is not a product. this is not a landing page. this is not a "coming soon." this is a WebGL fever dream about what happens when UX/UI and AI converge into something that no longer needs you. there are scroll animations that scale text until it feels threatening. there is a particle network in the centerpiece that connects dots in a way that feels like it means something. there is a ben böhmer track playing if you click the button. there is a custom cursor that lags behind your mouse like it has places to be.

nobody asked for this. here it is anyway.

## what's in here

- **React 18 + Vite 5** — because we're not animals
- **raw WebGL** — fractal plasma shader hero using IQ's cosine palette. no three.js. just pain and math
- **CSS Houdini `@property`** — animated custom properties for aurora gradients and shimmer sweeps. browsers are finally cool enough for this
- **CSS scroll-driven animations** — `animation-timeline: view()` doing heavy lifting so JS doesn't have to
- **Apple-style sticky scroll panels** — 160dvh tall containers, position:sticky children, JS maps scroll progress to scale(). the text grows at you
- **SVG `feTurbulence` + `feDisplacementMap`** — psychedelic distortion in the centerpiece. moves with your mouse
- **Canvas 2D particle network** — 90 spring-connected nodes doing their thing
- **custom cursor** — spring-lagged ring, `mix-blend-mode: difference`, only renders on real mice (`pointer: fine`). touch devices get nothing and that's correct
- **CSS multi-ring text outline** — footer domain uses 3 stacked pseudo-element layers (8px / 4px / 1px strokes) with black fill cutthrough for that concentric ring thing
- **Prettier + Husky** — pre-commit hook auto-formats everything. this repo has standards

## run it

```bash
npm install
npm run dev
```

done. [http://localhost:5173](http://localhost:5173).

### preview on your phone (same wifi)

```bash
npm run dev -- --host
```

vite will print something like `Network: http://192.168.1.x:5173`. open that on your phone. same network, instant mobile preview. great for checking the mobile scroll behavior, the touch cursor guard, or whether you've accidentally made the text enormous on a small screen again.

## build

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally before shipping
```

## format

```bash
npm run format     # prettier --write . on everything
```

or just commit and lint-staged handles it automatically via the husky pre-commit hook.

## deploy

this lives on **AWS Amplify** at [www.uxuiai.org](https://www.uxuiai.org). amplify watches the main branch and deploys on push. no build config needed beyond what's already in `package.json` — vite outputs to `dist/` and amplify finds it.

if you wanted to deploy this somewhere else for some reason:

```bash
npm run build
# drag dist/ to netlify drop, or:
npx netlify deploy --prod --dir=dist
```

no server. no env vars. no database. just vibes and shaders and a domain name that sounds like a robot trying to describe its own face.
