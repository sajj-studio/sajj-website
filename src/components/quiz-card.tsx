'use client'
import { FC, useCallback, useEffect, useRef } from 'react'
import { useSpring, animated, config } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import styled, { css, DefaultTheme } from 'styled-components'
import { Typography } from './typography'

const ROTATE_MAX = 30
const ANSWER_THRESHOLD = 0.6
// Scale the YesOrNo circles during drag (1 → 2 on the active side)
const CIRCLE_DRAG_MAX = 2
// Scale the selected circle on exit (bursts to this before fading)
const CIRCLE_EXIT_MAX = 5
// Hover lean and circle scale constants
const HOVER_ROTATE = 8
const HOVER_CIRCLE_ACTIVE = 1.4
const HOVER_CIRCLE_INACTIVE = 0.8

type Props = {
  question: string
  questionNumber: number
  totalQuestions: number
  color: keyof DefaultTheme['colors']
  onAnswer: (answer: 'yes' | 'no') => void
}

export const QuizCard: FC<Props> = ({
  question,
  questionNumber,
  totalQuestions,
  color,
  onAnswer,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const answerRef = useRef<'yes' | 'no' | null>(null)
  const committedRef = useRef(false)
  const isDraggingRef = useRef(false)
  const hoverZoneRef = useRef<'yes' | 'no' | null>(null)

  // Card position + rotation
  const [cardSpring, cardApi] = useSpring(() => ({
    x: 0,
    y: -600,
    rotate: 0,
    config: config.gentle,
  }))

  // Circle scale and opacity for each side
  const [yesCircle, yesCircleApi] = useSpring(() => ({
    scale: 0,
    opacity: 1,
    config: config.gentle,
  }))
  const [noCircle, noCircleApi] = useSpring(() => ({
    scale: 0,
    opacity: 1,
    config: config.gentle,
  }))

  // Entry animation on mount
  useEffect(() => {
    cardApi.start({ y: 0, x: 0, rotate: 0 })
    yesCircleApi.start({ scale: 1, opacity: 1 })
    noCircleApi.start({ scale: 1, opacity: 1 })
  }, [cardApi, yesCircleApi, noCircleApi])

  // Shared commit: fly the card off screen and notify parent
  const commitAnswer = useCallback(
    (answer: 'yes' | 'no') => {
      if (committedRef.current) return
      committedRef.current = true
      answerRef.current = answer
      const exitX = answer === 'no' ? 1200 : -1200
      const exitRotate = answer === 'no' ? 60 : -60

      cardApi.start({
        x: exitX,
        y: 500,
        rotate: exitRotate,
        config: { tension: 200, friction: 20 },
        onRest: () => onAnswer(answer),
      })

      if (answer === 'yes') {
        yesCircleApi.start({
          scale: CIRCLE_EXIT_MAX,
          opacity: 0,
          config: { tension: 150, friction: 20 },
        })
        noCircleApi.start({
          scale: 0,
          opacity: 0,
          config: { tension: 200, friction: 25 },
        })
      } else {
        noCircleApi.start({
          scale: CIRCLE_EXIT_MAX,
          opacity: 0,
          config: { tension: 150, friction: 20 },
        })
        yesCircleApi.start({
          scale: 0,
          opacity: 0,
          config: { tension: 200, friction: 25 },
        })
      }
    },
    [cardApi, yesCircleApi, noCircleApi, onAnswer],
  )

  const bind = useDrag(({ active, movement: [mx] }) => {
    if (committedRef.current) return
    isDraggingRef.current = active

    const cardWidth = cardRef.current?.offsetWidth ?? 300
    const distancePercentage = Math.min(Math.abs(mx / cardWidth), 1)
    const direction = mx < 0 ? 'yes' : 'no'
    const committed = distancePercentage >= ANSWER_THRESHOLD

    if (active) {
      answerRef.current = direction
      hoverZoneRef.current = null

      const circleDragScale =
        1 +
        (CIRCLE_DRAG_MAX - 1) *
          Math.min(distancePercentage / ANSWER_THRESHOLD, 1)

      cardApi.start({
        x: mx,
        rotate:
          (mx < 0 ? -1 : 1) *
          ROTATE_MAX *
          Math.min(distancePercentage / ANSWER_THRESHOLD, 1),
        immediate: key => key === 'x',
      })

      if (direction === 'yes') {
        yesCircleApi.start({ scale: circleDragScale, immediate: false })
        noCircleApi.start({ scale: 1 / circleDragScale, immediate: false })
      } else {
        noCircleApi.start({ scale: circleDragScale, immediate: false })
        yesCircleApi.start({ scale: 1 / circleDragScale, immediate: false })
      }
    } else {
      if (!committed) {
        // Snap back — clear hover zone so next mousemove re-evaluates
        hoverZoneRef.current = null
        cardApi.start({ x: 0, rotate: 0 })
        yesCircleApi.start({ scale: 1 })
        noCircleApi.start({ scale: 1 })
      } else {
        commitAnswer(direction)
      }
    }
  })

  // Apply hover zone lean + circle scale
  const applyHoverZone = useCallback(
    (zone: 'yes' | 'no' | null) => {
      if (zone === null) {
        cardApi.start({ rotate: 0 })
        yesCircleApi.start({ scale: 1 })
        noCircleApi.start({ scale: 1 })
      } else if (zone === 'no') {
        cardApi.start({ rotate: HOVER_ROTATE })
        noCircleApi.start({ scale: HOVER_CIRCLE_ACTIVE })
        yesCircleApi.start({ scale: HOVER_CIRCLE_INACTIVE })
      } else {
        cardApi.start({ rotate: -HOVER_ROTATE })
        yesCircleApi.start({ scale: HOVER_CIRCLE_ACTIVE })
        noCircleApi.start({ scale: HOVER_CIRCLE_INACTIVE })
      }
    },
    [cardApi, yesCircleApi, noCircleApi],
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isDraggingRef.current || committedRef.current) return
      const card = cardRef.current
      if (!card) return

      const rect = card.getBoundingClientRect()
      const percentage = (e.clientX - rect.left) / rect.width

      let zone: 'yes' | 'no' | null = null
      if (percentage <= 0.25) zone = 'no'
      else if (percentage >= 0.75) zone = 'yes'

      // Update cursor directly on the DOM element — no re-render
      card.style.cursor = zone !== null ? 'pointer' : 'default'

      if (zone === hoverZoneRef.current) return
      hoverZoneRef.current = zone
      applyHoverZone(zone)
    },
    [applyHoverZone],
  )

  const handleMouseLeave = useCallback(() => {
    if (isDraggingRef.current || committedRef.current) return
    hoverZoneRef.current = null
    applyHoverZone(null)
  }, [applyHoverZone])

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (committedRef.current) return
      const card = cardRef.current
      if (!card) return

      const rect = card.getBoundingClientRect()
      const percentage = (e.clientX - rect.left) / rect.width

      if (percentage <= 0.25) commitAnswer('no')
      else if (percentage >= 0.75) commitAnswer('yes')
    },
    [commitAnswer],
  )

  return (
    <CardContainer>
      <Card
        $color={color}
        ref={cardRef}
        style={{
          x: cardSpring.x,
          y: cardSpring.y,
          rotate: cardSpring.rotate,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        {...bind()}
      >
        <Stripes />
        <CardNumber>
          <Typography variant="title" color={color}>
            {questionNumber}
          </Typography>
        </CardNumber>
        <CardQuestion color="white" variant="title">
          {question}
        </CardQuestion>
        <CardProgress>
          <Typography variant="body" color="white">
            {questionNumber} / {totalQuestions}
          </Typography>
        </CardProgress>
      </Card>

      <YesOrNo
        $side="no"
        style={{
          transform: noCircle.scale.to(s => `scale(${s})`),
          opacity: noCircle.opacity,
        }}
      >
        <Typography color="white" variant="title">
          No
        </Typography>
      </YesOrNo>

      <YesOrNo
        $side="yes"
        style={{
          transform: yesCircle.scale.to(s => `scale(${s})`),
          opacity: yesCircle.opacity,
        }}
      >
        <Typography color="white" variant="title">
          Yes
        </Typography>
      </YesOrNo>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  position: relative;
  height: 30rem;
  user-select: none;
  max-width: 450px;
  margin: 0 auto;
`

const Card = styled(animated.div)<{ $color: keyof DefaultTheme['colors'] }>`
  ${({ theme, $color }) => css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 2rem;
    right: 2rem;
    border-radius: 20px;
    background: ${theme.colors[$color]};
    display: flex;
    align-items: center;
    z-index: 2;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    margin-bottom: 2rem;
    transform-origin: bottom center;
    touch-action: none;
  `}
`

const Stripes = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 4.6875rem;
  background: repeating-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0) 10px,
    rgba(255, 255, 255, 0.3) 10px,
    rgba(255, 255, 255, 0.3) 20px
  );
`

const CardNumber = styled.div`
  position: absolute;
  width: 4rem;
  height: 4rem;
  top: 3.625rem;
  left: 2.5625rem;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${Typography} {
    font-size: 2.5rem;
  }
`

const CardQuestion = styled(Typography)`
  margin-left: 6rem;
  font-size: 2rem;
  line-height: 2rem;
  width: 11rem;
`

const CardProgress = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1.5rem;
  opacity: 0.7;
`

const YesOrNo = styled(animated.div)<{ $side: 'yes' | 'no' }>`
  ${({ theme, $side }) => css`
    position: absolute;
    top: 10.375rem;
    width: 9.25rem;
    height: 9.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    z-index: 1;
    transform-origin: center center;

    ${$side === 'no' &&
    css`
      left: 0;
      background: ${theme.colors.red};
    `}

    ${$side === 'yes' &&
    css`
      right: 0;
      background: #68d1d8;
    `}
  `}
`
