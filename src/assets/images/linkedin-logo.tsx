import React, { FC, useContext } from 'react'
import { DefaultTheme, ThemeContext } from 'styled-components'

interface LogoProps {
  color: keyof DefaultTheme['colors']
}

export const LinkedinLogo: FC<LogoProps> = ({ color }) => {
  const { colors } = useContext(ThemeContext)

  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5833 29.25H10.25V10.25H16.5833V13.4167C17.9333 11.6992 19.9806 10.6752 22.1646 10.6252C26.0922 10.6471 29.2614 13.8432 29.25 17.7708V29.25H22.9167V18.5625C22.6634 16.7933 21.1461 15.4807 19.3589 15.4845C18.5772 15.5092 17.8393 15.8515 17.3155 16.4323C16.7918 17.0132 16.5274 17.7824 16.5833 18.5625V29.25ZM7.08333 29.25H0.75V10.25H7.08333V29.25ZM3.91667 7.08333C2.16776 7.08333 0.75 5.66557 0.75 3.91667C0.75 2.16776 2.16776 0.75 3.91667 0.75C5.66557 0.75 7.08333 2.16776 7.08333 3.91667C7.08333 4.75652 6.7497 5.56197 6.15584 6.15584C5.56197 6.7497 4.75652 7.08333 3.91667 7.08333Z"
        fill={colors[color]}
      />
    </svg>
  )
}
