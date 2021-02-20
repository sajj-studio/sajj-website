import React, { FC } from 'react'
import { Layout } from '../components/layout'
import { PageProps } from 'gatsby'
import styled from 'styled-components'

const BlogPage: FC<PageProps> = ({ data }) => {
  return (
    <Layout funkyHeight="half" headerVariant="mustard">
      <BlogSection />
    </Layout>
  )
}

export default BlogPage

const BlogSection = styled.div``
