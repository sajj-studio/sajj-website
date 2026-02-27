'use client'

import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { usePathname, Link } from '@/navigation'

export const LanguageSwitcher: FC = () => {
  const locale = useLocale()
  const pathname = usePathname()
  const t = useTranslations('common')

  const nextLocale = locale === 'en-US' ? 'fr-CA' : 'en-US'

  return (
    <LanguageLink href={pathname} locale={nextLocale}>
      <LanguageText>{t('otherLanguage')}</LanguageText>
      <LanguageIndicator />
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

const LanguageText = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.typography.sansSerif};
    font-weight: 400;
    line-height: 1.125rem;
    font-size: 1.5rem;
    color: ${theme.colors.white};
    text-align: right;

    ${theme.media.desktop} {
      font-size: 1.0575rem;
    }
  `}
`

const LanguageIndicator = styled.div`
  ${({ theme }) => css`
    height: 0;
    border-bottom: 2px solid ${theme.colors.white};
    margin-top: 0.75rem;
    opacity: 0;

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
