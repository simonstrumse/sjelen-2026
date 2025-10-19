# Repository Guidelines

## Project Structure & Module Organization
- Root directories hold historical context: `first-sketch.html`, `original/`, and briefing files (`CLAUDE.md`, `artists-instructions.md`).
- Active product lives in `sjelen-2026/`, a Next.js 15 app using the App Router. Key folders: `app/` for routes and pages, `components/` for shared UI, `lib/` for configs/utilities, `public/` for static assets, and `types/` for TypeScript contracts.
- Animation presets and constants live in `sjelen-2026/lib/`; variant-specific screens are namespaced under `app/v{n}-*/`.

## Build, Test, and Development Commands
Run all commands from `sjelen-2026/`:
- `npm run dev` — start the local dev server (Turbopack, hot reload).
- `npm run build` — produce a production build.
- `npm start` — serve the compiled build locally.
- `npm run lint` — execute ESLint with the Next.js config.

## Coding Style & Naming Conventions
- TypeScript + React with functional components; prefer `use client` only when required.
- Tailwind CSS v4 powers styling; keep class lists readable and use shared tokens from `lib/` where possible.
- Use 2 spaces (default Prettier style) and PascalCase for components, camelCase for helper functions/constants, SCREAMING_SNAKE_CASE for exported theme tokens.
- Run `npm run lint` before commits; address accessibility warnings (e.g., `react/no-unescaped-entities`).

## Testing Guidelines
- No automated test suite yet; new features should include unit or integration coverage when introducing business logic.
- Start with Jest + Testing Library (recommended) and mirror the route/component structure. Name files `*.test.ts`/`*.test.tsx` alongside the code.
- For visual changes, capture screenshots or Loom clips to include in PRs until automated tests exist.

## Commit & Pull Request Guidelines
- Follow the existing style: short imperative summaries (`Square off CTA top surface`, `Adjust lighting...`). Mention scope if relevant (`app/page.tsx` or `components/...`).
- Each PR should include: purpose, high-level summary, testing notes (`npm run lint`, screenshots), and links to briefs or tickets.
- Keep changes focused; large aesthetic refreshes benefit from staged commits (e.g., structure → styling → copy).

## Security & Configuration Tips
- Environment variables (e.g., Mailchimp keys) belong in Vercel project settings or `.env.local` files that stay uncommitted.
- Static assets such as the DELARA logo reside in `public/`; confirm licensing before adding new media.
