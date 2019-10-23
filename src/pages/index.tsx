import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Heading from '../components/Heading'

import priscilaOliveiraAvatar from '../assets/pri-oliveira-avatar.jpg'

const StyledAvatar = styled(Avatar)(() => ({
  width: 250,
  height: 250,
  marginBottom: 15,
}))

const StyledHeadingName = styled(Heading)({
  marginBottom: 25,
  textAlign: 'center',
})

const StyledHeadingWhoAmI = styled(Heading)({
  marginBottom: 20,
})

const StyledRole = styled('span')({
  marginRight: 5,
  marginLeft: 5,
  fontWeight: 600,
})

export default () => (
  <Layout>
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <StyledHeadingName color="primary" variant="h1" size="x-large">
        Priscila Oliveira
      </StyledHeadingName>
      <StyledAvatar alt="Priscila Oliveira" src={priscilaOliveiraAvatar} />
      <StyledHeadingWhoAmI variant="h6" align="center" size="large">
        Hi, I'm Priscila, a brazilian
        <StyledRole>Front-End Enginner</StyledRole>
        based in the inspiring Vienna - Austria.
      </StyledHeadingWhoAmI>
    </Box>
  </Layout>
)
