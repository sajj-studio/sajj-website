import React, { FC } from 'react'
import styled from 'styled-components'
import { Button } from './button'
import { Container } from './container'
import { Typography } from './typography'

export const HelloContactSection: FC = () => (
  <SectionContainer>
    <Typography variant="title" color="blue">
      Hello!
    </Typography>
    <Typography variant="body" color="blue">
      Let us know what we can do for you!
    </Typography>
    <Button to="/contact-us">Complete the form</Button>
  </SectionContainer>
)

const SectionContainer = styled(Container)`
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;

  ${Button} {
    margin-top: 2.125rem;
  }
`
