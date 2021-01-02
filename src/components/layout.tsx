import React, { FC } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { GlobalStyles } from './global-styles'
import styled, { css, ThemeProvider } from 'styled-components'
import { theme } from './sc-theme'
import '../assets/fonts/fonts.css'
import { Container } from './container'

interface LayoutProps {
  headerContent?: JSX.Element
}

export const Layout: FC<LayoutProps> = ({ headerContent, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <TopSection>
        <Header />
        {headerContent && (
          <HeaderContentContainer>
            <div>{headerContent}</div>
          </HeaderContentContainer>
        )}
      </TopSection>
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

const TopSection = styled.section`
  ${({ theme }) => css`
    background: linear-gradient(
      49.79deg,
      ${theme.colors.blue} -21.04%,
      ${theme.colors.red} 57.35%,
      ${theme.colors.orange} 136.6%
    );
    padding-bottom: 2.5rem;
  `}
`

const HeaderContentContainer = styled(Container)`
  margin-top: 1rem;

  & > div {
    max-width: 37.5rem;
  }
`
