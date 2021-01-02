import React, { FC, useContext } from 'react'
import { DefaultTheme, ThemeContext } from 'styled-components'

interface LogoProps {
  color?: keyof DefaultTheme['colors']
}

export const SajjLogo: FC<LogoProps> = ({ color = 'white' }) => {
  const { colors } = useContext(ThemeContext)

  return (
    <svg
      width="100%`"
      height="100%`"
      viewBox="0 0 74 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2611 24.5579L8.45735 23.5095C7.39857 23.0978 6.62879 22.6618 6.14804 22.2016C5.66728 21.7413 5.42445 21.1158 5.41955 20.3251C5.41955 19.5322 5.7467 18.8739 6.40101 18.3503C7.05532 17.8266 7.91221 17.5652 8.9717 17.5659C10.8401 17.5659 12.9115 18.0735 15.1859 19.0887C15.5903 18.7396 15.9252 18.232 16.1904 17.5659C16.443 16.9657 16.5627 16.3163 16.541 15.6638C14.252 14.5716 11.7558 14.0033 9.22783 13.9989C6.72047 13.9989 4.69596 14.6251 3.15432 15.8775C1.61267 17.1299 0.841152 18.819 0.839752 20.9449C0.839752 23.8928 2.83416 26.1284 6.82299 27.6515L9.43986 28.6977C11.4637 29.4906 12.4759 30.6165 12.4766 32.0756C12.4451 32.996 12.0403 33.749 11.2621 34.3346C10.484 34.9202 9.30795 35.2134 7.73412 35.2141C6.16098 35.2141 4.09659 34.5017 1.54095 33.0769C1.09212 33.4869 0.734281 33.9897 0.491255 34.5515C0.218101 35.0992 0.0513008 35.6953 0 36.3073C2.58574 37.8917 5.27259 38.6839 8.06057 38.6839C10.8485 38.6839 13.0602 38.0502 14.6957 36.7828C16.3311 35.5154 17.1488 33.8188 17.1488 31.693C17.1481 28.4907 15.1855 26.1123 11.2611 24.5579Z"
        fill={colors[color]}
      />
      <path
        d="M39.0149 31.8362V22.0851C39.0149 19.4534 38.3532 17.4715 37.0299 16.1393C35.7066 14.8071 33.8451 14.141 31.4455 14.141C28.3301 14.141 25.1373 14.8705 21.8671 16.3295C21.9287 17.7543 22.3804 18.896 23.2223 19.7544C26.1502 18.517 28.6264 17.8986 30.6509 17.8993C33.2675 17.8993 34.5757 19.3419 34.5757 22.2272V24.1785C33.044 23.9536 31.4983 23.8421 29.9508 23.8451C27.2713 23.8451 25.1142 24.503 23.4794 25.8188C21.8447 27.1346 21.027 29.0938 21.0263 31.6962C21.0016 33.501 21.6433 35.2496 22.8244 36.5958C24.0232 37.9878 25.7923 38.6839 28.1317 38.6839C30.4711 38.6839 32.7605 37.5739 34.9998 35.3541C35.6541 37.0346 36.8378 38.0495 38.5509 38.3985C39.4221 37.9219 40.0142 37.129 40.327 36.0198C39.4515 35.2604 39.0142 33.8658 39.0149 31.8362ZM34.5757 31.8832C32.8311 33.9492 30.9155 34.98 28.8287 34.9758C27.8014 34.9758 26.9994 34.6427 26.4228 33.9766C25.8461 33.3105 25.5582 32.3751 25.5589 31.1704C25.5589 29.965 25.9637 28.9819 26.7734 28.2211C27.583 27.4602 28.7821 27.0798 30.3707 27.0798C31.7758 27.069 33.1803 27.1483 34.5757 27.317V31.8832Z"
        fill={colors[color]}
      />
      <path
        d="M57.5996 8.99026H57.0391C55.9308 8.99164 54.8235 9.05514 53.7221 9.18048C53.6212 9.76225 53.5584 10.3502 53.5342 10.9405C53.554 11.4681 53.6165 11.9931 53.721 12.5103H54.6553C55.4026 12.5103 55.9243 12.6927 56.2204 13.0574C56.5164 13.4222 56.6644 14.0484 56.6644 14.936V34.2961C56.6644 35.8805 56.4306 37.0856 55.9632 37.9113C55.4957 38.7369 54.608 39.4821 53.3001 40.1468C53.487 41.3828 53.9387 42.3339 54.6553 43C56.9289 42.3973 58.5954 41.4619 59.6549 40.1938C60.0909 39.6239 60.4492 38.7597 60.7298 37.6014C61.0104 36.443 61.1504 34.5006 61.1497 31.7742V13.0371C61.1497 11.7697 60.8302 10.7791 60.1913 10.0653C59.5524 9.35146 58.6885 8.99311 57.5996 8.99026Z"
        fill={colors[color]}
      />
      <path
        d="M58.0668 5.23621C59.1577 5.23621 59.9678 5.04564 60.4968 4.6645C60.7452 4.09458 60.8698 3.4128 60.8705 2.61918C60.8712 1.82555 60.7466 1.14271 60.4968 0.57064C59.9664 0.190214 59.1721 0 58.114 0C57.0559 0 56.1994 0.190214 55.5444 0.57064C55.2945 1.14057 55.1696 1.82234 55.1696 2.61597C55.1696 3.40959 55.2945 4.09137 55.5444 4.6613C56.1357 5.04458 56.9765 5.23621 58.0668 5.23621Z"
        fill={colors[color]}
      />
      <path
        d="M73.0416 10.061C72.4034 9.34861 71.5392 8.9924 70.4489 8.9924H69.8883C68.7797 8.9938 67.672 9.0573 66.5703 9.18261C66.4697 9.76441 66.4073 10.3524 66.3834 10.9426C66.4032 11.4702 66.4657 11.9953 66.5703 12.5124H67.5055C68.2529 12.5124 68.7746 12.6948 69.0706 13.0595C69.3666 13.4243 69.5147 14.0505 69.5147 14.9382V34.2961C69.5147 35.8805 69.2809 37.0856 68.8135 37.9113C68.346 38.7369 67.4583 39.4821 66.1504 40.1468C66.3372 41.3828 66.789 42.3339 67.5055 43C69.7785 42.3973 71.445 41.4619 72.5052 40.1938C72.9405 39.6239 73.2984 38.7597 73.5791 37.6014C73.8597 36.443 73.9996 34.5006 73.9989 31.7742V13.0371C74.0017 11.7669 73.6826 10.7749 73.0416 10.061Z"
        fill={colors[color]}
      />
      <path
        d="M70.916 5.23621C72.0056 5.23621 72.8156 5.04564 73.3461 4.6645C73.5952 4.09458 73.7197 3.4128 73.7197 2.61918C73.7197 1.82555 73.5952 1.14271 73.3461 0.57064C72.8163 0.190214 72.0206 0 70.9591 0C69.8975 0 69.042 0.190214 68.3926 0.57064C68.1427 1.14057 68.0182 1.82234 68.0189 2.61597C68.0196 3.40959 68.1441 4.09137 68.3926 4.6613C68.9839 5.04458 69.825 5.23621 70.916 5.23621Z"
        fill={colors[color]}
      />
      <path
        d="M47.9026 16.7773C46.813 16.7773 46.0033 16.9678 45.4736 17.349C45.2238 17.9189 45.0992 18.6007 45.0999 19.3943C45.1006 20.1879 45.2252 20.8697 45.4736 21.4396C46.0033 21.82 46.7976 22.0103 47.8564 22.0103C48.9152 22.0103 49.7717 21.82 50.426 21.4396C50.6759 20.8697 50.8004 20.1879 50.7997 19.3943C50.799 18.6007 50.6745 17.9189 50.426 17.349C49.8354 16.9678 48.9943 16.7773 47.9026 16.7773Z"
        fill={colors[color]}
      />
      <path
        d="M47.9026 28.7639C46.813 28.7639 46.0033 28.9541 45.4736 29.3346C45.2238 29.9045 45.0992 30.5863 45.0999 31.3799C45.1006 32.1735 45.2252 32.8553 45.4736 33.4252C46.0033 33.8056 46.7976 33.9959 47.8564 33.9959C48.9152 33.9959 49.7717 33.8056 50.426 33.4252C50.6759 32.8553 50.8004 32.1735 50.7997 31.3799C50.799 30.5863 50.6745 29.9045 50.426 29.3346C49.8354 28.9541 48.9943 28.7639 47.9026 28.7639Z"
        fill={colors[color]}
      />
    </svg>
  )
}
