import React, { FC } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { GlobalStyles } from './global-styles'
import { ThemeProvider } from 'styled-components'
import { theme } from './sc-theme'
import '../assets/fonts/fonts.css'

export const Layout: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}
