## 1. Project Scaffold

- [ ] 1.1 Create `tenerife-countdown/` directory at repo root with Vite + React + TypeScript template
- [ ] 1.2 Add `package.json` with correct name, scripts (dev, build, lint, preview), and all dependencies matching hypnotize versions
- [ ] 1.3 Add `tsconfig.json` and `tsconfig.node.json` matching hypnotize config
- [ ] 1.4 Add `vite.config.ts` with `@vitejs/plugin-react`
- [ ] 1.5 Add `tailwind.config.js` with custom colour palette (sunshine-400, sunshine-500, sky-deep, ocean-blue, flip-dark)
- [ ] 1.6 Add `postcss.config.js`
- [ ] 1.7 Add `.eslintrc.json` matching hypnotize ESLint config
- [ ] 1.8 Add `.prettierrc` matching hypnotize Prettier config
- [ ] 1.9 Add `.gitignore`
- [ ] 1.10 Add `index.html` with correct title "Tenerife Countdown ☀️" and Google Font (e.g. Montserrat or similar)

## 2. Core Hook

- [ ] 2.1 Create `src/hooks/useCountdown.ts` that computes time remaining to `2026-06-15T09:00:00Z`
- [ ] 2.2 Hook returns `{ days, hours, minutes, seconds }` updated every second via `setInterval`
- [ ] 2.3 Hook clamps all values to 0 once target is reached

## 3. Flip Clock Components

- [ ] 3.1 Create `src/components/FlipCard.tsx` — single digit panel with 3D top-half flip animation (CSS perspective + rotateX)
- [ ] 3.2 Create `src/components/FlipUnit.tsx` — wraps two `FlipCard`s (tens + units digit) with a label below
- [ ] 3.3 Create `src/components/CountdownClock.tsx` — assembles DAYS, HRS, MIN, SEC units in a horizontal row
- [ ] 3.4 Implement zero-padding so single-digit values display as "07" etc.
- [ ] 3.5 Add "We're here! ☀️ Tenerife time!" message shown when countdown reaches zero

## 4. Sun Animation Components

- [ ] 4.1 Create `src/components/Sun.tsx` with a circular sun body and 8+ ray lines using SVG or divs
- [ ] 4.2 Wrap ray group in Framer Motion `motion.g` / `motion.div` with continuous 360° rotation (20s linear infinite)
- [ ] 4.3 Add Framer Motion scale pulse on the sun circle (1.0 → 1.05 → 1.0, 3s ease-in-out infinite)
- [ ] 4.4 Create `src/components/SunshineBackground.tsx` — full-viewport gradient background (sky-deep → ocean-blue) with decorative semi-transparent ray overlay

## 5. App Assembly & Styling

- [ ] 5.1 Create `src/App.tsx` composing `SunshineBackground`, `Sun`, page title "Tenerife ☀️", subtitle "Countdown to Paradise", and `CountdownClock`
- [ ] 5.2 Create `src/main.tsx` entry point
- [ ] 5.3 Create `src/index.css` with Tailwind directives (`@tailwind base/components/utilities`)
- [ ] 5.4 Style flip card panels: dark card background (`flip-dark`), bright white digits, golden border, rounded corners
- [ ] 5.5 Style unit labels: uppercase, small, amber/golden color
- [ ] 5.6 Style title: large, bold, white text with subtle text-shadow for legibility against the bright background
- [ ] 5.7 Ensure responsive layout: units scale down gracefully on mobile, remain in one row on desktop

## 6. Verify & Lint

- [ ] 6.1 Run `npm install` and confirm zero dependency errors
- [ ] 6.2 Run `npm run lint` and confirm exit code 0 with no warnings
- [ ] 6.3 Run `npm run build` and confirm clean `dist/` output
- [ ] 6.4 Run `npm run dev` and visually verify flip animation, sun rotation, correct countdown values, and responsive layout
