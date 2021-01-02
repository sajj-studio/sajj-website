import React, { FC } from 'react'
import { HelloContactSection } from '../components/hello-contact'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { Typography } from '../components/typography'
import { WhatWeDo } from '../components/what-we-do'

const IndexPage: FC = () => (
  <Layout
    headerContent={
      <>
        <Typography variant="title" color="white">
          Welcome to the best digital creative studio in the world
        </Typography>
        <Typography variant="body" color="white">
          Based on no real scientific studies, but we have high hopes.
        </Typography>
      </>
    }
  >
    <SEO title="Home" />

    <HelloContactSection />
    <WhatWeDo />
  </Layout>
)

export default IndexPage
