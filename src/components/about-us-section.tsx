'use client'
import { FC } from 'react'
import styled, { css } from 'styled-components'
import { Container } from './container'
import { Typography } from './typography'
import { useTranslations } from 'next-intl'

export const AboutUsSection: FC = () => {
  const t = useTranslations('home')

  return (
    <AboutUsSectionContainer>
      <ContentContainer>
        <Typography variant="title" color="white">
          {t('aboutUs')}
        </Typography>
        <Typography variant="body" color="white">
          {t('aboutUsText')}
        </Typography>
      </ContentContainer>
    </AboutUsSectionContainer>
  )
}

const AboutUsSectionContainer = styled(Container)`
  ${({ theme }) => css`
    text-align: center;
    padding-top: 1rem;

    ${theme.media.desktop} {
      text-align: left;
      padding-top: 4.5rem;
      padding-bottom: 4rem;
    }
  `}
`
const ContentContainer = styled.div`
  ${({ theme }) => css`
    max-width: 25rem;
    ${theme.media.mobile} {
      margin-left: auto;
      margin-right: auto;
    }
  `}
`
