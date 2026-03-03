import 'styled-components'

declare module 'styled-components' {
  type BreakpointTypes = 'desktop' | 'mobile'
  interface Breakpoint {
    min?: string
    max?: string
  }

  export interface DefaultTheme {
    typography: {
      sansSerif: string
    }
    colors: {
      white: string
      black: string
      blue: string
      red: string
      orange: string
      darkBlue: string
      gray: string
      lightYellow: string
    }
    transitions: {
      default: string
      long: string
    }
    breakpoints: Record<BreakpointTypes, Breakpoint>
    media: Record<BreakpointTypes, string>
  }
}
