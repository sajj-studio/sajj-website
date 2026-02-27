'use client'

import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { Container } from './container'
import { Typography } from './typography'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { useTranslations } from 'next-intl'
import type { Document } from '@contentful/rich-text-types'
import type { HomepageFields } from '@/lib/contentful-types'

interface AboutUsSectionProps {
  data?: HomepageFields | null
}

export const AboutUsSection: FC<AboutUsSectionProps> = ({ data }) => {
  const t = useTranslations('home')

  return (
    <AboutUsSectionContainer>
      <ContentContainer>
        <Typography variant="title" color="white">
          {t('aboutUs')}
        </Typography>
        {data?.aboutUsText &&
          documentToReactComponents(data.aboutUsText as Document, {
            renderNode: {
              [BLOCKS.PARAGRAPH]: (_, children) => (
                <Typography variant="body" color="white">
                  {children}
                </Typography>
              ),
            },
          })}
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
  ${({ theme }) =>
    css`
      max-width: 25rem;
      ${theme.media.mobile} {
        margin-left: auto;
        margin-right: auto;
      }
    `}
`
