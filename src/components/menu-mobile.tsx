import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { MenuItem } from './header'
import { hexToRGBA } from './sc-theme'

interface MenuProps {
  items: MenuItem[]
  isOpen: boolean
}

export const MobileMenu: FC<MenuProps> = ({ items, isOpen }) => (
  <_Menu isOpen={isOpen}>
    {items.map(item => (
      <_MenuItem key={item.label}>
        <_MenuLink href={item.href}>{item.label}</_MenuLink>
      </_MenuItem>
    ))}
    <LanguageSection>
      <LanguageItem>
        <LanguageLink>Francais</LanguageLink>
        <LanguageIndicator />
      </LanguageItem>
    </LanguageSection>
  </_Menu>
)

const _Menu = styled.ul<{ isOpen: boolean }>`
  ${({ isOpen, theme }) => css`
    position: fixed;
    top: 0;
    left: 125%;
    width: calc(100%);
    height: 100vh;
    padding-right: 2.25rem;
    padding-top: 9rem;
    background: ${hexToRGBA(theme.colors.darkBlue, 0.5)};
    backdrop-filter: blur(14px) brightness(0.18);
    background-blend-mode: multiply;
    display: flex;
    flex-direction: column;
    transition: ${theme.transitions.default};
    z-index: 10;
    top: 0;
    bottom: 0;

    ${isOpen &&
    css`
      left: 0;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    `}
  `}
`
const _MenuItem = styled.li`
  margin-bottom: 2.5rem;
  &:last-of-type {
    margin-bottom: 0;
  }
`
const _MenuLink = styled.a`
  ${({ theme }) => css`
    display: block;
    font-family: ${theme.typography.sansSerif};
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    text-align: right;
  `}
`

const LanguageSection = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: flex-end;
`

const LanguageItem = styled.div`
  display: flex;
  flex-direction: column;
  width: min-content;
`

const LanguageLink = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.typography.sansSerif};
    font-weight: 400;
    line-height: 1.125rem;
    font-size: 1.5rem;
    color: ${theme.colors.white};
    text-align: right;
  `}
`

const LanguageIndicator = styled.div`
  ${({ theme }) => css`
    height: 0;
    border-bottom: 2px solid ${theme.colors.white};
    margin-top: 0.75rem;
    opacity: 0;

    ${LanguageLink}:hover + & {
      opacity: 1;
      animation-duration: 0.5s;
      animation-name: slideIn;
    }

    @keyframes slideIn {
      0% {
        width: 1px;
      }
      100% {
        width: 100%;
      }
    }
  `}
`
