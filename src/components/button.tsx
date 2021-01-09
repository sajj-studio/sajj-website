import { Link } from './link'
import styled, { css, DefaultTheme } from 'styled-components'

interface ButtonProps {
  fill?: keyof DefaultTheme['colors']
  color?: keyof DefaultTheme['colors']
  state?: 'progress' | 'success' | 'error'
}

export const Button = styled(Link)<ButtonProps>`
  ${({ theme, fill = 'orange', color = 'blue', state }) => css`
    text-align: center;
    padding: 1rem 4rem;
    border-radius: 25px;
    font-family: ${theme.typography.sansSerif};
    font-weight: 500;
    font-size: 1.125rem;
    text-transform: uppercase;
    display: inline-block;
    box-shadow: 4px 5px 0px ${theme.colors[color]};
    border: 2px solid ${theme.colors[color]};
    color: ${theme.colors[color]};
    background-color: ${theme.colors[fill]};
    outline: none;
    position: relative;

    :hover {
      top: -2px;
      left: -3px;
      box-shadow: 6px 8px 0px ${theme.colors[color]};
    }
    :active {
      box-shadow: none;
      top: 6px;
      left: 7px;
    }

    @keyframes gradient {
      0% {
        background-position: 0% 0;
      }
      100% {
        background-position: 55% 0;
      }
    }

    ${(() => {
      switch (state) {
        case 'progress':
          return css`
            background: repeating-linear-gradient(
              135deg,
              ${theme.colors[fill]},
              ${theme.colors[fill]} 5px,
              ${theme.colors[color]} 5px,
              ${theme.colors[color]} 12px
            );
            color: transparent;

            animation-name: gradient;
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            background-size: 51px 100%;
          `

        case 'success':
          return css`
            background-color: ${theme.colors[color]};
            border: 2px solid ${theme.colors[color]};
            box-shadow: none;
            color: ${theme.colors[fill]};
          `

        case 'error':
          return css``
      }
    })()}
  `}
`
