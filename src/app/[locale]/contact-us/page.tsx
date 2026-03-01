import { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { Layout } from '@/components/layout'
import { ContactForm } from '@/components/contact-form'
import { ReactNode } from 'react'

interface ContactPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'seo' })
  return {
    title: 'Contact Us',
    description: t('description'),
    keywords: t('keywords')
      .split(',')
      .map(k => k.trim()),
    openGraph: {
      locale,
      type: 'website',
    },
    alternates: {
      canonical: `https://sajj.studio/${locale}/contact-us/`,
      languages: {
        en: 'https://sajj.studio/en/contact-us/',
        fr: 'https://sajj.studio/fr/nous-contacter/',
      },
    },
  }
}

export default async function ContactPage({
  params,
}: ContactPageProps): Promise<ReactNode> {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <Layout>
      <ContactForm />
    </Layout>
  )
}
