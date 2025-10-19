# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a landing page project for artist Amanda Delara's 2026 project "Sjelen" (The Soul). The project consists of:
1. **first-sketch.html** - Original minimal static HTML prototype
2. **sjelen-2026/** - Next.js application with 20 design variants for exploration

**Key Context:**
- Brand color: `#03d3b1` (turquoise) - symbolizes calmness/tranquility
- Language: Norwegian (no)
- Artist name: DELARA (uppercase)
- Project: 2026 release, working title "Sjelen"
- Target: Email/phone signup collection (Mailchimp integration pending)
- Original website archived in `original/`

## Development Commands

**Next.js Application (sjelen-2026/):**
```bash
cd sjelen-2026

# Install dependencies
npm install

# Development server with Turbopack (port 3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Architecture

### Tech Stack
- **Next.js 15.5.6** with App Router
- **React 19.1.0**
- **TypeScript 5**
- **Tailwind CSS v4** (using new `@theme` syntax)
- **Framer Motion** for animations

### Project Structure

```
sjelen-2026/
├── app/
│   ├── page.tsx                    # Main landing page (selected design)
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles + custom classes
│   └── v1-meditative-breath/       # Design variant 1
│   └── v2-oceanic-depths/          # Design variant 2
│   └── ... (20 variants total)     # Each with page.tsx
├── components/
│   ├── SubscribeForm.tsx           # Main form component (client)
│   ├── shared/
│   │   ├── Logo.tsx                # DELARA logo component
│   │   ├── Header.tsx              # Reusable header
│   │   ├── Input.tsx               # Form input
│   │   ├── Button.tsx              # Form button
│   │   └── FormContainer.tsx       # Form wrapper
│   └── animations/
│       ├── BreathingGlow.tsx       # Glow animation wrapper
│       ├── BreathingShadow.tsx     # Shadow animation wrapper
│       ├── BreathingGlowAndShadow.tsx  # Combined animation
│       └── CentralMandala.tsx      # Mandala breathing effect
└── public/                         # Static assets
```

### Key Design Patterns

**Global CSS Classes (globals.css):**
- `.stone-surface` - Main background with gradient + texture overlays
- `.stone-button` - Button with inset shadows and hover states
- `.animate-serene` - Slow breathing pulse animation (16s)
- `.animate-serene-delay` - Delayed breathing pulse (24s, 6s delay)

**Custom CSS Variables:**
```css
--turquoise: #03d3b1
--background: #03d3b1
--foreground: #ffffff
```

**Tailwind v4 Theme:**
Defined inline in globals.css using `@theme inline` directive.

**Form Handling:**
- `SubscribeForm.tsx` is a client component ("use client")
- Currently uses mock submission (setTimeout)
- TODO: Mailchimp integration needed
- Norwegian placeholders: "E-postadresse", "Telefonnummer"
- Success message: "Takk for at du melder deg på."

## Language & Content

- All UI text must be in Norwegian
- Artist name: "DELARA" (always uppercase in header)
- Year display: "2026" (in header)
- Form fields: email (required), phone (required)
- Button text: "Meld meg på" (Subscribe)

## Design System

**Colors:**
- Primary: `#03d3b1` (turquoise)
- Gradient: `#029d86` → `#04ccb2` → `#029d86`
- Text: white (#ffffff)
- Inputs: frosted glass effect with white/14% opacity

**Typography:**
- Font stack: 'Helvetica Neue', Helvetica, Arial, sans-serif
- Weight: 500 (body default)
- Letter spacing: Wide tracking for headings/buttons

**Visual Effects:**
- Stone/glass texture using gradients + SVG noise
- Frosted glass inputs with backdrop-blur
- Breathing animations (slow, meditative)
- Inset shadows for depth (carved stone aesthetic)

## Important Notes

**Turbopack:**
All scripts use `--turbopack` flag. Next.js 15+ uses Turbopack by default.

**Client vs Server Components:**
- Most components are server components (default)
- `SubscribeForm.tsx` uses "use client" for form state/events
- Animation components use "use client" for Framer Motion

**Responsive Design:**
- Mobile-first approach
- Breakpoints handled via Tailwind (md:, lg:, etc.)
- Header scales from text-sm to text-base
- Form max-width: sm (24rem) on mobile, md (28rem) on desktop

**File Organization:**
- 20 design variants live in separate route folders (v1-*, v2-*, etc.)
- Shared components in `components/shared/`
- Animation wrappers in `components/animations/`
- Main landing uses selected design directly in `app/page.tsx`
