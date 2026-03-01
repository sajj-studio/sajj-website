'use client'
import { FC } from 'react'
import styled, { css } from 'styled-components'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { usePathname, Link } from '@/navigation'

interface LanguageSwitcherProps {
  colorTheme?: string
  desktopColorVariant?: boolean
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ colorTheme, desktopColorVariant }) => {
  const locale = useLocale()
  const pathname = usePathname()
  const t = useTranslations('common')

  const nextLocale = locale === 'en' ? 'fr' : 'en'

  return (
    <LanguageLink href={pathname} locale={nextLocale}>
      <LanguageText colorTheme={colorTheme} desktopColorVariant={desktopColorVariant}>{t('otherLanguage')}</LanguageText>
      <LanguageIndicator colorTheme={colorTheme} desktopColorVariant={desktopColorVariant} />
    </LanguageLink>
  )
}

const LanguageLink = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    ${theme.media.desktop} {
      position: relative;
      top: 0.75rem;
    }
  `}
`

interface ColorProps {
  colorTheme?: string
  desktopColorVariant?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LanguageText = styled(({ colorTheme, desktopColorVariant, ...props }) => <div {...props} />)<ColorProps>`
  ${({ theme, colorTheme, desktopColorVariant }) => css`
    font-family: ${theme.typography.sansSerif};
    font-weight: 400;
    line-height: 1.125rem;
    font-size: 1.5rem;
    color: ${theme.colors.white};
    text-align: right;

    ${theme.media.desktop} {
      font-size: 1.0575rem;
      color: ${colorTheme};

      ${desktopColorVariant &&
      css`
        color: ${theme.colors.white};
      `}
    }
  `}
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LanguageIndicator = styled(({ colorTheme, desktopColorVariant, ...props }) => <div {...props} />)<ColorProps>`
  ${({ theme, colorTheme, desktopColorVariant }) => css`
    height: 0;
    border-bottom: 2px solid ${theme.colors.white};
    margin-top: 0.75rem;
    opacity: 0;

    ${theme.media.desktop} {
      border-bottom-color: ${colorTheme};

      ${desktopColorVariant &&
      css`
        border-bottom-color: ${theme.colors.white};
      `}
    }

    ${LanguageText}:hover + & {
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
