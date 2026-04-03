import { setRequestLocale } from 'next-intl/server'
import { Layout } from '@/components/layout'
import { Quiz } from '@/components/quiz'
import { ReactNode } from 'react'
import styled from 'styled-components'
import { Container } from '@/components/container'

interface QuizPageProps {
  params: Promise<{ locale: string }>
}

export default async function QuizPage({
  params,
}: QuizPageProps): Promise<ReactNode> {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <Layout headerVariant="gray" funkyHeight="half">
      <SectionContainer>
        <Quiz />
      </SectionContainer>
    </Layout>
  )
}

const SectionContainer = styled(Container)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`
