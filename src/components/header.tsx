import { Link } from './link'
import React, { FC, useCallback, useState } from 'react'
import styled, { css } from 'styled-components'
import { SajjLogo } from '../assets/images/sajj-logo'
import { Container } from './container'
import { Hamburger } from './hamburger'
import { MobileMenu } from './menu-mobile'

export interface MenuItem {
  id: 'home' | 'about-us' | 'services' | 'our-work' | 'contact-us'
  href: string
  label: string
}

const menuItems: MenuItem[] = [
  { id: 'home', href: '/', label: 'Home' },
  { id: 'about-us', href: '/#about-us', label: 'About us' },
  { id: 'services', href: '/#what-we-do', label: 'Services' },
  // { id: 'our-work', href: '/', label: 'Our work' },
  { id: 'contact-us', href: '/contact-us/', label: 'Contact us' },
]

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = useCallback(() => {
    setIsOpen(isOpen => !isOpen)
  }, [])

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <SajjLogo />
      </LogoContainer>
      <Hamburger isOpen={isOpen} onClick={toggle} />
      <MobileMenu items={menuItems} isOpen={isOpen} handleClick={toggle} />
    </HeaderContainer>
  )
}

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.875rem;
  padding-bottom: 1.875rem;
`

const LogoContainer = styled(Link)`
  ${({ theme }) => css`
    width: 4.625rem;
    ${theme.media.desktop} {
      width: 8.125rem;
    }
  `}
`
