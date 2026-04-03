import { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { Layout } from '@/components/layout'
import { HomePageContent } from '@/components/home-page-content'
import { HomeHeaderContent } from '@/components/home-header-content'
import { ReactNode } from 'react'

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'seo' })
  return {
    title: { template: '%s | SAJJ Studio', default: 'SAJJ Studio' },
    description: t('description'),
    keywords: t('keywords')
      .split(',')
      .map(k => k.trim()),
    openGraph: {
      locale,
      type: 'website',
    },
    alternates: {
      canonical: `https://sajj.studio/${locale}/`,
      languages: {
        en: 'https://sajj.studio/en/',
        fr: 'https://sajj.studio/fr/',
      },
    },
  }
}

export default async function HomePage({
  params,
}: HomePageProps): Promise<ReactNode> {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <Layout headerVariant="standard" headerContent={<HomeHeaderContent />}>
      <HomePageContent />
    </Layout>
  )
}
