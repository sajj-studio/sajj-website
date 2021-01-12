import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { BrandingIcon } from '../assets/images/branding-icon'
import { SocialMediaIcon } from '../assets/images/social-media-icon'
import { WebDesignIcon } from '../assets/images/web-design-icon'
import { Container } from './container'
import { FunkyBorder, funkyBorderStyle } from './funky-border'
import { Typography } from './typography'
import { theme } from './sc-theme'
import { useTranslation } from 'react-i18next'

/**
 * I'm trying out a new notation in this file - mixed PascalCase and underscores for nesting
 */

export const WhatWeDo: FC = () => {
  const { t } = useTranslation('home')

  return (
    <Background>
      <FunkyBorder top />
      <SectionContainer>
        <Typography variant="title" color="white">
          {t('whatWeDo')}
        </Typography>
        <ItemsContainer>
          <WhatWeDo_Item
            icon={<BrandingIcon />}
            title={t('branding')}
            description={t('branding_desc')}
          />
          <WhatWeDo_Item
            icon={<WebDesignIcon />}
            title={t('design')}
            description={t('design_desc')}
          />
          <WhatWeDo_Item
            icon={<SocialMediaIcon />}
            title={t('socialMedia')}
            description={t('socialMedia_desc')}
          />
        </ItemsContainer>
      </SectionContainer>
    </Background>
  )
}

const Background = styled.section`
  ${({ theme }) => css`
    ${funkyBorderStyle('top')}
    background: linear-gradient(
      21.14deg,
      ${theme.colors.darkBlue} 12.78%,
      ${theme.colors.blue} 103.1%
    );
  `}
`

const SectionContainer = styled(Container)`
  ${({ theme }) => css`
    padding-top: 3rem;
    padding-bottom: 3rem;

    & > ${Typography} {
      text-align: center;

      ${theme.media.desktop} {
        text-align: left;
        padding-left: 2rem;
      }
    }
  `}
`

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  ${theme.media.desktop} {
    justify-content: space-between;
  }
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
    margin: 3rem 1.5rem;

    & > div:first-child {
      /* 
     * Gave this fixed width, yet one of them ends up being larger
     * Jordan pls rescue us from this nightmare
     */
      width: 40%;

      ${theme.media.desktop} {
        width: 40%;
      }
    }

    & > div:nth-child(2) {
      width: 60%;
      padding-left: 2.2rem;

      ${theme.media.desktop} {
        width: 65%;
        padding-left: 1rem;
      }
    }

    ${theme.media.desktop} {
      max-width: 16rem;
      margin: 3rem 2rem;
    }
  `}
`
