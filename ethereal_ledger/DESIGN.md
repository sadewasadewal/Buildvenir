---
name: Ethereal Ledger
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#484555'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#797587'
  outline-variant: '#c9c4d8'
  surface-tint: '#603ce2'
  primary: '#5e39e0'
  on-primary: '#ffffff'
  primary-container: '#7757fa'
  on-primary-container: '#fffbff'
  inverse-primary: '#cabeff'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#8f4a00'
  on-tertiary: '#ffffff'
  tertiary-container: '#b35e00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e6deff'
  primary-fixed-dim: '#cabeff'
  on-primary-fixed: '#1c0062'
  on-primary-fixed-variant: '#4816cb'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#ffdcc4'
  tertiary-fixed-dim: '#ffb780'
  on-tertiary-fixed: '#2f1400'
  on-tertiary-fixed-variant: '#6f3800'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  pitch-black: '#000000'
  stark-white: '#FFFFFF'
  border-subtle: '#E5E5E5'
  text-muted: '#6E6E73'
typography:
  headline-display:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '600'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 80px
---

## Brand & Style

This design system is engineered for a premium fintech experience that prioritizes clarity, intelligence, and a sense of institutional security. It draws heavily from **Corporate Minimalism**, blending the rigorous information density of developer documentation with the refined elegance of luxury financial interfaces. 

The aesthetic is defined by extreme whitespace, a strict monochrome palette, and a singular high-energy accent. The emotional goal is to evoke "quiet confidence"—where the UI disappears to let the user's financial data and decision-making take center stage. Every element is deliberate, using precise 1px borders and a subtle grid to communicate technical sophistication and modern reliability.

## Colors

The palette is anchored in a high-contrast monochrome foundation. **Stark White (#FFFFFF)** and **Off-white (#FAFAFA)** serve as the primary canvas, creating a "breathable" atmosphere. **Charcoal (#1A1A1A)** and **Black (#000000)** provide the structural weight for typography and primary navigation.

The **Primary Purple (#7C5CFF)** is used surgically. It is reserved for high-intent actions, active states, and critical data highlights. Neutral grays are used to define the information hierarchy, with a specific focus on low-opacity borders to maintain the "ultra-minimal" requirement without sacrificing structure.

## Typography

The typography system utilizes **Inter** for its neutral, geometric precision and exceptional legibility at all scales. Headlines use a tighter letter-spacing and heavier weights to command authority. 

To introduce a "technical" and "fintech" edge, **JetBrains Mono** is utilized for metadata, labels, and financial figures. This monospaced secondary font reinforces the feeling of a developer-grade, precise financial tool. All caps should be used sparingly for labels to distinguish them from interactive body text.

## Layout & Spacing

This design system employs a **Fixed Grid** philosophy for desktop to maintain a premium, editorial feel, transitioning to a fluid model for mobile devices. A strict 8px square grid governs all spatial relationships.

- **Desktop:** 12-column grid with 24px gutters and wide 64px margins to emphasize the monochrome whitespace.
- **Mobile:** 4-column fluid grid with 20px margins.
- **Rhythm:** Vertical spacing between sections should be aggressive (80px+) to ensure a high-end, uncluttered user experience. Components within a section should use tight 8px or 16px increments.

## Elevation & Depth

To maintain the ultra-minimal aesthetic, depth is primarily communicated through **Tonal Layering** and **Subtle Outlines** rather than heavy shadows.

- **Surface Tiers:** Backgrounds are `#FFFFFF`, while container elements (like cards or inputs) use `#FAFAFA` or a 1px border of `#E5E5E5`.
- **Shadows:** When necessary for modals or floating menus, use a "Hard/Soft" combination: a very sharp 1px stroke combined with a highly diffused, 2% opacity black shadow.
- **Interactive Depth:** Hover states should not use elevation; instead, they should shift the background color slightly or increase the border opacity to maintain a "flat" but responsive physical feel.

## Shapes

The shape language is sharp and disciplined. We use a **Soft (0.25rem)** base radius for standard components like input fields and buttons. This provides just enough approachable "softness" to feel modern without losing the professional, architectural edge of sharp corners. Larger containers like cards may scale up to a **0.5rem (rounded-lg)** radius, but never beyond that.

## Components

### Buttons
Primary buttons are solid `#1A1A1A` with white text. Secondary buttons are 1px borders of the same charcoal. The primary purple `#7C5CFF` is only used for "Success" actions or singular calls to action to drive conversion.

### Cards & Containers
Cards should have no background fill on white surfaces, relying instead on a 1px `#E5E5E5` border. On off-white surfaces, cards can be stark white with a very faint ambient shadow.

### Input Fields
Inputs are minimalist: a bottom-border only or a very light 4-sided stroke. Focus states switch the border to `#7C5CFF` or `#000000` with a 1px thickness increase.

### Data Visualizations
Charts should use thin line weights (1px to 1.5px). Use the primary purple for the main data line and neutral grays for grid lines and axes. Labels for charts must use the `data-mono` typography token.

### Icons
Use clean, 2px stroke weight line icons. Avoid filled icons unless indicating an active state in a navigation bar. Icons should always match the color of the adjacent text to maintain visual harmony.