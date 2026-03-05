import { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { ReactNode } from 'react'
import { Layout } from '@/components/layout'
import { PortfolioContent } from '@/components/portfolio-content'

interface PortfolioPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'portfolio' })
  return {
    title: t('seoTitle'),
    description: t('seoDescription'),
  }
}

export default async function PortfolioPage({ params }: PortfolioPageProps): Promise<ReactNode> {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <Layout>
      <PortfolioContent />
    </Layout>
  )
}
