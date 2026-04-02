'use client'
import { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { BrandingIcon } from '../assets/images/branding-icon'
import { SocialMediaIcon } from '../assets/images/social-media-icon'
import { WebDesignIcon } from '../assets/images/web-design-icon'
import { Container } from './container'
import { Typography } from './typography'
import { theme } from './sc-theme'
import { useTranslations } from 'next-intl'

/**
 * I'm trying out a new notation in this file - mixed PascalCase and underscores for nesting
 */

export const WhatWeDo: FC = () => {
  const t = useTranslations('home')
  const tQuiz = useTranslations('quiz')

  return (
    <SectionContainer>
      <Typography variant="title" color="white">
        {t('whatWeDo')}
      </Typography>
      <ItemsContainer>
        <WhatWeDo_Item
          icon={<WebDesignIcon />}
          title={tQuiz('web-design.label')}
          description={tQuiz('web-design.label_desc')}
        />
        <WhatWeDo_Item
          icon={<BrandingIcon />}
          title={tQuiz('hosting.label')}
          description={tQuiz('hosting.label_desc')}
        />
        <WhatWeDo_Item
          icon={<SocialMediaIcon />}
          title={tQuiz('seo.label')}
          description={tQuiz('seo.label_desc')}
        />
      </ItemsContainer>
    </SectionContainer>
  )
}

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

  ${theme.media.desktop} {
    justify-content: space-between;
  }
`

interface WhatWeDoItemProps {
  icon: ReactNode
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
      width: 25%;

      ${theme.media.desktop} {
        width: 40%;
      }
    }

    & > div:nth-child(2) {
      width: 75%;
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
