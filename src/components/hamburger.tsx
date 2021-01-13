import React, { FC } from 'react'
import styled, { css } from 'styled-components'

interface HamburgerProps {
  isOpen: boolean
  onClick: () => void
}

interface BunsProps {
  isOpen: boolean
}

export const Hamburger: FC<HamburgerProps> = ({ isOpen, onClick }) => (
  <Buns onClick={onClick} isOpen={isOpen}>
    <Line position="top" isOpen={isOpen} />
    <Line position="bottom" isOpen={isOpen} />
  </Buns>
)

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
}
const Line = styled.div<LineProps>`
  position: absolute;
  display: block;
  width: 100%;
  height: 0.3125rem;
  background: white;
  border-radius: 0.125rem;
  transition: 0.2s;

  ${({ position, isOpen }) => {
    switch (position) {
      case 'top':
        return isOpen
          ? css`
              transform: rotate(45deg);
              top: calc(50% - 0.1875rem);
            `
          : css`
              top: 0;
            `
      case 'bottom':
        return css`
          width: 1.875rem;

          ${isOpen
            ? css`
                transform: rotate(-45deg);
                top: calc(50% - 0.2rem);
                width: 100%;
              `
            : css`
                bottom: 0;
                right: 0;
              `}
        `
    }
  }}
`
