'use client'
import { Link } from './link'
import { FC, useState } from 'react'
import styled, { css } from 'styled-components'
import { SajjLogo } from '../assets/images/sajj-logo'
import { Container } from './container'
import { Hamburger } from './hamburger'
import { Menu } from './menu'
import { useTranslations } from 'next-intl'

export interface MenuItem {
  id: 'home' | 'about-us' | 'services' | 'our-work' | 'contact-us'
  href: string
  label: string
}

export const Header: FC = () => {
  const t = useTranslations('nav')
  const [isOpen, setIsOpen] = useState(false)
  function toggle() {
    setIsOpen(isOpen => !isOpen)
  }

  const menuItems: MenuItem[] = [
    { id: 'home', href: '/', label: t('home') },
    { id: 'about-us', href: '/#about-us', label: t('aboutUs') },
    { id: 'services', href: '/#what-we-do', label: t('services') },
    // { id: 'our-work', href: '/', label: 'Our work' },
    { id: 'contact-us', href: '/contact-us', label: t('contactUs') },
  ]

  return (
    <HeaderContainer>
      <LogoContainer href="/">
        <SajjLogo />
      </LogoContainer>
      <Hamburger isOpen={isOpen} onClick={toggle} />
      <Menu items={menuItems} isOpen={isOpen} handleClick={toggle} />
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
