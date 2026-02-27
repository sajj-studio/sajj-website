import { Document } from '@contentful/rich-text-types'

export interface ContentfulImageFile {
  url: string
  details?: {
    image?: {
      width: number
      height: number
    }
  }
  fileName?: string
  contentType?: string
}

export interface ContentfulAssetFields {
  file: ContentfulImageFile
  title?: string
  description?: string
}

export interface HomepageFields {
  jumbotronTitle: string
  jumbotronText: string
  aboutUsImage: {
    fields: ContentfulAssetFields
  }
  aboutUsText: Document
}

export interface ContactInfoFields {
  email: string
  facebookPage: string
  instagramPage: string
  twitterPage: string
  linkedInPage: string
}

export interface SeoFields {
  description: string
  keywords: string[]
}
