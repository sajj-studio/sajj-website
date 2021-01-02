import React, { FC, useContext } from 'react'
import { DefaultTheme, ThemeContext } from 'styled-components'

interface CheckIconProps {
  color: keyof DefaultTheme['colors']
}

export const CheckIcon: FC<CheckIconProps> = ({ color }) => {
  const theme = useContext(ThemeContext)

  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.81806 15.779L0.454102 9.415L3.2841 6.585L6.81806 10.129L16.716 0.221039L19.546 3.05104L6.81806 15.779Z"
        fill={theme.colors[color]}
      />
    </svg>
  )
}
