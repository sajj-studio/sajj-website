'use client'
import Image from 'next/image'
import { FC } from 'react'
import styled, { css } from 'styled-components'

export interface ProjectCardProps {
  clientName: string
  laptopMockupUrl: string
  brandLogoUrl: string
  brandColor: string
  shadowColor?: string
  href?: string
}

export const ProjectCard: FC<ProjectCardProps> = ({
  clientName,
  laptopMockupUrl,
  brandLogoUrl,
  brandColor,
  shadowColor = '#d52a3b',
  href,
}) => {
  const inner = (
    <_CardInner>
      <_LaptopWrapper>
        <Image
          src={laptopMockupUrl}
          alt={`${clientName} website preview`}
          width={600}
          height={340}
          style={{ width: '100%', height: 'auto' }}
        />
      </_LaptopWrapper>
      <_GrayCard shadowColor={shadowColor}>
        <_LogoWrapper>
          <Image
            src={brandLogoUrl}
            alt={`${clientName} logo`}
            width={280}
            height={56}
            style={{ width: '100%', height: 'auto' }}
          />
        </_LogoWrapper>
      </_GrayCard>
      <_ClientName brandColor={brandColor}>{clientName}</_ClientName>
    </_CardInner>
  )

  if (href) {
    return (
      <_CardLink href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </_CardLink>
    )
  }

  return inner
}

const _CardInner = styled.div`
  display: flex;
  flex-direction: column;
`

const _CardLink = styled.a`
  display: block;
  text-decoration: none;

  &:hover img:first-child {
    opacity: 0.9;
  }
`

const _LaptopWrapper = styled.div`
  position: relative;
  z-index: 2;
  /* Slight bottom overlap creates the stacked depth effect */
  margin-bottom: -1.75rem;
`

const _GrayCard = styled.div<{ shadowColor: string }>`
  ${({ shadowColor }) => css`
    background: #f6f6f6;
    box-shadow: 5px 5px 0px 0px ${shadowColor};
    position: relative;
    z-index: 1;
    /* Top padding reserves space so the laptop overhangs correctly;
       the rest of the card shows the brand logo */
    padding: 2.25rem 1rem 1.25rem;
  `}
`

const _LogoWrapper = styled.div`
  width: 100%;
`

const _ClientName = styled.p<{ brandColor: string }>`
  ${({ brandColor }) => css`
    color: ${brandColor};
    font-family: Rubik, sans-serif;
    font-weight: 500;
    font-size: 0.95rem;
    line-height: 1.6;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin: 0.75rem 0 0;
  `}
`
