'use client'

import React from 'react'
import { Typography } from './typography'

interface HomeHeaderContentProps {
  title: string
  text: string
}

export function HomeHeaderContent({
  title,
  text,
}: HomeHeaderContentProps): JSX.Element {
  return (
    <>
      <Typography variant="title" color="white">
        {title}
      </Typography>
      <Typography variant="body" color="white">
        {text}
      </Typography>
    </>
  )
}
