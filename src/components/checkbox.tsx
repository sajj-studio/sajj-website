import React, { FC } from 'react'
import styled, { css, DefaultTheme } from 'styled-components'
import { CheckIcon } from '../assets/images/check-icon'
import { Typography } from './typography'

interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color'> {
  label: string
  name: string
  color: keyof DefaultTheme['colors']
}

export const Checkbox: FC<CheckboxProps> = ({
  label,
  id,
  name,
  color,
  ...props
}) => {
  return (
    <InputContainer>
      <Input
        id={id ?? name}
        name={name}
        type="checkbox"
        color={color}
        {...props}
      />
      <Label htmlFor={id ?? name} color={color}>
        <div>
          <CheckIcon color={color} />
        </div>
        <Typography variant="body" color={color}>
          {label}
        </Typography>
      </Label>
    </InputContainer>
  )
}

const InputContainer = styled.div`
  margin: 0.75rem 0;
`

interface LabelProps {
  color: keyof DefaultTheme['colors']
}
const Label = styled.label<LabelProps>`
  ${({ theme, color }) => css`
    display: flex;
    align-items: center;

    & > div {
      width: 1.875rem;
      height: 1.875rem;
      border: 2px solid ${theme.colors[color]};
      padding: 0.3rem 0.2rem;
      margin-right: 1.25rem;
      box-shadow: 4px 4px 0px ${theme.colors[color]};
    }
    &:hover > div {
      position: relative;
      box-shadow: 5px 5px 0px ${theme.colors[color]};
      top: -1px;
      left: -1px;
    }

    ${Typography} {
      font-weight: 700;
    }
  `}
`

const Input = styled.input`
  visibility: hidden;

  & + ${Label} svg {
    display: none;
  }
  &:checked + ${Label} svg {
    display: initial;
  }

  &:active + ${Label} > div {
    position: relative;
    box-shadow: none;
    top: 4px;
    left: 4px;
  }
`
