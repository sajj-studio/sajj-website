import React, { FC, useContext } from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { SeoQuery } from '../graphqlTypes'
import { PageContext } from '../contexts/page-context'

export const query = graphql`
  query SEO {
    site {
      siteMetadata {
        host
        title
        locales
      }
    }
  }
`

type MetaProp =
  | { name: string; content: any; property?: undefined }
  | { property: string; content: any; name?: undefined }

interface SEOProps {
  title: string
  meta?: MetaProp[]
  description?: string
}

export const SEO: FC<SEOProps> = ({ description = '', meta = [], title }) => {
  const data = useStaticQuery<SeoQuery>(query)

  const metaDescription = description
  const defaultTitle = data.site?.siteMetadata?.title

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
      ].concat(meta)}
      link={[
        {
          rel: 'canonical',
          href: `${data.site?.siteMetadata?.host}/${lang}${originalPath}`,
        },
        {
          rel: 'alternate',
          hrefLang: 'x-default',
          href: `${data.site?.siteMetadata?.host}${originalPath}`,
        },
        //@ts-ignore
        ...(data.site?.siteMetadata?.locales ?? []).map(lang => ({
          rel: 'alternate',
          hrefLang: lang,
          href: `${data.site?.siteMetadata?.host}/${lang}${originalPath}`,
        })),
      ]}
    />
  )
}
