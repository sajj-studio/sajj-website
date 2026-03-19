import { FC } from 'react'
import styled, { css, keyframes } from 'styled-components'

interface FunkyBorderTopProps {
  top: boolean
}
interface FunkyBorderBottomProps {
  bottom: boolean
}

interface FunkyBorderHeight {
  height?: 'half' | 'quarter'
  animated?: boolean
}

export const FunkyBorder: FC<
  (FunkyBorderTopProps | FunkyBorderBottomProps) & FunkyBorderHeight
> = props => {
  const isTop = 'top' in props && props.top

  return (
    <Styles
      position={isTop ? 'top' : 'bottom'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      borderHeight={props.height}
    >
      <StyledPath
        $animated={props.animated ?? false}
        $position={isTop ? 'top' : 'bottom'}
        d={
          isTop
            ? 'M0,5 C60,-10 65,100 100,40 L100,0 L0,0 Z'
            : 'M0,50 C40,190 66,-25 100,50 L100,100 L0,100 Z'
        }
        strokeWidth="0"
        fill="#fff"
      />
    </Styles>
  )
}

interface StylesProps {
  position: 'top' | 'bottom'
  borderHeight?: 'half' | 'quarter'
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Styles = styled(({ position, borderHeight, ...props }) => (
  <svg {...props} />
))<StylesProps>`
  position: absolute;
  height: 100px;
  width: 100%;
  z-index: 2;

  ${({ position }) =>
    position === 'top'
      ? css`
          top: -1px;
          height: calc(100px + 1px);
        `
      : css`
          bottom: -1px;
          height: calc(100px + 1px);
        `}

  ${({ borderHeight }) => {
    switch (borderHeight) {
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
`

// Control points follow an elliptical orbit (x=cos θ, y=sin θ) across 12 steps.
// This ensures the wave cycles continuously without ever reversing direction.
const waveTop = keyframes`
  0%    { d: path('M0,9 C80,-10 45,100 100,36 L100,0 L0,0 Z'); }
  8.3%  { d: path('M0,8 C77,-6  48,96  100,37 L100,0 L0,0 Z'); }
  16.7% { d: path('M0,7 C70,-3  55,93  100,38 L100,0 L0,0 Z'); }
  25%   { d: path('M0,5 C60,-2  65,92  100,40 L100,0 L0,0 Z'); }
  33.3% { d: path('M0,3 C50,-3  75,93  100,42 L100,0 L0,0 Z'); }
  41.7% { d: path('M0,2 C43,-6  82,96  100,43 L100,0 L0,0 Z'); }
  50%   { d: path('M0,1 C40,-10 85,100 100,44 L100,0 L0,0 Z'); }
  58.3% { d: path('M0,2 C43,-14 82,104 100,43 L100,0 L0,0 Z'); }
  66.7% { d: path('M0,3 C50,-17 75,107 100,42 L100,0 L0,0 Z'); }
  75%   { d: path('M0,5 C60,-18 65,108 100,40 L100,0 L0,0 Z'); }
  83.3% { d: path('M0,7 C70,-17 55,107 100,38 L100,0 L0,0 Z'); }
  91.7% { d: path('M0,8 C77,-14 48,104 100,37 L100,0 L0,0 Z'); }
  100%  { d: path('M0,9 C80,-10 45,100 100,36 L100,0 L0,0 Z'); }
`

const waveBottom = keyframes`
  0%    { d: path('M0,54 C62,190 44,-25 100,46 L100,100 L0,100 Z'); }
  8.3%  { d: path('M0,53 C59,194 47,-29 100,47 L100,100 L0,100 Z'); }
  16.7% { d: path('M0,52 C51,197 55,-32 100,48 L100,100 L0,100 Z'); }
  25%   { d: path('M0,50 C40,198 66,-33 100,50 L100,100 L0,100 Z'); }
  33.3% { d: path('M0,48 C29,197 77,-32 100,52 L100,100 L0,100 Z'); }
  41.7% { d: path('M0,47 C21,194 85,-29 100,53 L100,100 L0,100 Z'); }
  50%   { d: path('M0,46 C18,190 88,-25 100,54 L100,100 L0,100 Z'); }
  58.3% { d: path('M0,47 C21,186 85,-21 100,53 L100,100 L0,100 Z'); }
  66.7% { d: path('M0,48 C29,183 77,-18 100,52 L100,100 L0,100 Z'); }
  75%   { d: path('M0,50 C40,182 66,-17 100,50 L100,100 L0,100 Z'); }
  83.3% { d: path('M0,52 C51,183 55,-18 100,48 L100,100 L0,100 Z'); }
  91.7% { d: path('M0,53 C59,186 47,-21 100,47 L100,100 L0,100 Z'); }
  100%  { d: path('M0,54 C62,190 44,-25 100,46 L100,100 L0,100 Z'); }
`

interface StyledPathProps {
  $animated: boolean
  $position: 'top' | 'bottom'
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledPath = styled(({ $animated, $position, ...props }) => (
  <path {...props} />
))<StyledPathProps>`
  ${({ $animated, $position }) =>
    $animated &&
    css`
      animation-name: ${$position === 'top' ? waveTop : waveBottom};
      animation-duration: 5s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    `}
`

export const funkyBorderStyle = (
  position: 'top' | 'bottom',
  height?: 'half' | 'quarter',
): ReturnType<typeof css> => css`
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
