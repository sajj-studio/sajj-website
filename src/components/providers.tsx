'use client'

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './sc-theme'
import { GlobalStyles } from './global-styles'

export function Providers({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
