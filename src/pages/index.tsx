import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { HelloContactSection } from '../components/hello-contact'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { Typography } from '../components/typography'
import { WhatWeDo } from '../components/what-we-do'

const IndexPage: FC = () => {
  const { t } = useTranslation('home')

  return (
    <Layout
      headerContent={
        <>
          <Typography variant="title" color="white">
            {t('welcome')}
          </Typography>
          <Typography variant="body" color="white">
            {t('hopes')}
          </Typography>
        </>
      }
    >
      <SEO title="Home" />

      <HelloContactSection />
      <WhatWeDo />
    </Layout>
  )
}

export default IndexPage
