import React, { FC } from 'react'
import styled from 'styled-components'
import { Container } from '../components/container'
import { Layout } from '../components/layout'
import { QuizCard } from '../components/quiz-card'

const QuizPage: FC = () => {
  return (
    <Layout headerVariant="grayscale" funkyHeight="half">
      <SectionContainer>
        <QuizCard />
      </SectionContainer>
    </Layout>
  )
}

export default QuizPage

const SectionContainer = styled(Container)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`
