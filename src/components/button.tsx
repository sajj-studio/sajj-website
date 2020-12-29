import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

export const Button = styled(Link)`
  ${({ theme }) => css`
    text-align: center;
    padding: 1rem 4rem;
    border-radius: 25px;
    font-family: ${theme.typography.sansSerif};
    font-weight: 500;
    font-size: 1.125rem;
    text-transform: uppercase;
    display: inline-block;
    color: ${theme.colors.white};
    background-color: ${theme.colors.red};
  `}
`
