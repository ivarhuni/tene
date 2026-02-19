## Context

Existing `Sun.tsx` uses a fixed SVG viewBox of `-170 -170 340 340` with a sun circle radius of 80 and ray start at 90. `App.tsx` renders Sun → title → clock vertically. The kid photo is a transparent-background PNG at `src/assets/kid.png`.

## Goals / Non-Goals

**Goals:**
- Swap JSX order in App.tsx: clock card first, then sun+title+subtitle
- Scale all Sun SVG geometry by ×1.15 (radius 80→92, ray start 90→103.5, ray length 60→69)
- Clip kid photo as a circle at 70% of sun radius (radius ≈64) centred in the sun using SVG `<clipPath>` + `<image>`
- Keep Framer Motion animations intact

**Non-Goals:**
- No layout changes on mobile beyond what naturally follows from the reorder
- No new dependencies
- No changes to FlipCard, FlipUnit, CountdownClock, or SunshineBackground

## Decisions

### Photo embedding: SVG `<image>` with `<clipPath>`
- A `<clipPath id="kidClip">` containing `<circle r={64}/>` constrains the photo to a circle
- `<image href={kidPng} x={-64} y={-64} width={128} height={128} clipPath="url(#kidClip)" preserveAspectRatio="xMidYMid slice"/>` renders it centred
- **Why not CSS border-radius on an `<img>`**: The sun body is already SVG; keeping the photo inside the same SVG coordinate system avoids z-index / overflow issues with the rotating rays and glow layers

### Scale factor: multiply all radii by 1.15
- SVG canvas grows proportionally: viewBox `-195.5 -195.5 391 391`, outer glow div `280→322`
- Ray count stays at 12, only geometry values change

## Risks / Trade-offs

- [Photo aspect ratio] If the photo is not square, `preserveAspectRatio="xMidYMid slice"` crops symmetrically — acceptable for a face portrait
- [Vite asset import] Must import PNG with `import kidPng from '../assets/kid.png'` so Vite hashes and bundles it correctly
