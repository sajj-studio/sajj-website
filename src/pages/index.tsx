import { graphql, PageProps } from 'gatsby'
import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { HelloContactSection } from '../components/hello-contact'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { Typography } from '../components/typography'
import { WhatWeDo } from '../components/what-we-do'
import { IndexPageQuery } from '../graphqlTypes'
import GatsbyImage from 'gatsby-image'
import { FunkyBorder, funkyBorderStyle } from '../components/funky-border'
import { AboutUsSection } from '../components/about-us-section'

export const query = graphql`
  query IndexPage($lang: String!) {
    ...SEO
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
  data,
  data: { contentfulHomepage: content },
}) => (
  <Layout
    headerVariant="standard"
    headerContent={
      <>
        <Typography variant="title" color="white">
          {content?.jumbotronTitle}
        </Typography>
        <Typography variant="body" color="white">
          {content?.jumbotronText}
        </Typography>
      </>
    }
  >
    <SEO title="Home" data={data} />

    <HelloContactSection />

    <ImageContainer
      img={content?.aboutUsImage?.localFile?.childImageSharp?.fluid?.src ?? ''}
    >
      <div id="about-us" />
      <div>
        <Image
          //@ts-ignore
          fluid={content?.aboutUsImage?.localFile?.childImageSharp?.fluid}
        />
        <FunkyBorder top />
      </div>
      <DesktopOnly>
        <AboutUsSection data={content} />
      </DesktopOnly>
    </ImageContainer>
    <ContentContainer>
      <MobileOnly>
        <AboutUsSection data={content} />
      </MobileOnly>
      <div id="what-we-do" />
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
    }
  `}
`

const ImageContainer = styled.section<{ img: string }>`
  ${({ img, theme }) => css`
    ${funkyBorderStyle('top')};
    padding-top: 0;
    position: relative;
    background: linear-gradient(
        180deg,
        rgba(100, 26, 255, 0) 33.85%,
        #641aff 100%
      ),
      url(${img});
    background-position-y: center;
    background-repeat: no-repeat;

    ${theme.media.desktop} {
      background: linear-gradient(
          90deg,
          rgba(100, 26, 255, 1) 0%,
          rgba(100, 26, 255, 1) 30%,
          rgba(99, 24, 255, 0) 100%
        ),
        url(${img});
      background-position-y: center;
    }
  `}
`

const Image = styled(GatsbyImage)`
  ${({ theme }) => css`
    opacity: 0;
    ${theme.media.desktop} {
      display: none;
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
