import React, { FC, useMemo } from 'react'
import styled, { css } from 'styled-components'

interface FunkyBorderTopProps {
  top: boolean
}
interface FunkyBorderBottomProps {
  bottom: boolean
}

interface FunkyBorderHeight {
  height?: 'half' | 'quarter' | undefined
}

export const FunkyBorder: FC<
  (FunkyBorderTopProps | FunkyBorderBottomProps) & FunkyBorderHeight
> = props => {
  const isTop = useMemo(() => 'top' in props && props.top, [props])

  return (
    <Styles
      position={isTop ? 'top' : 'bottom'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      height={props.height}
    >
      <path
        d={
          isTop
            ? 'M0,5 C60,-10 65,100 100,40 L100,0 L0,0 Z'
            : 'M0,50 C40,190 66,-25 100,50 L100,100 L0,100 Z'
        }
        stroke-width="0"
        fill="#fff"
      />
    </Styles>
  )
}

interface StylesProps {
  position: 'top' | 'bottom'
  height: 'half' | 'quarter' | undefined
}
export const Styles = styled.svg<StylesProps>`
  ${({ height, position }) =>
    css`
      position: absolute;
      height: 100px;
      width: 100%;
      z-index: 2;

      ${() =>
        position === 'top'
          ? css`
              top: 0;
            `
          : css`
              bottom: 0;
            `}

      ${() => {
        switch (height) {
          case 'half':
            return css`
              height: 50px;
            `
          case 'quarter':
            return css`
              height: 25px;
            `
        }
      }}
    `}
`

export const funkyBorderStyle = (
  position: 'top' | 'bottom',
  height?: 'half' | 'quarter'
): ReturnType<typeof css> =>
  css`
    ${position === 'top'
      ? css`
          position: relative;
          padding-top: calc((6.25rem / 2) + 1.875rem);
        `
      : css`
          position: relative;
          padding-bottom: calc((6.25rem / 2) + 1.875rem);
        `}

    ${height === 'half' &&
    css`
      padding-bottom: calc(((6.25rem / 2) + 1.875rem) / 2);
    `}

    ${height === 'quarter' &&
    css`
      padding-bottom: calc(((6.25rem / 2) + 1.875rem) / 4);
    `}
  `
