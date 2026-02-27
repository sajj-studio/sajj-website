import React from 'react'
import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { getSeoData, getContactInfo } from '@/lib/contentful'
import { Layout } from '@/components/layout'
import { ContactForm } from '@/components/contact-form'

interface ContactPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params
  setRequestLocale(locale)
  const seoData = await getSeoData(locale)
  return {
    title: 'Contact Us',
    description: seoData?.description,
    keywords: seoData?.keywords,
    openGraph: {
      locale,
      type: 'website',
    },
    alternates: {
      canonical: `https://sajj.studio/${locale}/contact-us/`,
      languages: {
        'en-US': 'https://sajj.studio/en-US/contact-us/',
        'fr-CA': 'https://sajj.studio/fr-CA/nous-contacter/',
      },
    },
  }
}

export default async function ContactPage({
  params,
}: ContactPageProps): Promise<JSX.Element> {
  const { locale } = await params
  setRequestLocale(locale)
  const footerData = await getContactInfo()

  return (
    <Layout footerData={footerData}>
      <ContactForm />
    </Layout>
  )
}
