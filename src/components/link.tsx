import React, { FC, useContext } from 'react'
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby'
import { PageContext } from '../contexts/page-context'
import { routes } from '../routes'

export const Link: FC<GatsbyLinkProps<unknown>> = ({ to, ref, ...rest }) => {
  const { lang } = useContext(PageContext)
  const matchArray = to?.match(/(\/([A-Za-z-]*\/)?)(#[A-Za-z-]+)?/)

  const route = matchArray?.[1] ?? ''
  const anchor = matchArray?.[3]

  return (
    <GatsbyLink
      {...rest}
      to={`/${lang}${routes[route][lang]}${anchor ?? ''}`}
    />
  )
}
