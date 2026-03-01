'use client'
import { useTranslations } from 'next-intl'
import { Typography } from './typography'

export function HomeHeaderContent() {
  const t = useTranslations('home')
  return (
    <>
      <Typography variant="title" color="white">
        {t('jumbotronTitle')}
      </Typography>
      <Typography variant="body" color="white">
        {t('jumbotronText')}
      </Typography>
    </>
  )
}
