import React, { FC, useContext } from 'react'
import { ThemeContext } from 'styled-components'

export const BrandingIcon: FC = () => {
  const {
    colors: { blue, red, orange },
  } = useContext(ThemeContext)

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 68 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.9115"
        y="1.9115"
        width="33.7699"
        height="17.8407"
        fill={blue}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.3894 33.7699V19.7522H35.6814V8.2832H67.5398V70.0885H20.3894V56.708H53.5221V33.7699H20.3894Z"
        fill={red}
      />
      <rect width="33.7699" height="17.8407" fill={orange} />
      <path
        d="M9.23895 3.18585L10.6977 7.23115L14.9958 7.36844L11.5993 10.0059L12.7969 14.136L9.23895 11.7207L5.68103 14.136L6.87865 10.0059L3.48211 7.36844L7.7802 7.23115L9.23895 3.18585Z"
        fill={blue}
      />
      <path
        d="M44.9203 10.1947L45.9184 12.9625L48.8592 13.0565L46.5353 14.861L47.3547 17.6869L44.9203 16.0343L42.486 17.6869L43.3054 14.861L40.9815 13.0565L43.9222 12.9625L44.9203 10.1947Z"
        fill={orange}
      />
      <rect
        x="18.4779"
        y="4.46014"
        width="11.469"
        height="1.9115"
        fill={blue}
      />
      <rect
        x="51.6106"
        y="12.1062"
        width="11.469"
        height="2.54867"
        fill={orange}
      />
      <rect
        x="18.4779"
        y="7.64606"
        width="11.469"
        height="1.27434"
        fill={blue}
      />
      <rect
        x="51.6106"
        y="15.9292"
        width="11.469"
        height="1.27434"
        fill={orange}
      />
      <rect
        x="18.4779"
        y="10.1947"
        width="11.469"
        height="1.27434"
        fill={blue}
      />
      <rect
        x="0.5"
        y="32.3584"
        width="50.6106"
        height="21.9381"
        fill={blue}
        stroke={orange}
      />
      <rect
        x="18.4779"
        y="12.7433"
        width="11.469"
        height="1.27434"
        fill={blue}
      />
      <path
        d="M6.37165 34.407L7.29297 36.962L10.0076 37.0487L7.86237 38.7144L8.61876 41.3229L6.37165 39.7975L4.12455 41.3229L4.88094 38.7144L2.73576 37.0487L5.45034 36.962L6.37165 34.407Z"
        fill={orange}
      />
      <rect
        x="12.1062"
        y="36.9557"
        width="13.3805"
        height="1.27434"
        fill={orange}
      />
      <rect
        x="12.1062"
        y="38.8672"
        width="13.3805"
        height="0.637168"
        fill={orange}
      />
      <rect
        x="12.1062"
        y="40.1416"
        width="13.3805"
        height="0.637168"
        fill={orange}
      />
    </svg>
  )
}
