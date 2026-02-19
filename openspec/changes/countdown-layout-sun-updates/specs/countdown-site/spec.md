## MODIFIED Requirements

### Requirement: Responsive layout
The system SHALL render the flip-clock block at the top of the page, followed by the sun graphic, title, and subtitle below it.

#### Scenario: Clock is above sun on load
- **WHEN** the page is loaded
- **THEN** the countdown clock container SHALL appear above the animated sun and title text in the visual stacking order

#### Scenario: Mobile viewport
- **WHEN** the viewport width is 375px
- **THEN** the flip clock units SHALL be visible at the top, with the sun and title below, without horizontal scrolling

### Requirement: Animated sun with rotating rays
The system SHALL display a sun that is 15% larger than the original, with a kid photo clipped as a circle at ~70% of the sun radius centred inside the sun body.

#### Scenario: Sun is enlarged
- **WHEN** the page is loaded
- **THEN** the sun circle radius SHALL be approximately 92px (original 80 × 1.15) in SVG coordinates

#### Scenario: Kid photo inside sun
- **WHEN** the page is loaded
- **THEN** a circular-cropped portrait photo SHALL be visible centred inside the sun body, clipped to roughly 70% of the sun radius (≈64px clip radius)

#### Scenario: Photo does not overflow sun
- **WHEN** the page is loaded
- **THEN** the photo clip circle SHALL be fully contained within the sun body circle with no visible overflow
