'use client'
import { JSX } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import StyledComponentsRegistry from '../components/registry'
import { Providers } from '../components/providers'
import { Layout } from '../components/layout'
import { Container } from '../components/container'
import { Typography } from '../components/typography'
import enMessages from '../messages/en.json'

export default function NotFound(): JSX.Element {
  return (
    <StyledComponentsRegistry>
      <NextIntlClientProvider locale="en" messages={enMessages}>
        <Providers>
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
        </Providers>
      </NextIntlClientProvider>
    </StyledComponentsRegistry>
  )
}
