import { DefaultTheme } from 'styled-components'

const breakpoints: DefaultTheme['breakpoints'] = {
  mobile: { max: '767px' },
  desktop: { min: '768px' },
}
const media: DefaultTheme['media'] = {
  mobile: `@media screen and (max-width: ${breakpoints.mobile.max})`,
  desktop: `@media screen and (min-width: ${breakpoints.desktop.min})`,
}

export const theme: DefaultTheme = {
  typography: {
    sansSerif: 'Rubik, sans-serif',
  },
  colors: {
    white: '#fff',
    black: '#000',
    blue: '#641aff',
    orange: '#ffc431',
    red: '#f25767',
  },
  transitions: {
    default: '0.2s',
    long: '0.4s',
  },
  breakpoints,
  media,
}

export const hexToRGBA = (hexCode: string, opacity: number): string => {
  let hex = hexCode.replace('#', '')

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
  }

  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`
}
