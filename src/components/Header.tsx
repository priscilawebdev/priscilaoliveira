import React from 'react'
import { Link } from 'gatsby'
import Box from '@material-ui/core/Box'
import styled from 'styled-components'

import { Theme } from '../design-tokens/theme'

enum Route {
  HOME = '/',
  ABOUT = '/about',
  WRITING = '/writing',
  CONTACT = '/contact',
}

const StyledContainer = styled(Box)`
  height: 80px;
  margin-top: 30px;
  padding: 0 40px;
  ${({ theme }: { theme: Theme }) => {
    return {
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        marginTop: 0,
      },
    }
  }}
`

const StyledLink = styled(Link)`
  font-size: 18px;
  padding-right: 1.56rem;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.primary};
  :hover {
    color: ${({ theme }: { theme: Theme }) => theme.palette.primary.main};
  }
  :last-child {
    padding-right: 0;
  }
`

const StyledLinkPriscilaOliveira = styled(StyledLink)`
  flex-grow: 1;
  font-size: 24px;
  color: ${({ theme }: { theme: Theme }) => theme.palette.primary.main};
`

const Header: React.FC = () => (
  <StyledContainer display="flex" flexDirection="column" alignItems="center" width="100%">
    <StyledLinkPriscilaOliveira to={Route.HOME}>Priscila Oliveira</StyledLinkPriscilaOliveira>
    <Box component="nav" display="flex" alignItems="center">
      <StyledLink to={Route.HOME}>Home</StyledLink>
      <StyledLink to={Route.ABOUT}>About</StyledLink>
      <StyledLink to={Route.WRITING}>Writing</StyledLink>
      <StyledLink to={Route.CONTACT}>Contact</StyledLink>
    </Box>
  </StyledContainer>
)

export default Header
