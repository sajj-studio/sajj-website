import { createClient, ContentfulClientApi } from 'contentful'
import type {
  ContactInfoFields,
  HomepageFields,
  SeoFields,
} from './contentful-types'

let _client: ContentfulClientApi<undefined> | null = null

function getClient(): ContentfulClientApi<undefined> | null {
  if (_client) return _client
  const space = process.env.CONTENTFUL_SPACE_ID ?? 'v20z3qdbqmdq'
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
  if (!accessToken) return null
  _client = createClient({ space, accessToken })
  return _client
}

export async function getHomepageData(
  locale: string
): Promise<HomepageFields | null> {
  const client = getClient()
  if (!client) return null
  const entries = await client.getEntries({
    content_type: 'homepage',
    locale,
    include: 2,
    limit: 1,
  })
  const item = entries.items[0]
  if (!item) return null
  const f = item.fields as any
  return {
    jumbotronTitle: f.jumbotronTitle ?? '',
    jumbotronText: f.jumbotronText ?? '',
    aboutUsImage: {
      fields: {
        file: {
          url: f.aboutUsImage?.fields?.file?.url ?? '',
          details: {
            image: {
              width: f.aboutUsImage?.fields?.file?.details?.image?.width ?? 800,
              height:
                f.aboutUsImage?.fields?.file?.details?.image?.height ?? 600,
            },
          },
        },
      },
    },
    aboutUsText: f.aboutUsText ?? {
      nodeType: 'document',
      data: {},
      content: [],
    },
  }
}

export async function getContactInfo(): Promise<ContactInfoFields | null> {
  const client = getClient()
  if (!client) return null
  const entries = await client.getEntries({
    content_type: 'contactInfo',
    include: 1,
    limit: 1,
  })
  const item = entries.items[0]
  if (!item) return null
  const f = item.fields as any
  return {
    email: f.email ?? '',
    facebookPage: f.facebookPage ?? '',
    instagramPage: f.instagramPage ?? '',
    twitterPage: f.twitterPage ?? '',
    linkedInPage: f.linkedInPage ?? '',
  }
}

export async function getSeoData(locale: string): Promise<SeoFields | null> {
  const client = getClient()
  if (!client) return null
  const entries = await client.getEntries({
    content_type: 'seo',
    locale,
    include: 1,
    limit: 1,
  })
  const item = entries.items[0]
  if (!item) return null
  const f = item.fields as any
  return {
    description: f.description ?? '',
    keywords: f.keywords ?? [],
  }
}
