import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { SajjLogo } from '../assets/images/sajj-logo'
import { FacebookLogo } from '../assets/images/facebook-logo'
import { InstagramLogo } from '../assets/images/instagram-logo'
import { TwitterLogo } from '../assets/images/twitter-logo'
import { LinkedinLogo } from '../assets/images/linkedin-logo'

import { Typography } from './typography'

export const Footer: FC = () => {
  return (
    <_FooterWrapper>
      <_MainContaineer>
        <_SectionWrapper>
          <SajjLogo color="orange" />
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
      </_MainContaineer>
    </_FooterWrapper>
  )
}

const _FooterWrapper = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    height: max-content;
    background: ${theme.colors.darkBlue};
    color: ${theme.colors.orange};
    padding: 1rem 3rem;
  `}
`

const _MainContaineer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0;
`

const _SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  img {
    height: 3rem;
    width: auto;
  }

  a {
    z-index: 50;
  }
`
const _VerticalAlign = styled.div`
  display: flex;
  flex-direction: column;
`

const _Line = styled.div`
  ${({ theme }) => css`
    height: 0;
    border-bottom: 1px solid ${theme.colors.orange};
    margin: 1rem 0;
  `}
`

const _ImageWrapper = styled.div`
  width: 1.823rem;
  height: 1.811rem;
  margin: 0 0.5rem 0;
`
