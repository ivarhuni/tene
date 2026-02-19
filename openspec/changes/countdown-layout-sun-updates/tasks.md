## 1. Layout Swap

- [ ] 1.1 In `App.tsx`, move the flip-clock `<div>` (and date subtitle below it) to render before the `<Sun>` / title / subtitle block

## 2. Sun Enlargement

- [ ] 2.1 In `Sun.tsx`, update outer glow div size: `280 → 322` (×1.15)
- [ ] 2.2 Update SVG canvas: `width/height 340 → 391`, viewBox `-195.5 -195.5 391 391`
- [ ] 2.3 Update sun circle radius: `r={80} → r={92}`
- [ ] 2.4 Update ray constants: `RAY_START 90 → 103.5`, `RAY_LENGTH 60 → 69`
- [ ] 2.5 Update shine highlight circle: `cx={-20} cy={-20} r={30} → r={34.5}`

## 3. Kid Photo in Sun

- [ ] 3.1 Add `import kidPng from '../assets/kid.png'` at top of `Sun.tsx`
- [ ] 3.2 Add `<defs><clipPath id="kidClip"><circle cx={0} cy={0} r={64} /></clipPath></defs>` inside the SVG
- [ ] 3.3 Add `<image>` element centred at origin, clipped by `#kidClip`, using `preserveAspectRatio="xMidYMid slice"`, rendered above the sun body but below the shine highlight
- [ ] 3.4 Add image type declaration if needed (`src/types/images.d.ts`) so TypeScript accepts `.png` imports

## 4. Verify

- [ ] 4.1 Run `npm run lint` — confirm 0 warnings
- [ ] 4.2 Run `npm run build` — confirm clean dist output
- [ ] 4.3 Visual check in browser: clock on top, sun+title below, photo inside sun, rays still rotating
