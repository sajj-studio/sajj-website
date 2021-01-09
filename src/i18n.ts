import i18n from 'i18next'
import translations from './translations.json'

i18n.init({
  resources: translations,
  fallbackLng: 'en',
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
})

export default i18n
