import { Link } from './link'
import React, { FC, useCallback, useState } from 'react'
import styled, { css } from 'styled-components'
import { SajjLogo } from '../assets/images/sajj-logo'
import { Container } from './container'
import { Hamburger } from './hamburger'
import { Menu } from './menu'

export interface MenuItem {
  id: 'home' | 'about-us' | 'services' | 'our-work' | 'contact-us'
  href: string
  label: string
}

interface HeaderProps {
  logoGradient: 'standard' | 'grayscale'
  variant: 'standard' | 'grayscale'
}

const menuItems: MenuItem[] = [
  { id: 'home', href: '/', label: 'Home' },
  { id: 'about-us', href: '/#about-us', label: 'About us' },
  { id: 'services', href: '/#what-we-do', label: 'Services' },
  // { id: 'our-work', href: '/', label: 'Our work' },
  { id: 'contact-us', href: '/contact-us/', label: 'Contact us' },
]

export const Header: FC<HeaderProps> = ({ logoGradient, variant }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = useCallback(() => {
    setIsOpen(isOpen => !isOpen)
  }, [])

  return (
    <HeaderContainer height={variant}>
      <LogoContainer to="/">
        <SajjLogo gradient={logoGradient} />
      </LogoContainer>
      <Hamburger isOpen={isOpen} onClick={toggle} colorVariant={variant} />
      <Menu
        items={menuItems}
        isOpen={isOpen}
        handleClick={toggle}
        menuVariant={variant}
      />
    </HeaderContainer>
  )
}

interface HeaderContainerProps {
  height: 'standard' | 'grayscale'
}

const HeaderContainer = styled(Container)<HeaderContainerProps>`
  ${({ height }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.875rem;
    padding-bottom: ${height === 'standard' ? '1.875rem' : '0.2rem'};
  `}
`

const LogoContainer = styled(Link)`
  ${({ theme }) => css`
    width: 4.625rem;
    ${theme.media.desktop} {
      width: 8.125rem;
    }
  `}
`
