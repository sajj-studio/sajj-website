import { graphql, PageProps } from 'gatsby'
import React, { FC } from 'react'
import { HelloContactSection } from '../components/hello-contact'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { Typography } from '../components/typography'
import { WhatWeDo } from '../components/what-we-do'
import { IndexPageQuery } from '../graphqlTypes'

export const query = graphql`
  query IndexPage($lang: String!) {
    contentfulHomepage(node_locale: { eq: $lang }) {
      jumbotronTitle
      jumbotronText
    }
  }
`

const IndexPage: FC<PageProps<IndexPageQuery>> = ({
  data: { contentfulHomepage: data },
}) => (
  <Layout
    headerContent={
      <>
        <Typography variant="title" color="white">
          {data?.jumbotronTitle}
        </Typography>
        <Typography variant="body" color="white">
          {data?.jumbotronText}
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
