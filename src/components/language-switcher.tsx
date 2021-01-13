import React, { FC, useContext, useMemo } from 'react'
import { PageContext } from '../contexts/page-context'
import styled, { css } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Link } from 'gatsby'
import { routes } from '../routes'

export const LanguageSwitcher: FC = () => {
  const { lang, originalPath } = useContext(PageContext)
  const { t } = useTranslation('common')

  const otherLanguage = useMemo(() => (lang === 'en-US' ? 'fr-CA' : 'en-US'), [
    lang,
  ])

  return (
    <LanguageLink
      to={`/${otherLanguage}${routes[originalPath][otherLanguage]}`}
    >
      <LanguageText>{t('otherLanguage')}</LanguageText>
      <LanguageIndicator />
    </LanguageLink>
  )
}

const LanguageLink = styled(Link)`
  display: flex;
  flex-direction: column;
`

const LanguageText = styled.div`
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
