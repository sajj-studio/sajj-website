import React, { FC } from 'react'
import styled, { css } from 'styled-components'

interface HamburgerProps {
  isOpen: boolean
  onClick: () => void
}
export const Hamburger: FC<HamburgerProps> = ({ isOpen, onClick }) => (
  <_Hamburger onClick={onClick}>
    <_HamburgerLine position="top" isOpen={isOpen} />
    <_HamburgerLine position="middle" isOpen={isOpen} />
    <_HamburgerLine position="bottom" isOpen={isOpen} />
  </_Hamburger>
)

const _Hamburger = styled.div`
  height: 1.875rem;
  width: 2.375rem;
  position: relative;
  z-index: 105;
  margin: 0.5rem 1rem 0 0;
`

interface HamburgerLineProps {
  position: 'top' | 'middle' | 'bottom'
  isOpen: boolean
}
const _HamburgerLine = styled.div<HamburgerLineProps>`
  position: absolute;
  display: block;
  width: 100%;
  height: 0.1875rem;
  background: #c57d76;
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
      case 'middle':
        return isOpen
          ? css`
              opacity: 0;
            `
          : css`
              top: calc(50% - 0.1875rem);
            `
      case 'bottom':
        return isOpen
          ? css`
              transform: rotate(-45deg);
              top: calc(50% - 0.1875rem);
            `
          : css`
              top: calc(100% - (0.1875rem * 2));
            `
    }
  }}
`
