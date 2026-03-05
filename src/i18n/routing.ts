import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/contact': {
      en: '/contact',
      fr: '/nous-contacter',
    },
    '/portfolio': {
      en: '/portfolio',
      fr: '/portfolio',
    },
  },
})

export type Locale = (typeof routing.locales)[number]
