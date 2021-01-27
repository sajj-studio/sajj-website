import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { AboutUsSectionFragment } from '../graphqlTypes'
import { useTranslation } from 'react-i18next'
import { Container } from './container'
import { Typography } from './typography'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import styled, { css } from 'styled-components'
import { Button } from './button'

export const fragment = graphql`
  fragment AboutUsSection on ContentfulHomepage {
    aboutUsText {
      raw
    }
  }
`

interface AboutUsSectionProps {
  data?: AboutUsSectionFragment | null
}

export const AboutUsSection: FC<AboutUsSectionProps> = ({ data }) => {
  const { t } = useTranslation('home')

  return (
    <AboutUsSectionContainer>
      <ContentContainer>
        <Typography variant="title" color="white">
          {t('aboutUs')}
        </Typography>
        {documentToReactComponents(JSON.parse(data?.aboutUsText?.raw ?? '{}'), {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (_, children) => (
              <Typography variant="body" color="white">
                {children}
              </Typography>
            ),
          },
        })}
        <ButtonContainer>
          <Button to="/about-us/">{'MEET THE TEAM'}</Button>
        </ButtonContainer>
      </ContentContainer>
    </AboutUsSectionContainer>
  )
}

const ButtonContainer = styled.div`
  ${({ theme }) => css`
    margin-top: 1.7rem;

    ${theme.media.desktop} {
      a {
        width: 80%;
      }
    }
  `}
`

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
