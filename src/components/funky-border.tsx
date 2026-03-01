import { FC } from 'react'
import styled, { css } from 'styled-components'

interface FunkyBorderTopProps {
  top: boolean
}
interface FunkyBorderBottomProps {
  bottom: boolean
}

export const FunkyBorder: FC<
  FunkyBorderTopProps | FunkyBorderBottomProps
> = props => {
  const isTop = 'top' in props && props.top

  return (
    <Styles
      position={isTop ? 'top' : 'bottom'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path
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
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Styles = styled(({ position, ...props }) => (
  <svg {...props} />
))<StylesProps>`
  position: absolute;
  height: 100px;
  width: 100%;
  z-index: 2;

  ${({ position }) =>
    position === 'top'
      ? css`
          top: 0;
        `
      : css`
          bottom: 0;
        `}
`

export const funkyBorderStyle = (
  position: 'top' | 'bottom',
): ReturnType<typeof css> =>
  position === 'top'
    ? css`
        position: relative;
        padding-top: calc((6.25rem / 2) + 1.875rem);
      `
    : css`
        position: relative;
        padding-bottom: calc((6.25rem / 2) + 1.875rem);
      `
