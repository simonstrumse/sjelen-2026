# Sjelen 2026 - Design Exploration

20 unique design concepts for Amanda Delara's 2026 project "Sjelen" (The Soul).

## Overview

This project showcases 20 different design variants for a minimalist landing page, all centered around the turquoise theme (#03d3b1) that represents calmness and tranquility.

## Design Concepts

### Diverse Concepts (1-10)
Exploring vastly different aesthetic directions while maintaining the core vision:

1. **Meditative Breath** - Pure zen simplicity with breathing form
2. **Oceanic Depths** - Water-like flowing gradients
3. **Sacred Portal** - Centered dramatic portal effect
4. **Infinite Space** - Ultra-minimal ghost design
5. **Whispered Secret** - Opacity breathing with asymmetry
6. **Luminous Field** - Full background breathing
7. **Floating Garden** - Shadow breathing with asymmetry
8. **Horizon Line** - Sharp architectural serenity
9. **Pulse** - Typography breathing like a heartbeat
10. **Ethereal Portal** - Abstract oceanic gradients

### Meditative Variations (11-20)
All based on meditative stillness but exploring different animation approaches:

11. **Breathing Space** - Background breathes
12. **Living Typography** - Text glows and breathes
13. **Central Mandala** - Breathing circle focal point
14. **Shadow Meditation** - Shadow instead of light
15. **Transparent Breath** - Form materializes/dematerializes
16. **Poetic Stillness** - Centered with poetry
17. **Ghost Zen** - Ghost inputs, maximum minimal
18. **Levitating Form** - Glow + shadow levitation
19. **Intimate Breath** - Tighter cozy spacing
20. **Sacred Geometry** - Golden ratio positioning

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (v4 with @theme)
- **Framer Motion** (animations)
- **Vercel** (deployment)

## Project Structure

```
sjelen-2026/
├── app/
│   ├── page.tsx                    # Gallery selector
│   ├── v1-meditative-breath/       # Variant 1
│   ├── v2-oceanic-depths/          # Variant 2
│   └── ... (20 variants total)
├── components/
│   ├── shared/                     # Reusable components
│   ├── animations/                 # Animation wrappers
│   └── variants/                   # Variant-specific
├── lib/
│   ├── constants.ts                # Variant configs
│   └── animation-configs.ts        # Framer Motion presets
└── types/
    └── index.ts                    # TypeScript types
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the gallery of all variants.

## Deployment

Deploy to Vercel with a single command:

```bash
vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deployments.

## URLs

- `/` - Gallery showing all 20 variants
- `/v1-meditative-breath` - Variant 1
- `/v2-oceanic-depths` - Variant 2
- ... (through v20)

## Design Philosophy

All designs honor the core vision:
- **Turquoise (#03d3b1)** represents calmness and tranquility
- **Minimalist aesthetic** maintains mystery
- **Breathing animations** create meditative presence
- **Norwegian language** for form labels
- **Mobile-first** responsive design

## Artist

**Amanda Delara** - 2026 Project "Sjelen"

---

Built with ❤️ using Next.js, TypeScript, Tailwind CSS & Framer Motion
