import React from 'react'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { default as MaterialUIStylesProvider } from '@material-ui/styles/StylesProvider'

import theme from './theme'

const StylesProvider: React.FC = ({ children }) => (
  <MaterialUIStylesProvider injectFirst>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </MaterialUIStylesProvider>
)

export default StylesProvider
