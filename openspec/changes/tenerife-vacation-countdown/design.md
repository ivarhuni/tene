## Context

A new standalone React/TypeScript/Vite static website. No existing codebase is affected. The site must replicate the tooling setup from ivarhuni/hypnotize (same ESLint config, Prettier config, Tailwind CSS, Framer Motion) while presenting a bright vacation-themed countdown.

## Goals / Non-Goals

**Goals:**
- Single-page app with a flip-clock countdown to June 15, 2026 10:00 (Tenerife local time, WET/UTC+1 in summer)
- Flip card animation (CSS 3D perspective) for each digit panel
- Animated sun with rotating rays via Framer Motion
- Bright colour palette: deep sky blue background, golden yellow / amber / orange accents
- Match hypnotize toolchain exactly: React 18 + TypeScript + Vite 5 + Tailwind 3 + Framer Motion 11 + ESLint 8 + Prettier

**Non-Goals:**
- No i18n (English only)
- No routing or multi-page layout
- No backend, database, or user accounts
- No deployment pipeline (gh-pages optional, not required now)

## Decisions

### Flip-clock rendering: CSS 3D card + React state
- Each digit is a `<FlipCard>` component that holds a "current" and "next" face
- On tick, if the digit value changes, trigger a CSS `rotateX(-180deg)` transition on the top-half card (classic split-flap effect)
- **Why CSS over JS animation library**: Smoother hardware-accelerated rendering; only Framer Motion used for the sun/glow effects to keep concerns separate

### Timezone handling: hardcoded UTC target
- Target = `new Date('2026-06-15T09:00:00Z')` (10:00 WET = UTC+1, so 09:00 UTC)
- `useCountdown` hook computes `Math.max(0, target - Date.now())` every second via `setInterval`
- **Why not Intl.DateTimeFormat for countdown**: Overkill; fixed UTC offset is safe for a single hardcoded date

### Component structure
```
src/
  components/
    FlipCard.tsx          # Single digit flip panel
    FlipUnit.tsx          # Label + pair of FlipCards (DAYS, HRS, MIN, SEC)
    CountdownClock.tsx    # Assembles all FlipUnits
    Sun.tsx               # Animated sun with rotating rays (Framer Motion)
    SunshineBackground.tsx # Full-screen gradient + decorative rays layer
  hooks/
    useCountdown.ts       # Returns { days, hours, minutes, seconds }
  App.tsx
  main.tsx
  index.css               # Tailwind directives
```

### Colour palette (Tailwind custom extension)
| Token | Hex | Usage |
|---|---|---|
| `sunshine-400` | #FFD700 | Sun body, clock face top |
| `sunshine-500` | #FFA500 | Sun glow, clock border |
| `sky-deep` | #0EA5E9 | Background gradient top |
| `ocean-blue` | #0369A1 | Background gradient bottom |
| `flip-dark` | #1E293B | Digit text, card background |

### Framer Motion usage
- `Sun` component: continuous `rotate` animation (0→360, infinite, 20s linear) on the ray group
- Ambient glow pulse: `scale` 1→1.05→1, repeat, 3s ease-in-out on the sun circle

## Risks / Trade-offs

- [CSS 3D flip on Safari] Minor rendering glitch with `backface-visibility` → Mitigation: add `-webkit-backface-visibility: hidden` via Tailwind arbitrary properties
- [Timezone edge case] If user's system clock is wrong, countdown will be off → Acceptable; no server time sync needed for a fun personal page
- [Framer Motion bundle size ~50 KB gzipped] Small site, acceptable trade-off for polished animation quality
