import { CreatePageArgs } from 'gatsby'
import { routes } from '../routes'
import config from './gatsby-config'

const exclusions = ['/dev-404-page/', '/404/', '/404.html']

export const onCreatePage = ({
  page,
  actions: { deletePage, createPage, createRedirect },
}: CreatePageArgs): void => {
  if (exclusions.includes(page.path)) return
  deletePage(page)

  for (const lang of config.siteMetadata.locales) {
    const localizedPath = `${lang}${routes[page.path][lang]}`

    createPage({
      ...page,
      path: localizedPath,
      context: {
        ...page.context,
        originalPath: page.path,
        lang,
      },
    })
    createRedirect({
      fromPath: page.path,
      toPath: localizedPath,
      Language: lang,
      isPermanent: false,
      redirectInBrowser: process.env.NODE_ENV === 'development',
      statusCode: 301,
    })
  }

  createRedirect({
    fromPath: page.path,
    toPath: `/${config.siteMetadata.defaultLocale}${page.path}`,
    isPermanent: false,
    redirectInBrowser: process.env.NODE_ENV === 'development',
    statusCode: 301,
  })
}
