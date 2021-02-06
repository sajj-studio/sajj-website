import React, { FC, useCallback, useState } from 'react'
import styled, { css } from 'styled-components'
import { Typography } from './typography'

export const QuizCard: FC = () => {
  const [response, setResponse] = useState<'yes' | 'no'>()
  const randomResponse = useCallback(() => {
    setResponse(Math.round(Math.random() * 100) % 2 === 0 ? 'yes' : 'no')
  }, [])
  const clearResponse = useCallback(() => {
    setResponse(undefined)
  }, [])

  return (
    <CardContainer>
      <Card
        tilt={
          response === 'yes' ? 'left' : response === 'no' ? 'right' : undefined
        }
        onMouseEnter={randomResponse}
        onMouseLeave={clearResponse}
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
      <YesOrNo no selected={response === 'no'}>
        <Typography color="white" variant="title">
          No
        </Typography>
      </YesOrNo>
      <YesOrNo yes selected={response === 'yes'}>
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
`

interface CardProps {
  tilt?: 'left' | 'right'
}
const Card = styled.div<CardProps>`
  ${({ theme, tilt }) => css`
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

    transform-origin: bottom center;
    transition: transform 0.2s ease-in;

    ${tilt === 'left' &&
    css`
      transform: rotate(-22deg);
    `}
    ${tilt === 'right' &&
    css`
      transform: rotate(22deg);
    `}
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
interface YesOrNoProps {
  selected?: boolean
}
const YesOrNo = styled.div<(YesProps | NoProps) & YesOrNoProps>`
  ${({ theme, selected, ...props }) =>
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

      transition: transform 0.2s ease-in;

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

      ${selected &&
      'no' in props &&
      css`
        transform: scale(2) translate(-1rem);
      `}
      ${selected &&
      'yes' in props &&
      css`
        transform: scale(2) translate(1rem);
      `}
    `}
`
