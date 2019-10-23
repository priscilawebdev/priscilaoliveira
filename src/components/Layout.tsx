import React from 'react'
import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import * as Sentry from '@sentry/browser'

import StyleBaseline from '../design-tokens/StyleBaseline'
import StylesProvider from '../design-tokens/StylesProvider'
import { Theme } from '../design-tokens/theme'

import Footer from './Footer'

Sentry.init({ dsn: 'https://7d6236da009e4951a98980581bc55e78@sentry.io/1783802' })

// @ts-ignore FIXME - position: string;  is not assignable to type
const StyledBoxContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  minHeight: '100vh',
})

const StyledBoxContent = styled(Box)(({ theme }: { theme: Theme }) => ({
  marginRight: 20,
  marginLeft: 20,
  paddingTop: 40,
  paddingBottom: 40,
  [theme.breakpoints.up('sm')]: {
    maxWidth: 840,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
}))

const Layout: React.FC = ({ children }) => (
  <StylesProvider>
    <StyleBaseline>
      <StyledBoxContainer display="flex" flexDirection="column">
        <StyledBoxContent component="main" flexGrow={1}>
          {children}
        </StyledBoxContent>
        <Footer />
      </StyledBoxContainer>
    </StyleBaseline>
  </StylesProvider>
)

export default Layout
