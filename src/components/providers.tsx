'use client'
import { ThemeProvider } from 'styled-components'
import { theme } from './sc-theme'
import { GlobalStyles } from './global-styles'
import { ReactNode } from 'react'

export function Providers({
  children,
}: {
  children: React.ReactNode
}): ReactNode {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
