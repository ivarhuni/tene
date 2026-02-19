## ADDED Requirements

### Requirement: Countdown targets June 15, 2026 at 10:00 Tenerife time
The system SHALL count down to June 15, 2026 10:00:00 local Tenerife time (WET, UTC+1 in summer, equivalent to 2026-06-15T09:00:00Z).

#### Scenario: Countdown displays correct time remaining
- **WHEN** the page is loaded before the target date
- **THEN** the clock SHALL display the correct number of days, hours, minutes, and seconds remaining, updated every second

#### Scenario: Countdown reaches zero
- **WHEN** the current time is at or past the target date/time
- **THEN** all units SHALL display 00 and the page SHALL show a "We're here!" message

---

### Requirement: Flip-clock style display
The system SHALL render each time unit (days, hours, minutes, seconds) as a split-flap flip-clock panel with a 3D card-flip animation.

#### Scenario: Digit changes trigger flip animation
- **WHEN** a digit value increments or decrements
- **THEN** the panel SHALL animate a top-half card rotating downward (rotateX -180 deg) revealing the new value, mimicking a classic airport departure board

#### Scenario: Two-digit display per unit
- **WHEN** a unit value is a single digit (0–9)
- **THEN** the panel SHALL zero-pad the value to two digits (e.g. "07")

#### Scenario: Units are labelled
- **WHEN** the clock is rendered
- **THEN** each flip unit SHALL display a label below the panels: DAYS, HRS, MIN, SEC

---

### Requirement: Bright sunshine color scheme
The system SHALL use a bright, sun-drenched color palette with deep-sky-blue background gradient and golden/amber/orange accents for the clock and sun elements.

#### Scenario: Background gradient rendered
- **WHEN** the page loads
- **THEN** the full viewport background SHALL show a gradient from deep sky blue (top) to ocean blue (bottom)

#### Scenario: Clock panels use golden accent
- **WHEN** the flip clock is rendered
- **THEN** the card panels SHALL use a dark background (`#1E293B`) with bright white digits, and the panel borders SHALL use golden/amber color

---

### Requirement: Animated sun with rotating rays
The system SHALL display a large decorative sun graphic with continuously rotating rays using Framer Motion.

#### Scenario: Rays rotate continuously
- **WHEN** the page is loaded
- **THEN** the sun's ray group SHALL rotate 360 degrees on a continuous loop (approximately 20 seconds per full rotation)

#### Scenario: Sun pulses gently
- **WHEN** the page is loaded
- **THEN** the sun circle SHALL scale between 1.0 and 1.05 in a repeating ease-in-out pulse (approximately 3 second cycle)

---

### Requirement: Destination title and branding
The system SHALL display a title such as "Tenerife ☀️" and a subtitle above the countdown clock.

#### Scenario: Title is visible on load
- **WHEN** the page is loaded
- **THEN** the heading "Tenerife" (or similar vacation title) SHALL be prominently rendered above the clock with a bright, readable font

---

### Requirement: Responsive layout
The system SHALL render correctly on mobile (≥320px), tablet, and desktop viewports.

#### Scenario: Mobile viewport
- **WHEN** the viewport width is 375px
- **THEN** the flip clock units SHALL stack or scale so all four units are visible without horizontal scrolling

#### Scenario: Desktop viewport
- **WHEN** the viewport width is 1280px
- **THEN** all four flip units SHALL be displayed in a single horizontal row

---

### Requirement: Tech stack matches hypnotize
The system SHALL use React 18, TypeScript, Vite 5, Tailwind CSS 3, Framer Motion 11, ESLint 8 (with @typescript-eslint and react-hooks plugins), and Prettier with the hypnotize `.prettierrc` configuration.

#### Scenario: Project lints cleanly
- **WHEN** `npm run lint` is executed
- **THEN** it SHALL exit with code 0 and no warnings

#### Scenario: Project builds successfully
- **WHEN** `npm run build` is executed
- **THEN** it SHALL produce a `dist/` folder with no TypeScript or Vite errors
