import { Link } from 'gatsby'
import styled, { css, DefaultTheme } from 'styled-components'

interface ButtonProps {
  fill?: keyof DefaultTheme['colors']
  color?: keyof DefaultTheme['colors']
}

export const Button = styled(Link)<ButtonProps>`
  ${({ theme, fill = 'orange', color = 'blue' }) => css`
    text-align: center;
    padding: 1rem 4rem;
    border-radius: 25px;
    font-family: ${theme.typography.sansSerif};
    font-weight: 500;
    font-size: 1.125rem;
    text-transform: uppercase;
    display: inline-block;
    filter: drop-shadow(4px 5px 0px ${theme.colors[color]});
    border: 2px solid ${theme.colors[color]};
    color: ${theme.colors[color]};
    background-color: ${theme.colors[fill]};
  `}
`
