import { graphql, PageProps } from 'gatsby'
import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { HelloContactSection } from '../components/hello-contact'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { Typography } from '../components/typography'
import { WhatWeDo } from '../components/what-we-do'
import { IndexPageQuery } from '../graphqlTypes'
import Img from 'gatsby-image'
import { FunkyBorder, funkyBorderStyle } from '../components/funky-border'
import { AboutUsSection } from '../components/about-us-section'

export const query = graphql`
  query IndexPage($lang: String!) {
    contentfulHomepage(node_locale: { eq: $lang }) {
      jumbotronTitle
      jumbotronText
      aboutUsImage {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      ...AboutUsSection
    }
  }
`

const IndexPage: FC<PageProps<IndexPageQuery>> = ({
  data: { contentfulHomepage: data },
}) => (
  <Layout
    headerContent={
      <>
        <Typography variant="title" color="white">
          {data?.jumbotronTitle}
        </Typography>
        <Typography variant="body" color="white">
          {data?.jumbotronText}
        </Typography>
      </>
    }
  >
    <SEO title="Home" />

    <HelloContactSection />

    <ImageContainer>
      <div>
        {/*
        //@ts-ignore */}
        <Img fluid={data?.aboutUsImage?.localFile?.childImageSharp?.fluid} />
        <FunkyBorder top />
      </div>
      <Gradient />
      <DesktopOnly>{data && <AboutUsSection data={data} />}</DesktopOnly>
    </ImageContainer>
    <ContentContainer>
      <MobileOnly>{data && <AboutUsSection data={data} />}</MobileOnly>
      <WhatWeDo />
    </ContentContainer>
  </Layout>
)

export default IndexPage

const MobileOnly = styled.div`
  ${({ theme }) => css`
    display: initial;
    ${theme.media.desktop} {
      display: none;
    }
  `}
`
const DesktopOnly = styled.div`
  ${({ theme }) => css`
    display: none;
    ${theme.media.desktop} {
      display: initial;
      position: absolute;
      top: 5rem;
      bottom: 0;
      left: 0;
      right: 0;
    }
  `}
`

const ImageContainer = styled.section`
  ${funkyBorderStyle('top')};
  padding-top: 0;
  position: relative;

  & > div:first-child {
    position: relative;
  }
`
const Gradient = styled.div`
  ${({ theme }) => css`
    background: linear-gradient(
      180deg,
      rgba(100, 26, 255, 0) 33.85%,
      #641aff 100%
    );
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    ${theme.media.desktop} {
      background: linear-gradient(
        90deg,
        rgba(100, 26, 255, 1) 0%,
        rgba(100, 26, 255, 1) 30%,
        rgba(99, 24, 255, 0) 100%
      );
    }
  `}
`
const ContentContainer = styled.section`
  ${({ theme }) => css`
    background: linear-gradient(18.79deg, #182e74 20.58%, #641aff 89.82%);

    ${theme.media.desktop} {
      background: linear-gradient(180deg, #641aff 0%, #182e74 119.88%);
    }
  `}
`
