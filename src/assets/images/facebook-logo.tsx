import React, { FC, useContext } from 'react'
import { DefaultTheme, ThemeContext } from 'styled-components'

interface LogoProps {
  color: keyof DefaultTheme['colors']
}

export const FacebookLogo: FC<LogoProps> = ({ color }) => {
  const { colors } = useContext(ThemeContext)

  return (
    <svg
      width="31"
      height="30"
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.919586 15.5029C0.921283 22.677 6.13809 28.7854 13.2235 29.9098V19.7175H9.52375V15.5029H13.2279V12.2946C13.0623 10.7743 13.5816 9.25918 14.6449 8.16009C15.7082 7.061 17.2053 6.49188 18.7302 6.60707C19.8247 6.62474 20.9165 6.72222 21.9969 6.89873V10.4848H20.1535C19.5189 10.4017 18.8809 10.6112 18.4193 11.0545C17.9576 11.4978 17.7222 12.1267 17.7794 12.7642V15.5029H21.8204L21.1744 19.7189H17.7794V29.9098C25.4422 28.6988 30.8156 21.7005 30.0068 13.9849C29.198 6.26927 22.4902 0.53738 14.7429 0.941702C6.99553 1.34602 0.920818 7.74502 0.919586 15.5029Z"
        fill={colors[color]}
      />
    </svg>
  )
}
