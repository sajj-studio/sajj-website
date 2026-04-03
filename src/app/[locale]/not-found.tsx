'use client'
import { JSX } from 'react'
import { Layout } from '../../components/layout'
import { Container } from '../../components/container'
import { Typography } from '../../components/typography'

export default function NotFound(): JSX.Element {
  return (
    <Layout headerVariant="gray">
      <Container>
        <Typography variant="title" color="black">
          404: Not Found
        </Typography>
        <Typography variant="body" color="black">
          You just hit a route that doesn&#39;t exist... the sadness.
        </Typography>
      </Container>
    </Layout>
  )
}
