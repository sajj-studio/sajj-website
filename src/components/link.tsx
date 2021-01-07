import React, { FC, useContext } from 'react'
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby'
import { PageContext } from '../contexts/page-context'
import { routes } from '../routes'

export const Link: FC<GatsbyLinkProps> = ({ to, ref, ...rest }) => {
  const { lang } = useContext(PageContext)
  return <GatsbyLink {...rest} to={`/${lang}${routes[to][lang]}`} />
}
