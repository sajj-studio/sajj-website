import { PageProps } from 'gatsby'
import React, { FC } from 'react'
import styled from 'styled-components'
import { Layout } from '../components/layout'
import { Container } from '../components/container'
import { Typography } from '../components/typography'

const AboutUsPage: FC<PageProps> = ({ data }) => {
  return (
    <Layout funkyBorder={false} logoGradient={true} whiteHamburger="gray">
      <IndividualInfo>
        <Container>
          <ImageContainer></ImageContainer>
          <Typography variant="body" color="darkBlue">
            Something really really really really awesome. Text about some dude
            or the company or Something I dont know really but facts
          </Typography>
        </Container>
      </IndividualInfo>
    </Layout>
  )
}

export default AboutUsPage

const IndividualInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ImageContainer = styled.img`
  width: 100%;
  height: auto;
`
