# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev          # Start dev server at http://localhost:3000
yarn build        # Production build
yarn start        # Serve production build locally
yarn lint         # Run ESLint
npx prettier --write .  # Format manually (pre-commit hooks run this automatically)
```

Requirements: Node.js 20+, Yarn 4.x

## Architecture

**Stack:** Next.js 16 (App Router), React 19, TypeScript, Styled Components 6, next-intl 4 (EN/FR), deployed on Netlify.

**Routing:** All routes are locale-prefixed under `src/app/[locale]/`. Localized pathnames are defined in `src/i18n/routing.ts` (e.g. `/en/contact` vs `/fr/nous-contacter`).

**Internationalisation:** Always import `Link`, `useRouter`, `redirect`, etc. from `src/navigation.ts` — never from `next/link` or `next/navigation`. This preserves locale automatically. Use `useTranslations` in Client Components and `getTranslations` in Server Components/metadata. Translation strings live in `src/messages/en.json` and `src/messages/fr.json` — add keys to both files when adding copy.

**Styling:** All styling uses Styled Components. Design tokens (colors, breakpoints, transitions) are in `src/components/sc-theme.ts` and typed via `src/types/styled.d.ts`. Global baseline styles are in `src/components/global-styles.ts`. The SSR registry in `src/components/registry.tsx` is required to avoid flash of unstyled content — do not remove it.

**Forms:** Contact form submissions go through Netlify Forms. `public/__forms.html` is a static stub required for Netlify to detect the form at build time.

**Remote images:** Must originate from `images.ctfassets.net` (Contentful CDN) — this is the only allowed remote image domain in `next.config.mjs`.
