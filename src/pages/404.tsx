import React, { FC } from 'react'
import { Layout } from '../components/layout'
import { QuizCard } from '../components/quiz-card'
import { SEO } from '../components/seo'

const NotFoundPage: FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <QuizCard />
  </Layout>
)

export default NotFoundPage
