# Sajj Website

Marketing website for Sajj, built with Next.js 16 (App Router), React 19, TypeScript, Styled Components, and next-intl for bilingual (EN/FR) support. Deployed on Netlify.

---

## Quick Start

**Requirements:** Node.js 20+, Yarn 4.x

```bash
yarn install
yarn dev        # http://localhost:3000
```

Other commands:

| Command        | Description                        |
| -------------- | ---------------------------------- |
| `yarn build`   | Production build                   |
| `yarn start`   | Serve the production build locally |
| `yarn lint`    | Run ESLint                         |

Pre-commit hooks run ESLint and Prettier automatically on staged files via Husky + lint-staged. To format manually:

```bash
npx prettier --write .
```

---

## Tooling Overview

| Tool | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16 | Framework (App Router) |
| [React](https://react.dev) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org) | 5 | Static typing |
| [Styled Components](https://styled-components.com) | 6 | CSS-in-JS styling |
| [next-intl](https://next-intl.dev) | 4 | Internationalisation (EN/FR) |
| [ESLint](https://eslint.org) | 9 | Linting (flat config) |
| [Prettier](https://prettier.io) | 3 | Code formatting |
| [Husky](https://typicode.github.io/husky) + [lint-staged](https://github.com/lint-staged/lint-staged) | — | Pre-commit hooks |
| [Netlify](https://netlify.com) | — | Hosting & form handling |

### Internationalisation

Routing is locale-prefixed. The default locale (`en`) is served without a prefix in development but with one in production.

| Locale | Home | Contact |
|--------|------|---------|
| English | `/en` | `/en/contact` |
| French | `/fr` | `/fr/nous-contacter` |

Translation strings live in `src/messages/{locale}.json`. Add a key to both files whenever you add copy.

### Styling

All styling uses Styled Components. The theme object is defined in [src/components/sc-theme.ts](src/components/sc-theme.ts) and made available via the providers in [src/components/providers.tsx](src/components/providers.tsx). Global baseline styles are in [src/components/global-styles.ts](src/components/global-styles.ts).

Styled Components requires a server-side registry to avoid a flash of unstyled content during SSR — this is wired up in [src/components/registry.tsx](src/components/registry.tsx).

---

## File Overview

```
sajj-website/
├── src/
│   ├── app/                        Next.js App Router entry points
│   │   ├── layout.tsx              Root layout (wraps the whole app)
│   │   ├── manifest.ts             Web app manifest
│   │   ├── not-found.tsx           Global 404 (before locale is known)
│   │   └── [locale]/               Locale-prefixed routes
│   │       ├── layout.tsx          Locale layout (providers, fonts, global styles)
│   │       ├── page.tsx            Home page
│   │       ├── not-found.tsx       Locale-aware 404
│   │       └── contact-us/
│   │           └── page.tsx        Contact page
│   │
│   ├── components/                 Shared UI components
│   │   ├── providers.tsx           Wraps app in theme + intl providers
│   │   ├── registry.tsx            Styled Components SSR registry
│   │   ├── sc-theme.ts             Design tokens / theme object
│   │   ├── global-styles.ts        CSS baseline / resets
│   │   ├── layout.tsx              Page layout shell (header + footer)
│   │   ├── header.tsx              Site header with nav and language switcher
│   │   ├── footer.tsx              Site footer
│   │   ├── language-switcher.tsx   EN/FR toggle
│   │   ├── contact-form.tsx        Contact form (submitted via Netlify Forms)
│   │   ├── typography.tsx          Heading / body text primitives
│   │   ├── button.tsx              Button component
│   │   ├── link.tsx                i18n-aware link wrapper
│   │   └── ...                     Other page-section components
│   │
│   ├── i18n/
│   │   ├── routing.ts              Locale list, default locale, localised pathnames
│   │   └── request.ts              Server-side locale resolution + message loading
│   │
│   ├── messages/
│   │   ├── en.json                 English copy
│   │   └── fr.json                 French copy
│   │
│   ├── assets/
│   │   ├── fonts/                  Rubik font files + fonts.css
│   │   └── images/                 SVG icons (as TSX) + static images
│   │
│   ├── lib/
│   │   └── static-content.ts       Any copy not yet moved to i18n messages
│   │
│   ├── types/
│   │   └── styled.d.ts             Augments DefaultTheme with sc-theme shape
│   │
│   └── navigation.ts               Re-exports next-intl navigation helpers
│                                   (use instead of next/link / next/navigation)
│
├── public/
│   ├── favicon.png
│   └── __forms.html                Netlify Forms detection stub
│
├── next.config.mjs                 Next.js config (next-intl plugin, image domains)
├── netlify.toml                    Netlify build settings
├── eslint.config.mjs               ESLint flat config
├── tsconfig.json                   TypeScript config
└── package.json
```

### Key conventions

- **Navigation:** Always import `Link`, `useRouter`, `redirect`, etc. from `src/navigation.ts`, not from `next/link` or `next/navigation`. This ensures locale is preserved automatically.
- **Translations:** Use the `useTranslations` hook (from `next-intl`) inside components; use `getTranslations` in Server Components and page metadata.
- **Images:** Remote images must come from `images.ctfassets.net` (Contentful). All other images live in `src/assets/images/`.
