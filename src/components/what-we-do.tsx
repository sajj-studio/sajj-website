import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { BrandingIcon } from '../assets/images/branding-icon'
import { SocialMediaIcon } from '../assets/images/social-media-icon'
import { WebDesignIcon } from '../assets/images/web-design-icon'
import { Container } from './container'
import { Typography } from './typography'

/**
 * I'm trying out a new notation in this file - mixed PascalCase and underscores for nesting
 */

export const WhatWeDo: FC = () => (
  <Background>
    <SectionContainer>
      <Typography variant="title" color="white">
        What we do
      </Typography>
      <ItemsContainer>
        <WhatWeDo_Item
          icon={<BrandingIcon />}
          title="Logo & Branding"
          description="Creating a strategy adapted to you"
        />
        <WhatWeDo_Item
          icon={<WebDesignIcon />}
          title="Web design"
          description="Building a website to suit your need"
        />
        <WhatWeDo_Item
          icon={<SocialMediaIcon />}
          title="Social media"
          description="Helping you to grow your traffic"
        />
      </ItemsContainer>
    </SectionContainer>
  </Background>
)

const Background = styled.section`
  ${({ theme }) => css`
    background: linear-gradient(
      21.14deg,
      ${theme.colors.darkBlue} 12.78%,
      ${theme.colors.blue} 103.1%
    );
  `}
`

const SectionContainer = styled(Container)`
  padding-top: 3rem;
  padding-bottom: 3rem;

  & > ${Typography} {
    text-align: center;
  }
`

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

interface WhatWeDoItemProps {
  icon: JSX.Element
  title: string
  description: string
}
const WhatWeDo_Item: FC<WhatWeDoItemProps> = ({ icon, title, description }) => (
  <WhatWeDo_Item_Container>
    <div>{icon}</div>
    <div>
      <Typography variant="subtitle" color="white">
        {title}
      </Typography>
      <Typography variant="body" color="white">
        {description}
      </Typography>
    </div>
  </WhatWeDo_Item_Container>
)

const WhatWeDo_Item_Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin: 3rem 2rem;

    & > div:first-child {
      margin-right: 2.5rem;
      /* 
     * Gave this fixed width, yet one of them ends up being larger
     * Jordan pls rescue us from this nightmare
     */
      width: 7rem;
    }

    ${theme.media.desktop} {
      max-width: 14rem;
    }
  `}
`
