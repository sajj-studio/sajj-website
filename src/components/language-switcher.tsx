import React, { FC, useContext, useMemo } from 'react'
import { PageContext } from '../contexts/page-context'
import styled, { css } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Link } from 'gatsby'
import { routes } from '../routes'

interface LanguageSwitcherProps {
  colorTheme: 'standard' | 'grayscale'
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ colorTheme }) => {
  const { lang, originalPath } = useContext(PageContext)
  const { t } = useTranslation('common')

  const otherLanguage = useMemo(() => (lang === 'en-US' ? 'fr-CA' : 'en-US'), [
    lang,
  ])

  return (
    <LanguageLink
      to={`/${otherLanguage}${routes[originalPath][otherLanguage]}`}
    >
      <LanguageText color={colorTheme}>{t('otherLanguage')}</LanguageText>
      <LanguageIndicator color={colorTheme} />
    </LanguageLink>
  )
}

interface LanguageTextColor {
  color: 'standard' | 'grayscale'
}

interface LanguageIndicatorColor {
  color: 'standard' | 'grayscale'
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

const LanguageText = styled.div<LanguageTextColor>`
  ${({ theme, color }) => css`
    font-family: ${theme.typography.sansSerif};
    font-weight: 400;
    line-height: 1.125rem;
    font-size: 1.5rem;
    color: ${theme.colors.white};
    text-align: right;

    ${theme.media.desktop} {
      font-size: 1.0575rem;
      color: ${color === 'grayscale'
        ? theme.colors.darkBlue
        : theme.colors.white};
    }
  `}
`

const LanguageIndicator = styled.div<LanguageIndicatorColor>`
  ${({ theme, color }) => css`
    height: 0;
    border-bottom: 2px solid
      ${color === 'grayscale' ? theme.colors.darkBlue : theme.colors.white};
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
