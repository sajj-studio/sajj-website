import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { theme } from './sc-theme'

interface HamburgerProps {
  isOpen: boolean
  onClick: () => void
  colorVariant?: 'standard' | 'grayscale'
}

interface BunsProps {
  isOpen: boolean
}

export const Hamburger: FC<HamburgerProps> = ({
  isOpen,
  onClick,
  colorVariant,
}) => (
  <Buns onClick={onClick} isOpen={isOpen}>
    <Line position="top" isOpen={isOpen} lineColor={getColor(colorVariant)} />
    <Line
      position="bottom"
      isOpen={isOpen}
      lineColor={getColor(colorVariant)}
    />
  </Buns>
)

function getColor(
  menuVariant: 'standard' | 'grayscale' | undefined
): string | undefined {
  switch (menuVariant) {
    case 'standard':
      return theme.colors.white
    case 'grayscale':
      return theme.colors.gray
  }
}

const Buns = styled.div<BunsProps>`
  ${({ isOpen, theme }) => css`
    height: 1.25rem;
    width: 2.625rem;
    position: relative;
    z-index: 105;

    ${isOpen &&
    css`
      position: fixed;
      right: 2.25rem;
    `}

    ${theme.media.desktop} {
      display: none;
    }
  `}
`

interface LineProps {
  position: 'top' | 'bottom'
  isOpen: boolean
  lineColor?: string | undefined
}
const Line = styled.div<LineProps>`
  background: white;
  position: absolute;
  display: block;
  width: 100%;
  height: 0.3125rem;

  border-radius: 0.125rem;
  transition: 0.2s;

  ${({ position, isOpen, lineColor, theme }) => {
    switch (position) {
      case 'top':
        return isOpen
          ? css`
              transform: rotate(45deg);
              top: calc(50% - 0.1875rem);
            `
          : css`
              top: 0;
              background: ${lineColor};
            `
      case 'bottom':
        return css`
          width: 1.875rem;
          background: ${lineColor};

          ${isOpen
            ? css`
                transform: rotate(-45deg);
                top: calc(50% - 0.2rem);
                width: 100%;
                background: ${theme.colors.white};
              `
            : css`
                bottom: 0;
                right: 0;
              `}
        `
    }
  }}
`
