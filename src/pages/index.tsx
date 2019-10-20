import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

import { Theme } from '../design-tokens/theme'

import Layout from '../components/Layout'

import priscilaOliveiraAvatar from './img/priscila-oliveira-avatar.jpg'

const StyledAvatar = styled(Avatar)`
  width: 200px;
  height: 200px;
  margin-right: ${({ theme }: { theme: Theme }) => `${theme.spacing(1) / 4}em`};
`

const StyledTypography = styled(Typography)``

export default () => (
  <Layout>
    {/* <StyledAvatar alt="Priscila Oliveira" sizes="200px" src={priscilaOliveiraAvatar} />
    <StyledTypography variant="h6">
      Hi! I'm a brazilian Front-end Enginner based in Vienna - Austria. I enjoy xxxx.....
    </StyledTypography> */}
    Hi! I'm a brazilian Front-end Enginner based in Vienna - Austria. I enjoy xxxx.....
  </Layout>
)
