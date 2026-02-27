'use client'

import React, { FC } from 'react'
import { Link as NextIntlLink } from '@/navigation'
import type { ComponentPropsWithoutRef } from 'react'

type NextIntlLinkProps = ComponentPropsWithoutRef<typeof NextIntlLink>

// Allow string hrefs (for hash anchors like /#about-us) in addition to
// next-intl's typed pathname union
type LinkProps = Omit<NextIntlLinkProps, 'href'> & {
  href: NextIntlLinkProps['href'] | string
}

export const Link: FC<LinkProps> = ({ href, ...rest }) => (
  <NextIntlLink href={href as NextIntlLinkProps['href']} {...rest} />
)
