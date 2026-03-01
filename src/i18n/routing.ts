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
  },
})

export type Locale = (typeof routing.locales)[number]
