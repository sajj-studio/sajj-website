import React, { createContext, FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export interface PageContextValue {
  originalPath: string
  lang: 'en-US' | 'fr-CA'
}

export const PageContext = createContext<PageContextValue>({
  originalPath: '/',
  lang: 'en-US',
})

interface PageContextControllerProps {
  value: PageContextValue
}

export const PageContextController: FC<PageContextControllerProps> = ({
  value,
  children,
}) => {
  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(value.lang)
  }, [i18n, value.lang])

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>
}
