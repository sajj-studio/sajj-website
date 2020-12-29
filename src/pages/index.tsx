import React, { FC } from 'react'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { Typography } from '../components/typography'

const IndexPage: FC = () => (
  <Layout>
    <SEO title="Home" />

    <Typography variant="title" color="red" as="h1">
      Hallo
    </Typography>
  </Layout>
)

export default IndexPage
