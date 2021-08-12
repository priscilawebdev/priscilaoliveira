import React from 'react'
import Box from '@material-ui/core/Box'
import styled from 'styled-components'

import { Theme } from '../design-tokens/theme'

import Link from './Link'

enum Route {
  HOME = '/',
  BLOG = '/blog',
}

// @ts-ignore FIXME - flexDirection: string;  is not assignable to type
const StyledContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  height: 80,
  marginTop: 30,
  paddingRight: 40,
  paddingLeft: 40,
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    marginTop: 0,
  },
}))

const StyledNav = styled(Box)({
  '> *': {
    paddingRight: '1.56rem',
  },
  '> *:last-child': {
    paddingRight: 0,
  },
})

// THIS IS A FIX
const Header: React.FC = () => (
  <StyledContainer component="header" display="flex" flexDirection="column" alignItems="center" width="100%">
    <Box display="flex" flexGrow={1}>
      <Link to={Route.HOME} variant="big" color="primary" hoverColor="primary">
        Priscila Oliveira
      </Link>
    </Box>
    <StyledNav component="nav" display="flex" alignItems="center">
      <Link to={Route.HOME} variant="medium" hoverColor="primary">
        Home
      </Link>
    </StyledNav>
  </StyledContainer>
)

export default Header
