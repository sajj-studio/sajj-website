import React, { FC, useRef, useState } from 'react'
import { useSpring, animated, config } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import styled, { css } from 'styled-components'
import { Typography } from './typography'

const SCALE = {
  min: 1,
  max: 2,
}
const ROTATE = {
  min: 0,
  max: 30,
}
const ANSWER_THRESHOLD = 0.6

export const QuizCard: FC = () => {
  const [response, setResponse] = useState<'yes' | 'no' | undefined>()

  const cardRef = useRef<HTMLDivElement | null>(null)

  const [{ scale, rotate }, set] = useSpring(() => ({
    rotate: ROTATE.min + 'deg',
    scale: SCALE.min,
    config: config.gentle,
  }))

  const bind = useDrag(({ active, movement: [mx] }) => {
    const cardWidth = cardRef.current?.offsetWidth ?? 0
    const distancePercentage = Math.min(Math.abs(mx / cardWidth), 1)

    // If mx < 0, swiping left => yes
    setResponse(mx < 0 ? 'yes' : 'no')

    if (active) {
      // If the animation is at less than threshold, let them swipe
      if (distancePercentage < ANSWER_THRESHOLD) {
        set({
          scale: SCALE.max - 1 + distancePercentage,
          rotate: (mx < 0 ? '-' : '') + ROTATE.max * distancePercentage + 'deg',
        })
        // Otherwise lock into the end of the animation
      } else {
        set({
          scale: SCALE.max,
          rotate: (mx < 0 ? '-' : '') + ROTATE.max + 'deg',
        })
      }
    } else {
      // If the animation didn't reach the threshold, reset it, along with the answer
      if (distancePercentage < ANSWER_THRESHOLD) {
        setResponse(undefined)
        set({
          rotate: ROTATE.min + 'deg',
          scale: SCALE.min,
        })
      }
    }
  })

  return (
    <CardContainer>
      <Card
        ref={cardRef}
        style={{
          transform: rotate.interpolate(rotate => `rotate(${rotate})`),
        }}
        {...bind()}
      >
        <Stripes />
        <CardNumber>
          <Typography variant="title" color="orange">
            1
          </Typography>
        </CardNumber>
        <CardQuestion color="white" variant="title">
          Do you need a shop on your website?
        </CardQuestion>
      </Card>
      <YesOrNo
        no
        style={{
          transform: scale.interpolate(
            (scale = 0) =>
              `scale(${
                response === 'no'
                  ? scale
                  : response === 'yes'
                  ? scale ** -1
                  : SCALE.min
              })`
          ),
        }}
      >
        <Typography color="white" variant="title">
          No
        </Typography>
      </YesOrNo>
      <YesOrNo
        yes
        style={{
          transform: scale.interpolate(
            (scale = 0) =>
              `scale(${
                response === 'yes'
                  ? scale
                  : response === 'no'
                  ? scale ** -1
                  : SCALE.min
              })`
          ),
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
`

const Card = styled(animated.div)`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 2rem;
    right: 2rem;
    border-radius: 20px;
    background: ${theme.colors.orange};
    display: flex;
    align-items: center;
    z-index: 2;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    margin-bottom: 2rem;

    transform-origin: bottom center;
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

interface YesProps {
  yes: boolean
}
interface NoProps {
  no: boolean
}
const YesOrNo = styled(animated.div)<YesProps | NoProps>`
  ${({ theme, ...props }) =>
    css`
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

      ${'no' in props &&
      css`
        left: 0;
        background: ${theme.colors.red};
      `}
      ${'yes' in props &&
      css`
        right: 0;
        background: #68d1d8;
      `}
    `}
`
