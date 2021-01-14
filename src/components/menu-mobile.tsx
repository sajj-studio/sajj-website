import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { MenuItem } from './header'
import { LanguageSwitcher } from './language-switcher'
import { Link } from './link'
import { hexToRGBA } from './sc-theme'

interface MenuProps {
  items: MenuItem[]
  isOpen: boolean
  handleClick: () => void
}

export const MobileMenu: FC<MenuProps> = ({ items, isOpen, handleClick }) => (
  <_Menu isOpen={isOpen}>
    {items.map(item => (
      <_MenuItem key={item.label} onClick={handleClick}>
        <_MenuLink to={item.href}>{item.label}</_MenuLink>
      </_MenuItem>
    ))}
    <LanguageSwitcher />
  </_Menu>
)

const _Menu = styled.ul<{ isOpen: boolean }>`
  ${({ isOpen, theme }) => css`
    position: fixed;
    height: 100vh;
    padding-right: 2.25rem;
    padding-top: 9rem;
    background: ${hexToRGBA(theme.colors.darkBlue, 0.5)};
    backdrop-filter: blur(14px) brightness(0.18);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    transition: ${theme.transitions.default};
    z-index: 10;
    top: 0;
    bottom: 0;
    width: 100%;
    max-width: 26rem;
    right: 0;
    transform: translate(100%);

    ${isOpen &&
    css`
      transform: none;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

      ${theme.media.desktop} {
        box-shadow: none;
      }
    `}

    ${theme.media.desktop} {
      flex-direction: row;
      transform: none;
      background: none;
      backdrop-filter: none;
      height: min-content;
      padding: 0;
      max-width: none;
      position: relative;
      transition: none;
      margin-left: 7.9375rem;
      justify-content: space-between;
      align-self: flex-end;
    }
  `}
`
const _MenuItem = styled.li`
  ${({ theme }) => css`
    margin-bottom: 2.5rem;
    &:last-of-type {
      margin-bottom: 3rem;
    }
    ${theme.media.desktop} {
      margin: 0;
      &:last-of-type {
        margin: 0;
      }
    }
  `}
`
const _MenuLink = styled(Link)`
  ${({ theme }) => css`
    display: block;
    font-family: ${theme.typography.sansSerif};
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);

    ${theme.media.desktop} {
      font-size: 1.5225rem;
      text-shadow: none;
    }
  `}
`
