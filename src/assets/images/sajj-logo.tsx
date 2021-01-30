import React, { FC, useContext } from 'react'
import { DefaultTheme, ThemeContext } from 'styled-components'

interface LogoProps {
  color?: keyof DefaultTheme['colors']
  gradient: 'standard' | 'grayscale'
  standardDesktop?: boolean
}

export const SajjLogo: FC<LogoProps> = ({
  color = 'white',
  gradient,
  standardDesktop,
}) => {
  const { colors } = useContext(ThemeContext)

  return gradient === 'grayscale' ? (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 74 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M60.4977 4.67138C59.9687 5.05308 59.1586 5.24393 58.0676 5.24393C56.9773 5.24393 56.1365 5.05201 55.5452 4.66817C55.2953 4.0974 55.1704 3.41462 55.1704 2.61983C55.1704 1.82503 55.2953 1.14225 55.5452 0.571482C56.2002 0.190494 57.0568 0 58.1149 0C59.173 0 59.9673 0.190494 60.4977 0.571482C60.7475 1.14439 60.8721 1.82824 60.8714 2.62304C60.8707 3.41783 60.7461 4.10061 60.4977 4.67138ZM57.6006 9.00351H57.0401C55.9318 9.00488 54.8244 9.06848 53.723 9.194C53.6221 9.77664 53.5593 10.3655 53.5351 10.9566C53.5549 11.485 53.6174 12.0108 53.722 12.5287H54.6562C55.4036 12.5287 55.9253 12.7114 56.2213 13.0767C56.5173 13.4419 56.6653 14.0691 56.6653 14.9581V34.3467C56.6653 35.9334 56.4316 37.1403 55.9641 37.9672C55.4967 38.7941 54.609 39.5403 53.301 40.206C53.4879 41.4438 53.9396 42.3963 54.6562 43.0634C56.9299 42.4598 58.5964 41.523 59.6559 40.2531C60.0919 39.6823 60.4502 38.8169 60.7308 37.6568C61.0115 36.4967 61.1514 34.5515 61.1507 31.821V13.0563C61.1507 11.7871 60.8313 10.795 60.1923 10.0801C59.5534 9.36523 58.6895 9.00636 57.6006 9.00351ZM8.45747 23.5442L11.2612 24.5941C15.1857 26.1508 17.1483 28.5327 17.149 31.7397C17.149 33.8687 16.3313 35.5678 14.6959 36.837C13.0604 38.1063 10.8487 38.7409 8.06068 38.7409C5.27267 38.7409 2.58577 37.9475 0 36.3608C0.0513016 35.7479 0.218104 35.1509 0.491262 34.6025C0.734291 34.0398 1.09214 33.5363 1.54097 33.1256C4.09665 34.5525 6.16107 35.266 7.73423 35.266C9.30808 35.2653 10.4841 34.9717 11.2623 34.3852C12.0405 33.7988 12.4453 33.0446 12.4768 32.1228C12.4761 30.6617 11.4638 29.5341 9.44 28.74L6.82308 27.6923C2.8342 26.1669 0.839764 23.928 0.839764 20.9757C0.841164 18.8468 1.6127 17.1552 3.15436 15.9009C4.69603 14.6466 6.72056 14.0195 9.22796 14.0195C11.7559 14.0239 14.2522 14.5931 16.5413 15.6869C16.5629 16.3404 16.4432 16.9907 16.1906 17.5918C15.9254 18.2589 15.5906 18.7672 15.1861 19.1168C12.9117 18.1001 10.8403 17.5918 8.97183 17.5918C7.91233 17.5911 7.05542 17.8529 6.4011 18.3773C5.74678 18.9017 5.41963 19.5609 5.41963 20.355C5.42453 21.147 5.66736 21.7734 6.14812 22.2343C6.62889 22.6952 7.39867 23.1318 8.45747 23.5442ZM39.0154 22.1176V31.8831C39.0147 33.9158 39.452 35.3124 40.3275 36.0729C40.0147 37.1838 39.4226 37.9778 38.5514 38.4552C36.8383 38.1056 35.6545 37.0892 35.0002 35.4062C32.7609 37.6293 30.4715 38.7409 28.132 38.7409C25.7926 38.7409 24.0235 38.0438 22.8247 36.6497C21.6436 35.3015 21.0019 33.5504 21.0266 31.7429C21.0273 29.1367 21.845 27.1746 23.4797 25.8569C25.1145 24.5391 27.2716 23.8802 29.9512 23.8802C31.4987 23.8773 33.0444 23.9889 34.5762 24.2141V22.26C34.5762 19.3705 33.2679 17.9257 30.6513 17.9257C28.6268 17.925 26.1505 18.5443 23.2225 19.7835C22.3807 18.9238 21.929 17.7805 21.8674 16.3536C25.1376 14.8924 28.3304 14.1618 31.4459 14.1618C33.8456 14.1618 35.707 14.8289 37.0304 16.1631C38.3537 17.4973 39.0154 19.4821 39.0154 22.1176ZM28.829 35.0273C30.9158 35.0316 32.8315 33.9992 34.5762 31.9302V27.3573C33.1807 27.1883 31.7762 27.1089 30.371 27.1197C28.7825 27.1197 27.5834 27.5007 26.7737 28.2627C25.964 29.0246 25.5592 30.0092 25.5592 31.2164C25.5585 32.4229 25.8465 33.3596 26.4231 34.0267C26.9997 34.6938 27.8017 35.0273 28.829 35.0273ZM73.0427 10.0759C72.4045 9.36241 71.5402 9.00568 70.4499 9.00568H69.8894C68.7807 9.00708 67.673 9.07068 66.5713 9.19617C66.4707 9.77883 66.4082 10.3677 66.3844 10.9588C66.4042 11.4872 66.4667 12.013 66.5713 12.5309H67.5065C68.2539 12.5309 68.7756 12.7135 69.0717 13.0788C69.3677 13.4441 69.5157 14.0712 69.5157 14.9602V34.3467C69.5157 35.9335 69.2819 37.1403 68.8145 37.9672C68.347 38.7941 67.4593 39.5404 66.1514 40.206C66.3382 41.4439 66.7899 42.3963 67.5065 43.0634C69.7795 42.4598 71.4461 41.5231 72.5063 40.2531C72.9416 39.6823 73.2995 38.8169 73.5801 37.6568C73.8608 36.4967 74.0007 34.5515 74 31.8211V13.0563C74.0028 11.7842 73.6837 10.7908 73.0427 10.0759ZM73.3471 4.67138C72.8166 5.05308 72.0066 5.24393 70.917 5.24393C69.826 5.24393 68.9848 5.05201 68.3935 4.66817C68.1451 4.0974 68.0205 3.41462 68.0198 2.61983C68.0191 1.82503 68.1437 1.14225 68.3935 0.571482C69.0429 0.190494 69.8984 0 70.96 0C72.0216 0 72.8173 0.190494 73.3471 0.571482C73.5962 1.14439 73.7208 1.82824 73.7208 2.62304C73.7208 3.41783 73.5962 4.10061 73.3471 4.67138ZM47.9033 16.802C46.8137 16.802 46.004 16.9929 45.4743 17.3746C45.2245 17.9453 45.0999 18.6281 45.1006 19.4229C45.1013 20.2177 45.2259 20.9005 45.4743 21.4712C46.004 21.8522 46.7983 22.0427 47.8571 22.0427C48.9159 22.0427 49.7725 21.8522 50.4268 21.4712C50.6766 20.9005 50.8012 20.2177 50.8005 19.4229C50.7998 18.6281 50.6752 17.9453 50.4268 17.3746C49.8362 16.9929 48.995 16.802 47.9033 16.802ZM45.4743 29.3778C46.004 28.9968 46.8137 28.8063 47.9033 28.8063C48.995 28.8063 49.8362 28.9968 50.4268 29.3778C50.6752 29.9486 50.7998 30.6314 50.8005 31.4262C50.8012 32.221 50.6766 32.9037 50.4268 33.4745C49.7725 33.8555 48.9159 34.046 47.8571 34.046C46.7983 34.046 46.004 33.8555 45.4743 33.4745C45.2259 32.9037 45.1013 32.221 45.1006 31.4262C45.0999 30.6314 45.2245 29.9486 45.4743 29.3778Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="1.86986"
          y1="45.1033"
          x2="71.3026"
          y2="-1.3187"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#641AFF" />
          <stop offset="0.489583" stop-color="#F25767" />
          <stop offset="1" stop-color="#FFC431" />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 641 441"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.1156 247.595L14.1112 247.586V247.595L13.8467 247.596C13.8987 247.592 13.9612 247.588 14.0346 247.587C10.7694 247.651 6.77572 248.697 4.16315 250.656C1.1007 252.951 -0.31946 256.17 0.0602715 260.377C0.363009 263.968 2.27618 268.797 6.01545 274.777C9.56284 280.45 14.8638 286.142 21.9585 291.815C28.9719 297.423 38.0778 302.213 49.2992 306.138C60.4247 310.03 73.7714 312.001 89.3472 312.001C108.807 312.001 125.134 309.114 138.339 303.418C151.806 297.608 161.985 289.707 168.932 279.787C175.953 269.762 179.459 258.732 179.459 246.701C179.459 235.832 177.142 226.256 172.564 217.962C167.986 209.669 160.308 202.33 149.437 196.039C138.911 189.948 124.521 185.068 106.243 181.467C89.9612 177.73 77.6606 174.265 69.3706 171.058C61.7107 168.094 56.4428 164.883 53.7246 161.179C51.1515 157.672 49.8713 153.694 49.8713 149.252C49.8713 141.567 52.8861 135.208 58.8929 130.165C65.1996 124.87 74.7034 122.382 87.316 122.382C96.3094 122.382 103.575 123.428 109.099 125.611C114.487 127.74 118.903 130.391 122.27 133.664C127.847 139.085 129.628 143.783 132.115 149.103C132.977 150.948 134.899 153.446 137.768 154.968C139.473 155.872 141.431 156.556 143.929 156.556H160.991C164.198 156.556 167.671 155.836 170.165 153.521C172.912 150.972 173.546 148.628 173.085 144.714C172.298 138.04 170.855 133.421 166.592 124.929C162.603 116.982 157.116 111.146 150.255 105.574C143.503 100.091 134.933 95.5014 124.524 91.8461C114.211 88.2242 101.81 86.3877 87.316 86.3877C69.394 86.3877 54.4929 89.5184 42.5914 95.6763C30.536 101.914 21.4111 109.949 15.1709 119.731C8.86384 129.616 5.73529 139.868 5.73529 150.47C5.73529 160.768 7.90202 169.987 12.1944 178.139C16.506 186.327 23.652 193.407 33.7121 199.296C43.4106 204.974 56.5625 209.78 73.1881 213.657C73.2046 213.661 73.2211 213.665 73.2373 213.668C89.3287 217.153 102.003 220.498 111.255 223.715C119.939 226.734 126.037 230.029 129.436 233.803C132.607 237.324 134.104 242.05 134.104 247.919C134.104 257.002 130.151 263.87 122.26 268.531C113.75 273.557 102.905 276.007 89.7536 276.007C80.7303 276.007 73.184 274.882 67.1257 272.563C61.0854 270.25 56.0683 267.366 51.6248 264.187C47.1918 261.015 38.6579 252.084 38.6434 252.068C34.6509 247.774 29.8902 247.584 25.2342 247.584C17.3365 247.584 14.8609 247.59 14.1156 247.595ZM0.0606746 260.383L0.0598684 260.372C0.0598684 260.376 0.0602715 260.379 0.0606746 260.383ZM13.6367 247.622C12.7236 247.768 13.6315 247.684 13.7975 247.601C13.706 247.609 13.6544 247.619 13.6367 247.622Z"
        fill={colors[color]}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M337.356 169.636L279.811 177.753C279.724 177.758 279.637 177.766 279.55 177.779C254.585 181.383 234.353 188.918 218.819 200.286C202.783 212.02 194.77 227.764 194.77 247.513C194.77 259.854 198.364 270.901 205.543 280.66C212.61 290.267 221.93 297.908 233.522 303.559C245.044 309.177 257.829 312.001 271.882 312.001C285.296 312.001 296.61 310.367 305.832 307.155C315.146 303.911 322.898 299.803 329.107 294.866C332.571 292.112 335.633 289.545 338.167 287.084L338.169 295.426C338.169 299.01 339.297 301.949 341.449 304.279C343.634 306.645 346.685 307.941 350.69 307.941H369.377C373 307.941 375.973 306.725 378.327 304.371C380.682 302.018 381.899 299.046 381.899 295.425V163.869C381.899 154.34 380.428 144.951 377.483 135.702C374.502 126.334 369.675 117.959 363.001 110.579C356.332 103.203 347.201 97.2835 335.565 92.8868C324.156 88.5756 310.108 86.3877 293.412 86.3877C278.335 86.3877 265.566 88.4426 255.096 92.4892C244.55 96.5647 235.915 101.573 229.166 107.476C222.33 113.454 217.296 119.592 214.021 125.855C210.607 132.382 208.988 137.899 208.988 142.349C208.988 145.583 209.997 148.36 211.974 150.695C214.016 153.107 217.019 154.459 221.103 154.459H239.383C244.826 154.459 248.688 151.812 250.865 146.372C250.868 146.366 250.87 146.36 250.872 146.354C253.615 139.374 258.437 133.659 265.295 129.172C272.297 124.591 281.548 122.382 293.006 122.382C308.738 122.382 320.158 125.587 327.136 132.435C334.02 139.191 337.356 148.612 337.356 160.621V169.636ZM337.356 203.683V211.376C337.356 225.935 334.874 238.036 329.801 247.656C324.845 257.055 318.066 263.996 309.425 268.441C300.658 272.952 290.985 275.195 280.412 275.195C273.463 275.195 266.707 274.037 260.143 271.721C253.773 269.474 248.518 266.056 244.396 261.437C240.432 256.994 238.5 251.394 238.5 244.671C238.5 235.968 242.977 228.852 251.683 223.172C261.136 217.004 275.208 212.681 293.851 210.056L337.356 203.683Z"
        fill={colors[color]}
      />
      <path
        d="M445.215 265.805C458.788 265.805 469.791 254.807 469.791 241.24C469.791 227.674 458.788 216.676 445.215 216.676C431.642 216.676 420.639 227.674 420.639 241.24C420.639 254.807 431.642 265.805 445.215 265.805Z"
        fill={colors[color]}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M554.296 24.5644C554.296 11.007 543.284 0 529.72 0C516.156 0 505.144 11.007 505.144 24.5644C505.144 38.1219 516.156 49.1289 529.72 49.1289C543.284 49.1289 554.296 38.1219 554.296 24.5644Z"
        fill={colors[color]}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M641 24.5644C641 11.007 629.988 0 616.424 0C602.86 0 591.848 11.007 591.848 24.5644C591.848 38.1219 602.86 49.1289 616.424 49.1289C629.988 49.1289 641 38.1219 641 24.5644Z"
        fill={colors[color]}
      />
      <path
        d="M445.215 179.132C458.788 179.132 469.791 168.135 469.791 154.568C469.791 141.001 458.788 130.004 445.215 130.004C431.642 130.004 420.639 141.001 420.639 154.568C420.639 168.135 431.642 179.132 445.215 179.132Z"
        fill={colors[color]}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M507.055 296.479C507.055 302.29 504.745 307.864 500.633 311.973C496.522 316.083 490.946 318.391 485.132 318.391C478.601 318.391 472.07 318.391 467.344 318.391C461.849 318.391 457.394 322.844 457.394 328.337V352.949C457.394 358.442 461.849 362.895 467.344 362.895H492.201C524.995 362.895 551.58 336.323 551.58 303.544C551.58 235.1 551.58 125.319 551.58 96.618C551.58 91.125 547.125 86.6723 541.629 86.6723H517.005C511.509 86.6723 507.055 91.125 507.055 96.618V296.479Z"
        fill={colors[color]}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M594.565 302.345C594.565 327.345 584.629 351.321 566.943 368.999C549.257 386.676 525.27 396.607 500.258 396.607C486.425 396.607 474.484 396.607 467.344 396.607C461.849 396.607 457.394 401.06 457.394 406.553V431.054C457.394 436.547 461.849 441 467.344 441C475.397 441 489.674 441 506.631 441C579.724 441 638.979 381.774 638.979 308.714C638.979 223.832 638.979 123.705 638.979 96.618C638.979 91.125 634.524 86.6723 629.028 86.6723H604.515C599.02 86.6723 594.565 91.125 594.565 96.618C594.565 123.84 594.565 224.463 594.565 302.345Z"
        fill={colors[color]}
      />
    </svg>
  )
}
