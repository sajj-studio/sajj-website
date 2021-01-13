import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { SajjLogo } from '../assets/images/sajj-logo'
import { FacebookLogo } from '../assets/images/facebook-logo'
import { InstagramLogo } from '../assets/images/instagram-logo'
import { TwitterLogo } from '../assets/images/twitter-logo'
import { LinkedinLogo } from '../assets/images/linkedin-logo'
import { useTranslation } from 'react-i18next'
import { Typography } from './typography'
import { theme } from './sc-theme'
import { Link } from './link'
import { graphql, useStaticQuery } from 'gatsby'
import { FooterQuery } from '../graphqlTypes'

export const query = graphql`
  query Footer {
    contentfulContactInfo {
      email
      facebookPage
      instagramPage
      twitterPage
      linkedInPage
    }
  }
`

export const Footer: FC = () => {
  const { t } = useTranslation('footer')
  const { contentfulContactInfo: data } = useStaticQuery<FooterQuery>(query)

  return (
    <_FooterWrapper>
      <_MainContainer>
        <_SectionWrapper>
          <LogoContainer>
            <SajjLogo color="orange" />
          </LogoContainer>
          <_VerticalAlign>
            <Typography
              as={Link}
              to="/contact-us/"
              color="orange"
              variant="body"
            >
              {t('contactUs')}
            </Typography>
            <Typography
              as="a"
              href={`mailto:${data?.email}`}
              color="orange"
              variant="body"
            >
              {data?.email}
            </Typography>
          </_VerticalAlign>
        </_SectionWrapper>
        <_Line />
        <_SectionWrapper>
          <ImageLink href={data?.facebookPage ?? ''}>
            <FacebookLogo color="orange" />
          </ImageLink>
          <ImageLink href={data?.instagramPage ?? ''}>
            <InstagramLogo color="orange" />
          </ImageLink>
          <ImageLink href={data?.twitterPage ?? ''}>
            <TwitterLogo color="orange" />
          </ImageLink>
          <ImageLink href={data?.facebookPage ?? ''}>
            <LinkedinLogo color="orange" />
          </ImageLink>
        </_SectionWrapper>
      </_MainContainer>
    </_FooterWrapper>
  )
}

const _FooterWrapper = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    height: max-content;
    background: ${theme.colors.darkBlue};
    color: ${theme.colors.orange};
    padding: 1.5rem 3rem;
  `}
`

const LogoContainer = styled.div`
  width: 3.4375rem;
  margin-right: 1.25rem;
`

const _MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0;

  ${theme.media.desktop} {
    flex-direction: row;
    justify-content: center;
  }
`

const _SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    height: 3rem;
    width: auto;
  }

  a {
    z-index: 5;
  }

  :nth-child(1) {
    padding: 0 2rem;
  }
`
const _VerticalAlign = styled.div`
  display: flex;
  flex-direction: column;

  ${Typography} {
    margin: 0;
  }

  ${theme.media.desktop} {
    margin-left: 1.3125rem;
  }
`

const _Line = styled.div`
  ${({ theme }) => css`
    height: 0;
    border-bottom: 1px solid ${theme.colors.orange};
    margin: 1rem 0;

    ${theme.media.desktop} {
      height: 2.6875rem;
      margin: 0 1rem 0 0.6875rem;
      border-left: 1px solid ${theme.colors.orange};
    }
  `}
`

const ImageLink = styled.a`
  display: inline-block;
  width: 1.823rem;
  height: 1.811rem;
  margin: 0 1.4rem;
`
