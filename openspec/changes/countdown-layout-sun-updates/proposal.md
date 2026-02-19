## Why

Three visual improvements to the Tenerife countdown page: swap the vertical order of the clock and the sun/title block so the clock leads the page, enlarge the sun for more visual impact, and personalise the sun by embedding a photo of the traveller's kid in its centre.

## What Changes

- Vertical layout swap: flip-clock block rendered first (top), sun + title + subtitle rendered below it
- Sun enlarged by 15% (circle radius 80 → 92, ray start/length scaled proportionally)
- Kid's photo (`src/assets/kid.png`, transparent PNG) clipped as a circle inside the sun at ~70% of sun radius, centred using SVG `<clipPath>`

### Modified Capabilities
- `countdown-site`: layout order changed, sun component enlarged and now contains a photo asset

## Impact

- `src/App.tsx` — vertical order of JSX blocks
- `src/components/Sun.tsx` — SVG dimensions, radius values, new `<image>` + `<clipPath>` elements
- `src/assets/kid.png` — new static asset (already placed by user)
