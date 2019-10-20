import React from 'react'
import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import * as Sentry from '@sentry/browser'

import StyleBaseline from '../design-tokens/StyleBaseline'
import StylesProvider from '../design-tokens/StylesProvider'
import { Theme } from '../design-tokens/theme'

import Header from './Header'

Sentry.init({ dsn: 'https://7d6236da009e4951a98980581bc55e78@sentry.io/1783802' })

const Container = styled('div')`
  background-color: ${({ theme }: { theme: Theme }) => theme.palette.lightGray};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Content = styled(Box)`
  margin: 40px auto 0;
  maxwidth: 100%;
  ${({ theme }: { theme: Theme }) => {
    return {
      [theme.breakpoints.up('sm')]: {
        maxWidth: 700,
      },
    }
  }};
`

const Layout: React.FC = ({ children }) => (
  <StylesProvider>
    <StyleBaseline>
      <Container>
        <Header />
        <Content>{children}</Content>
      </Container>
    </StyleBaseline>
  </StylesProvider>
)

export default Layout
