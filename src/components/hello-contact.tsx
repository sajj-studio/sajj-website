import React, { FC } from 'react'
import styled from 'styled-components'
import { Button } from './button'
import { Container } from './container'
import { Typography } from './typography'
import { useTranslation } from 'react-i18next'

export const HelloContactSection: FC = () => {
  const { t } = useTranslation('home')

  return (
    <SectionContainer>
      <Typography variant="title" color="blue">
        {t('hello')}
      </Typography>
      <Typography variant="body" color="blue">
        {t('letUsKnow')}
      </Typography>
      <Button to="/contact-us">{t('completeTheForm')}</Button>
    </SectionContainer>
  )
}

const SectionContainer = styled(Container)`
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;

  ${Button} {
    margin-top: 2.125rem;
  }
`
