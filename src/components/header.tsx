'use client'
import { Link } from './link'
import { FC, useCallback, useState } from 'react'
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

interface HeaderProps {
  logoGradient?: 'standard' | 'grayscale' | 'mustard'
  variant?: 'standard' | 'grayscale' | 'mustard'
  variantDesktop?: boolean
}

export const Header: FC<HeaderProps> = ({ logoGradient, variant, variantDesktop }) => {
  const t = useTranslations('nav')
  const [isOpen, setIsOpen] = useState(false)
  const toggle = useCallback(() => {
    setIsOpen(isOpen => !isOpen)
  }, [])

  const menuItems: MenuItem[] = [
    { id: 'home', href: '/', label: t('home') },
    { id: 'about-us', href: '/#about-us', label: t('aboutUs') },
    { id: 'services', href: '/#what-we-do', label: t('services') },
    // { id: 'our-work', href: '/', label: 'Our work' },
    { id: 'contact-us', href: '/contact-us', label: t('contactUs') },
  ]

  return (
    <HeaderContainer height={variant} desktop={variantDesktop}>
      <LogoContainer href="/">
        <SajjLogo gradient={logoGradient} />
      </LogoContainer>
      <Hamburger isOpen={isOpen} onClick={toggle} colorVariant={variant} />
      <Menu
        items={menuItems}
        isOpen={isOpen}
        handleClick={toggle}
        menuVariant={variant}
        variantDesktop={variantDesktop}
      />
    </HeaderContainer>
  )
}

interface HeaderContainerProps {
  height?: 'standard' | 'grayscale' | 'mustard'
  desktop?: boolean
}

const HeaderContainer = styled(Container)<HeaderContainerProps>`
  ${({ height, desktop, theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.875rem;
    padding-bottom: ${height === 'standard' || !height ? '1.875rem' : '0.2rem'};

    ${theme.media.desktop} {
      ${desktop &&
      css`
        padding-bottom: 1.875rem;
      `}
    }
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
