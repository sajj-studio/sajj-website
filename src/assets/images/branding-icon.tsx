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
      viewBox="0 0 113 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="11.1385"
        y="62.3754"
        width="15.5938"
        height="2.07918"
        fill={red}
      />
      <rect
        x="16.3364"
        y="67.5733"
        width="10.3959"
        height="2.07918"
        fill={red}
      />
      <rect
        x="16.3364"
        y="72.7713"
        width="10.3959"
        height="2.07918"
        fill={red}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M60.0851 37.567V21.9731H77.0965V9.2146H112.537V77.9693H60.0851V63.0842H96.9431V37.567H60.0851Z"
        fill={red}
      />
      <path
        d="M87.3742 11.341L88.4846 14.4201L91.756 14.5245L89.1708 16.532L90.0823 19.6756L87.3742 17.8373L84.6662 19.6756L85.5777 16.532L82.9925 14.5245L86.2639 14.4201L87.3742 11.341Z"
        fill="white"
      />
      <rect
        x="94.8168"
        y="13.4674"
        width="12.7586"
        height="2.83524"
        fill="white"
      />
      <rect
        x="94.8168"
        y="17.7203"
        width="12.7586"
        height="1.41762"
        fill="white"
      />
      <rect
        x="37.9382"
        y="35.9756"
        width="56.3436"
        height="24.4471"
        fill={blue}
        stroke={orange}
        stroke-width="1.07008"
      />
      <path
        d="M44.491 38.2758L45.5159 41.118L48.5357 41.2144L46.1494 43.0674L46.9908 45.9693L44.491 44.2723L41.9913 45.9693L42.8327 43.0674L40.4463 41.2144L43.4661 41.118L44.491 38.2758Z"
        fill={orange}
      />
      <rect
        x="50.8705"
        y="41.111"
        width="14.885"
        height="1.41762"
        fill={orange}
      />
      <rect
        x="50.8705"
        y="43.2375"
        width="14.885"
        height="0.708811"
        fill={orange}
      />
      <rect
        x="50.8705"
        y="44.6551"
        width="14.885"
        height="0.708811"
        fill={orange}
      />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="2"
        y="9"
        width="49"
        height="47"
      >
        <path
          d="M21.3611 26.2107L26.6963 11.4155L32.0315 26.2107C32.2657 26.8602 32.8725 27.301 33.5626 27.3231L49.2824 27.8252L36.86 37.4712C36.3146 37.8947 36.0828 38.608 36.2751 39.2712L40.6553 54.3767L27.6426 45.5431C27.0713 45.1553 26.3213 45.1553 25.75 45.5431L12.7374 54.3767L17.1175 39.2712C17.3098 38.608 17.078 37.8947 16.5327 37.4712L4.11026 27.8252L19.83 27.3231C20.5201 27.301 21.1269 26.8602 21.3611 26.2107Z"
          stroke={orange}
          stroke-width="2"
        />
      </mask>
      <g mask="url(#mask0)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M34.1713 5.61993H-3.55945V60.4364H34.1713V32.6722H53.3925V9.17944H34.1713V5.61993Z"
          fill={orange}
        />
      </g>
      <rect
        x="40.5691"
        y="3.16602"
        width="37.567"
        height="19.8467"
        fill={blue}
      />
      <rect x="37.4032" width="37.567" height="19.8467" fill={orange} />
      <path
        d="M47.6807 3.54407L49.3035 8.04422L54.0849 8.19694L50.3064 11.1309L51.6387 15.7255L47.6807 13.0386L43.7228 15.7255L45.055 11.1309L41.2766 8.19694L46.058 8.04422L47.6807 3.54407Z"
        fill={blue}
      />
      <rect
        x="57.9585"
        y="8.5058"
        width="12.7586"
        height="1.41762"
        fill={blue}
      />
      <rect
        x="57.9585"
        y="11.341"
        width="12.7586"
        height="1.41762"
        fill={blue}
      />
      <rect
        x="57.9585"
        y="14.1762"
        width="12.7586"
        height="1.41762"
        fill={blue}
      />
    </svg>
  )
}
