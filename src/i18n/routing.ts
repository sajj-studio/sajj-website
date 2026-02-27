import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en-US', 'fr-CA'],
  defaultLocale: 'en-US',
  pathnames: {
    '/': '/',
    '/contact-us': {
      'en-US': '/contact-us',
      'fr-CA': '/nous-contacter',
    },
  },
})

export type Locale = typeof routing.locales[number]
