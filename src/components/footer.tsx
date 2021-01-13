import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { SajjLogo } from '../assets/images/sajj-logo'
import { FacebookLogo } from '../assets/images/facebook-logo'
import { InstagramLogo } from '../assets/images/instagram-logo'
import { TwitterLogo } from '../assets/images/twitter-logo'
import { LinkedinLogo } from '../assets/images/linkedin-logo'

import { Typography } from './typography'
import { theme } from './sc-theme'

export const Footer: FC = () => {
  return (
    <_FooterWrapper>
      <_MainContainer>
        <_SectionWrapper>
          <LogoContainer>
            <SajjLogo color="orange" />
          </LogoContainer>
          <_VerticalAlign>
            <Typography color="orange" variant="body">
              Contact us
            </Typography>
            <Typography color="orange" variant="body">
              info@sajj.studio
            </Typography>
          </_VerticalAlign>
        </_SectionWrapper>
        <_Line />
        <_SectionWrapper>
          <a href="www.google.ca">
            <_ImageWrapper>
              <FacebookLogo color="orange" />
            </_ImageWrapper>
          </a>
          <_ImageWrapper>
            <InstagramLogo color="orange" />
          </_ImageWrapper>

          <_ImageWrapper>
            <TwitterLogo color="orange" />
          </_ImageWrapper>

          <_ImageWrapper>
            <LinkedinLogo color="orange" />
          </_ImageWrapper>
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

const _ImageWrapper = styled.div`
  width: 1.823rem;
  height: 1.811rem;
  margin: 0 1.4rem;
`
