'use client'
import { FC } from 'react'
import styled, { css } from 'styled-components'
import { MenuItem } from './header'
import { LanguageSwitcher } from './language-switcher'
import { Link } from './link'
import { hexToRGBA, theme } from './sc-theme'

interface MenuProps {
  items: MenuItem[]
  isOpen: boolean
  handleClick: () => void
  menuVariant?: 'standard' | 'grayscale' | 'mustard'
  variantDesktop?: boolean
}

export const Menu: FC<MenuProps> = ({ items, isOpen, handleClick, menuVariant, variantDesktop }) => (
  <Container isOpen={isOpen}>
    {items.map(item => (
      <Item key={item.label} onClick={handleClick}>
        <MenuLink href={item.href} colorVariant={getColor(menuVariant)} desktopColorVariant={variantDesktop}>
          {item.label}
        </MenuLink>
      </Item>
    ))}
    <Item onClick={handleClick}>
      <LanguageSwitcher colorTheme={getColor(menuVariant)} desktopColorVariant={variantDesktop} />
    </Item>
  </Container>
)

function getColor(menuVariant: string | undefined): string | undefined {
  switch (menuVariant) {
    case 'standard':
      return theme.colors.white
    case 'grayscale':
      return theme.colors.darkBlue
    case 'mustard':
      return theme.colors.darkBlue
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Container = styled(({ isOpen, ...props }) => <ul {...props} />)<{
  isOpen: boolean
}>`
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
      width: auto;
      align-self: flex-end;
      margin-bottom: 0.5rem;
    }
  `}
`
const Item = styled.li`
  ${({ theme }) => css`
    margin-bottom: 2.5rem;
    &:last-of-type {
      margin-bottom: 3rem;
    }
    ${theme.media.desktop} {
      margin: 0 1.5rem;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  `}
`

interface MenuLinkProps {
  colorVariant?: string
  desktopColorVariant?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MenuLink = styled(({ colorVariant, desktopColorVariant, ...props }) => <Link {...props} />)<MenuLinkProps>`
  ${({ theme, colorVariant, desktopColorVariant }) => css`
    display: block;
    font-family: ${theme.typography.sansSerif};
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);

    ${theme.media.desktop} {
      font-size: 1.5225rem;
      text-shadow: none;
      color: ${colorVariant};

      ${desktopColorVariant &&
      css`
        color: ${theme.colors.white};
      `}
    }
  `}
`
