import React, { FC } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import styled, { css, DefaultTheme } from 'styled-components'
import '../assets/fonts/fonts.css'
import { Container } from './container'
import { FunkyBorder, funkyBorderStyle } from './funky-border'

interface LayoutProps {
  headerContent?: JSX.Element
  funkyBorder?: boolean
  logoGradient?: boolean
  whiteHamburger?: keyof DefaultTheme['colors']
}

interface TopSectionProps {
  funkyBorder?: boolean
}

export const Layout: FC<LayoutProps> = ({
  headerContent,
  funkyBorder,
  children,
  logoGradient,
  whiteHamburger,
}) => {
  return (
    <>
      <TopSection funkyBorder={funkyBorder}>
        <Header logoGradient={logoGradient} whiteHamburger={whiteHamburger} />
        {headerContent && (
          <HeaderContentContainer>
            <div>{headerContent}</div>
          </HeaderContentContainer>
        )}
        {funkyBorder && <FunkyBorder bottom />}
      </TopSection>
      <main>{children}</main>
      <Footer />
    </>
  )
}

const TopSection = styled.section<TopSectionProps>`
  ${({ theme, funkyBorder }) => css`
    background: linear-gradient(
      49.79deg,
      ${theme.colors.blue} -21.04%,
      ${theme.colors.red} 57.35%,
      ${theme.colors.orange} 136.6%
    );

    ${funkyBorder
      ? css`
          ${funkyBorderStyle('bottom')}
        `
      : css`
          background: white;
        `}
  `}
`

const HeaderContentContainer = styled(Container)`
  margin-top: 1rem;

  & > div {
    max-width: 37.5rem;
  }
`
