'use client'
import { FC, useCallback, useState } from 'react'
import { quizzes, QuizDefinition } from '@/lib/quiz-data'
import { useTranslations } from 'next-intl'
import { QuizCard } from './quiz-card'
import { QuizServiceSelector } from './quiz-service-selector'
import { QuizForm } from './quiz-form'

type Phase = 'selecting' | 'quiz' | 'complete'

export const Quiz: FC = () => {
  const t = useTranslations('quiz')

  const [phase, setPhase] = useState<Phase>('selecting')
  const [selectedQuiz, setSelectedQuiz] = useState<QuizDefinition | null>(null)
  const [currentQuestionId, setCurrentQuestionId] = useState<string | null>(
    null,
  )
  const [questionDepth, setQuestionDepth] = useState(0)

  const handleSelectService = useCallback((quiz: QuizDefinition) => {
    setSelectedQuiz(quiz)
    setCurrentQuestionId(quiz.startQuestion)
    setQuestionDepth(1)
    setPhase('quiz')
  }, [])

  const handleAnswer = useCallback(
    (answer: 'yes' | 'no') => {
      if (!selectedQuiz || !currentQuestionId) return
      const currentQuestion = selectedQuiz.questions[currentQuestionId]
      const nextId = currentQuestion[answer]

      if (nextId === null) {
        setPhase('complete')
      } else {
        setCurrentQuestionId(nextId)
        setQuestionDepth(d => d + 1)
      }
    },
    [selectedQuiz, currentQuestionId],
  )

  if (phase === 'selecting') {
    return (
      <QuizServiceSelector quizzes={quizzes} onSelect={handleSelectService} />
    )
  }

  if (phase === 'complete' && selectedQuiz) {
    return <QuizForm selectedService={selectedQuiz.id} />
  }

  if (phase === 'quiz' && selectedQuiz && currentQuestionId) {
    const question = selectedQuiz.questions[currentQuestionId]
    const questionText = t(`${selectedQuiz.id}.${question.questionKey}` as any)
    const totalQuestions = Object.keys(selectedQuiz.questions).length

    return (
      <QuizCard
        key={currentQuestionId}
        question={questionText}
        questionNumber={questionDepth}
        totalQuestions={totalQuestions}
        color={selectedQuiz.color}
        onAnswer={handleAnswer}
      />
    )
  }

  return null
}
