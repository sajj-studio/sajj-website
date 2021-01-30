import React, { FC } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import styled, { css } from 'styled-components'
import '../assets/fonts/fonts.css'
import { Container } from './container'
import { FunkyBorder, funkyBorderStyle } from './funky-border'

interface LayoutProps {
  headerContent?: JSX.Element
  funkyHeight?: 'half' | 'quarter'
  headerVariant: 'standard' | 'grayscale'
  standardDesktop?: boolean
}

export const Layout: FC<LayoutProps> = ({
  headerContent,
  children,
  funkyHeight,
  headerVariant,
  standardDesktop,
}) => {
  return (
    <>
      <TopSection
        topSectionVariant={headerVariant}
        borderHeight={funkyHeight}
        variantDesktop={standardDesktop}
      >
        <Header
          logoGradient={headerVariant}
          variant={headerVariant}
          variantDesktop={standardDesktop}
        />
        {headerContent && (
          <HeaderContentContainer>
            <div>{headerContent}</div>
          </HeaderContentContainer>
        )}
        <FunkyBorder bottom height={funkyHeight} />
      </TopSection>
      <main>{children}</main>
      <Footer />
    </>
  )
}

interface TopSectionProps {
  topSectionVariant: 'standard' | 'grayscale'
  borderHeight?: 'half' | 'quarter'
  variantDesktop?: boolean
}

const TopSection = styled.section<TopSectionProps>`
  ${({ theme, topSectionVariant, borderHeight, variantDesktop }) => css`
    ${topSectionVariant === 'grayscale' &&
    css`
          padding-bottom: 40px;
          background: linear-gradient(
            180deg,
            ${theme.colors.white} 63.54%,
            #f2f2f2 100%
          );
          ${funkyBorderStyle('bottom', borderHeight)}}

          ${theme.media.desktop} {
            ${funkyBorderStyle('bottom')}}
            margin-bottom: 5rem;
          }

          ${
            variantDesktop &&
            css`
              ${theme.media.desktop} {
                background: linear-gradient(
                  49.79deg,
                  ${theme.colors.blue} -21.04%,
                  ${theme.colors.red} 57.35%,
                  ${theme.colors.orange} 136.6%
                );
              }
            `
          }

  `}

    ${topSectionVariant === 'standard' &&
    css`
    background: linear-gradient(
    49.79deg,
    ${theme.colors.blue} -21.04%,
    ${theme.colors.red} 57.35%,
    ${theme.colors.orange} 136.6%
  );
  ${funkyBorderStyle('bottom', borderHeight)}}
  `}
  `}
`

const HeaderContentContainer = styled(Container)`
  margin-top: 1rem;

  & > div {
    max-width: 37.5rem;
  }
`
