import React, { FC } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import styled, { css } from 'styled-components'
import '../assets/fonts/fonts.css'
import { Container } from './container'
import { FunkyBorder, funkyBorderStyle } from './funky-border'

interface LayoutProps {
  headerContent?: JSX.Element
}

export const Layout: FC<LayoutProps> = ({ headerContent, children }) => {
  return (
    <>
      <TopSection>
        <Header />
        {headerContent && (
          <HeaderContentContainer>
            <div>{headerContent}</div>
          </HeaderContentContainer>
        )}
        <FunkyBorder bottom />
      </TopSection>
      <main>{children}</main>
      <Footer />
    </>
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
    ${funkyBorderStyle('bottom')}
  `}
`

const HeaderContentContainer = styled(Container)`
  margin-top: 1rem;

  & > div {
    max-width: 37.5rem;
  }
`
