import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { AboutUsSectionFragment } from '../graphqlTypes'
import { useTranslation } from 'react-i18next'
import { Container } from './container'
import { Typography } from './typography'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import styled, { css } from 'styled-components'

export const fragment = graphql`
  fragment AboutUsSection on ContentfulHomepage {
    aboutUsText {
      raw
    }
  }
`

interface AboutUsSectionProps {
  data: AboutUsSectionFragment
}

export const AboutUsSection: FC<AboutUsSectionProps> = ({ data }) => {
  const { t } = useTranslation('home')

  return (
    <AboutUsSectionContainer>
      <ContentContainer>
        <Typography variant="title" color="white">
          {t('aboutUs')}
        </Typography>
        {documentToReactComponents(JSON.parse(data.aboutUsText?.raw ?? '{}'), {
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
    }
  `}
`
const ContentContainer = styled.div`
  max-width: 23rem;
`
