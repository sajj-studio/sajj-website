import styled, { css, DefaultTheme } from 'styled-components'

interface TypographyProps {
  color: keyof DefaultTheme['colors']
  variant: 'title' | 'subtitle' | 'body' | 'inline'
}

export const Typography = styled.p<TypographyProps>`
  ${({ theme, color, variant }) => css`
    color: ${theme.colors[color]};
    font-family: ${theme.typography.sansSerif};

    & + & {
      margin-top: 1rem;
    }

    ${(() => {
      switch (variant) {
        case 'title':
          return css`
            font-weight: 700;
            font-size: 2.5rem;
            line-height: 2.5rem;
          `

        case 'subtitle':
          return css`
            font-weight: 500;
            font-size: 1.875rem;
            line-height: 1.875rem;
          `

        case 'body':
          return css`
            font-size: 1rem;
            line-height: 1.25rem;
          `
      }
    })()}
  `}
`
