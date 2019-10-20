import { createMuiTheme } from '@material-ui/core/styles'

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    lightGray: string
  }
  interface PaletteOptions {
    lightGray?: string
  }
}

const colors = {
  primary: '#ff4a5a',
  secondary: '#624de3',
  text: '#0a0a14',
  lightGray: '#f5f6f8',
}

type Colors = keyof typeof colors

const theme = createMuiTheme({
  palette: {
    ...colors,
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
    text: { primary: colors.text },
  },
})

type Theme = typeof theme

export default theme
export { Colors, Theme }
