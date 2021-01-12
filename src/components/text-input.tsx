import React, { FC } from 'react'
import styled, { css, DefaultTheme } from 'styled-components'
import { Typography } from './typography'

interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  render?: 'input' | 'textarea'
  label: string
  name: string
  color: keyof DefaultTheme['colors']
}

export const TextInput: FC<TextInputProps> = ({
  render = 'input',
  label,
  name,
  color,
  placeholder,
  ...props
}) => {
  return (
    <InputContainer>
      <Input
        as={render}
        color={color}
        id={name}
        name={name}
        placeholder={label}
        {...props}
      />
      <Label htmlFor={name}>
        <Typography variant="body" color={color}>
          {label}
        </Typography>
      </Label>
    </InputContainer>
  )
}

const InputContainer = styled.div`
  position: relative;
  margin: 1.5rem 0;
`

interface InputProps {
  color: keyof DefaultTheme['colors']
}
const Input = styled.input<InputProps>`
  ${({ theme, color }) =>
    css`
      padding: 0.8rem 2.3125rem;
      color: ${theme.colors[color]};
      border: 2px solid ${theme.colors[color]};
      border-radius: 25px;
      font-family: ${theme.typography.sansSerif};
      font-size: 1rem;
      width: 100%;
      box-sizing: border-box;
      ::placeholder {
        color: white;
      }

      :focus {
        outline: none;
      }

      :not(:placeholder-shown) + ${Label} {
        transform: scale(0.7, 0.7) translate(-1.25rem, -3rem);
      }
    `}
`

const Label = styled.label`
  ${({ theme }) => css`
    position: absolute;
    top: 0.9rem;
    left: 2.5rem;
    z-index: 2;
    transition: ${theme.transitions.default};
  `}
`
