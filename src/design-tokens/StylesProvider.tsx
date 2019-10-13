import React from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { default as MaterialUIThemeProvider } from '@material-ui/styles/ThemeProvider'

import theme from './theme'

const StylesProvider: React.FC = ({ children }) => (
  <StyledComponentsThemeProvider theme={theme}>
    <MaterialUIThemeProvider theme={theme}>{children}</MaterialUIThemeProvider>
  </StyledComponentsThemeProvider>
)

export default StylesProvider
