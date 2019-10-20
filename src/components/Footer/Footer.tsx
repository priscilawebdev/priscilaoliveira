import React from 'react'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import styled from 'styled-components'

import { Theme } from '../../design-tokens/theme'

import Link from '../../components/Link'
import Text from '../../components/Text'

import FooterSocialNetwork from './FooterSocialNetwork'

const StyledContainer = styled(Box)({
  position: 'relative',
  padding: '25px 40px',
  '> *': {
    marginBottom: 15,
  },
  '> *:last-child': {
    marginBottom: 0,
  },
})

// @ts-ignore FIXME - position: string;  is not assignable to type
const StyledDivider = styled(Divider)(({ theme }: { theme: Theme }) => ({
  width: '100%',
  left: 0,
  top: 0,
  position: 'absolute',
}))

const Footer: React.FC = () => (
  <StyledContainer
    component="footer"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    width="100%">
    <StyledDivider />
    <Text color="primary" variant="medium">
      Let's Connect
    </Text>
    <Text>Feel free to reach out for collaborations or just a friendly hello 😉</Text>
    <FooterSocialNetwork />
    <Link to="mailto:priscilawebdev@gmail.com" external>
      priscilawebdev@gmail.com
    </Link>
  </StyledContainer>
)

export default Footer
