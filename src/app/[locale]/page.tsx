import React from 'react'
import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { getHomepageData, getSeoData, getContactInfo } from '@/lib/contentful'
import { Layout } from '@/components/layout'
import { HomePageContent } from '@/components/home-page-content'
import { HomeHeaderContent } from '@/components/home-header-content'

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params
  setRequestLocale(locale)
  const seoData = await getSeoData(locale)
  return {
    title: { template: '%s | SAJJ Studio', default: 'SAJJ Studio' },
    description: seoData?.description,
    keywords: seoData?.keywords,
    openGraph: {
      locale,
      type: 'website',
    },
    alternates: {
      canonical: `https://sajj.studio/${locale}/`,
      languages: {
        'en-US': 'https://sajj.studio/en-US/',
        'fr-CA': 'https://sajj.studio/fr-CA/',
      },
    },
  }
}

export default async function HomePage({
  params,
}: HomePageProps): Promise<JSX.Element> {
  const { locale } = await params
  setRequestLocale(locale)
  const content = await getHomepageData(locale)
  const footerData = await getContactInfo()

  const imageUrl = content?.aboutUsImage?.fields?.file?.url
    ? `https:${content.aboutUsImage.fields.file.url}`
    : ''
  const imageWidth =
    content?.aboutUsImage?.fields?.file?.details?.image?.width ?? 800
  const imageHeight =
    content?.aboutUsImage?.fields?.file?.details?.image?.height ?? 600

  return (
    <Layout
      footerData={footerData}
      headerContent={
        <HomeHeaderContent
          title={content?.jumbotronTitle ?? ''}
          text={content?.jumbotronText ?? ''}
        />
      }
    >
      <HomePageContent
        content={content}
        imageUrl={imageUrl}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
      />
    </Layout>
  )
}
