import React from 'react'
import * as Sentry from '@sentry/browser'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

import StyleBaseline from '../design-tokens/StyleBaseline'
import StylesProvider from '../design-tokens/StylesProvider'
import { Theme } from '../design-tokens/theme'

import Layout from '../components/Layout'

import priscilaOliveiraAvatar from './img/priscila-oliveira-avatar.jpg'

const Main = styled(Box)`
  margin: 40px auto 0;
  width: 700px;
`

const StyledAvatar = styled(Avatar)`
  width: 200px;
  height: 200px;
  margin-right: ${({ theme }: { theme: Theme }) => `${theme.spacing(1) / 4}em`};
`

const StyledTypography = styled(Typography)``

Sentry.init({ dsn: 'https://7d6236da009e4951a98980581bc55e78@sentry.io/1783802' })

export default () => (
  <StylesProvider>
    <StyleBaseline>
      <Layout>
        <Main display="flex" alignItems="center">
          <StyledAvatar alt="Priscila Oliveira" sizes="200px" src={priscilaOliveiraAvatar} />
          <StyledTypography variant="h6">
            Hi! I'm Priscila Oliveira, a brazilian Front-end Enginner based in Vienna - Austria. I enjoy xxxx.....
          </StyledTypography>
        </Main>
      </Layout>
    </StyleBaseline>
  </StylesProvider>
)
