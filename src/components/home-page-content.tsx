'use client'
import Image from 'next/image'
import styled, { css } from 'styled-components'
import { HelloContactSection } from './hello-contact'
import { FunkyBorder, funkyBorderStyle } from './funky-border'
import { AboutUsSection } from './about-us-section'
import { WhatWeDo } from './what-we-do'
import montrealSkyline from '@/assets/images/montreal_skyline.jpg'
import { ReactNode } from 'react'

export function HomePageContent(): ReactNode {
  return (
    <>
      <HelloContactSection />

      <ImageContainer img={montrealSkyline.src}>
        <div id="about-us" />
        <div>
          <HiddenImage src={montrealSkyline} alt="" />
          <FunkyBorder top />
        </div>
        <DesktopOnly>
          <AboutUsSection />
        </DesktopOnly>
      </ImageContainer>
      <ContentContainer>
        <MobileOnly>
          <AboutUsSection />
        </MobileOnly>
        <div id="what-we-do" />
        <WhatWeDo />
      </ContentContainer>
    </>
  )
}

const MobileOnly = styled.div`
  ${({ theme }) => css`
    display: initial;
    ${theme.media.desktop} {
      display: none;
    }
  `}
`
const DesktopOnly = styled.div`
  ${({ theme }) => css`
    display: none;
    ${theme.media.desktop} {
      display: initial;
    }
  `}
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ImageContainer = styled(({ img, ...props }) => <section {...props} />)<{
  img: string
}>`
  ${({ img, theme }) => css`
    ${funkyBorderStyle('top')};
    padding-top: 0;
    position: relative;
    background:
      linear-gradient(180deg, rgba(100, 26, 255, 0) 33.85%, #641aff 100%),
      url(${img});
    background-position-y: center;
    background-repeat: no-repeat;

    ${theme.media.desktop} {
      background:
        linear-gradient(
          90deg,
          rgba(100, 26, 255, 1) 0%,
          rgba(100, 26, 255, 1) 30%,
          rgba(99, 24, 255, 0) 100%
        ),
        url(${img});
      background-position-y: center;
    }
  `}
`

const HiddenImage = styled(Image)`
  ${({ theme }) => css`
    opacity: 0;
    width: 100%;
    height: auto;
    display: block;
    ${theme.media.desktop} {
      display: none;
    }
  `}
`

const ContentContainer = styled.section`
  ${({ theme }) => css`
    background: linear-gradient(18.79deg, #182e74 20.58%, #641aff 89.82%);

    ${theme.media.desktop} {
      background: linear-gradient(180deg, #641aff 0%, #182e74 119.88%);
    }
  `}
`
