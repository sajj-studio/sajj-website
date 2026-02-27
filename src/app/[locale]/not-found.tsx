'use client'

import React from 'react'
import { Layout } from '@/components/layout'

export default function NotFound(): JSX.Element {
  return (
    <Layout footerData={null}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}
