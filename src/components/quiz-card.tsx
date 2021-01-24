import React, { FC } from 'react'
import styled, { css } from 'styled-components'

export const QuizCard: FC = () => (
  <CardContainer>
    <Card>Yes or no?</Card>
    <YesOrNo yes>Yes</YesOrNo>
    <YesOrNo no>No</YesOrNo>
  </CardContainer>
)

const CardContainer = styled.div`
  position: relative;
`

const Card = styled.div`
  position: absolute;
`

interface YesOrNoProps {
  yes?: boolean
  no?: boolean
}
const YesOrNo = styled.div<YesOrNoProps>`
  ${({ yes, no, theme }) =>
    css`
      position: absolute;

      ${yes && css``}
      ${no && css``}
    `}
`
