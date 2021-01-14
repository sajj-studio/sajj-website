import React, { FC, useContext } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { SeoFragment } from '../graphqlTypes'
import { PageContext } from '../contexts/page-context'
import { useTranslation } from 'react-i18next'

export const fragment = graphql`
  fragment SEO on Query {
    site {
      siteMetadata {
        host
        locales
      }
    }
    contentfulSeo(node_locale: { eq: $lang }) {
      description
      keywords
    }
  }
`

type MetaProp =
  | { name: string; content: any; property?: undefined }
  | { property: string; content: any; name?: undefined }

interface SEOProps {
  data?: SeoFragment | null
  title: string
  meta?: MetaProp[]
  description?: string
}

export const SEO: FC<SEOProps> = ({
  data,
  description = '',
  meta = [],
  title,
}) => {
  const { t } = useTranslation('common')

  const metaDescription = description ?? data?.contentfulSeo?.description
  const defaultTitle = t('title')

  const { lang, originalPath } = useContext(PageContext)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `SAJJ Studio`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `og:locale`,
          content: lang,
        },
        {
          name: 'keywords',
          content: data?.contentfulSeo?.keywords?.join(', ') ?? '',
        },
      ].concat(meta)}
      link={[
        {
          rel: 'canonical',
          href: `${data?.site?.siteMetadata?.host}/${lang}${originalPath}`,
        },
        {
          rel: 'alternate',
          hrefLang: 'x-default',
          href: `${data?.site?.siteMetadata?.host}${originalPath}`,
        },
        //@ts-ignore
        ...(data?.site?.siteMetadata?.locales ?? []).map(lang => ({
          rel: 'alternate',
          hrefLang: lang,
          href: `${data?.site?.siteMetadata?.host}/${lang}${originalPath}`,
        })),
      ]}
    />
  )
}
