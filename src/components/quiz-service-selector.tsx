'use client'
import { FC } from 'react'
import { animated, useTrail } from '@react-spring/web'
import styled, { css } from 'styled-components'
import { useTranslations } from 'next-intl'
import { QuizDefinition } from '@/lib/quiz-data'
import { Button } from './button'
import { Typography } from './typography'

type Props = {
  quizzes: QuizDefinition[]
  onSelect: (quiz: QuizDefinition) => void
}

export const QuizServiceSelector: FC<Props> = ({ quizzes, onSelect }) => {
  const t = useTranslations()

  const trail = useTrail(quizzes.length, {
    from: { opacity: 0, y: -40 },
    to: { opacity: 1, y: 0 },
    config: { tension: 220, friction: 22 },
  })

  return (
    <SelectorContainer>
      <Typography variant="title" color="blue">
        {t('quiz.selector.title')}
      </Typography>
      <ButtonList>
        {trail.map((spring, i) => {
          const quiz = quizzes[i]
          const Icon = quiz.Icon
          return (
            <animated.div key={quiz.id} style={spring}>
              {/* @ts-ignore */}
              <Button
                $icon
                fill={quiz.color}
                as="button"
                onClick={() => onSelect(quiz)}
              >
                <IconWrapper>
                  <Icon />
                </IconWrapper>
                <TextBlock>
                  <Typography
                    variant="subtitle"
                    color={quiz.color === 'blue' ? 'orange' : 'darkBlue'}
                  >
                    {t(quiz.labelKey as any)}
                  </Typography>
                  <Typography
                    variant="body"
                    color={quiz.color === 'blue' ? 'orange' : 'darkBlue'}
                  >
                    {t(`${quiz.labelKey}_desc` as any)}
                  </Typography>
                </TextBlock>
              </Button>
            </animated.div>
          )
        })}
      </ButtonList>
    </SelectorContainer>
  )
}

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2rem;
  padding: 2rem 0;

  ${({ theme }) => css`
    ${theme.media.desktop} {
      max-width: 36rem;
      margin: 0 auto;
    }
  `}
`

const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const IconWrapper = styled.div`
  flex-shrink: 0;
  width: 4rem;

  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`
