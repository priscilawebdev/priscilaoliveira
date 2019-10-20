import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import styled from 'styled-components'

import { Theme } from '../design-tokens/theme'

import Layout from '../components/Layout'
import Heading from '../components/Heading'

import priscilaOliveiraAvatar from '../assets/priscila-oliveira-avatar.jpg'

// @ts-ignore FIXME:Type 'string' is not assignable to type '"left" | "right" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "center" | "end" | "start" | "justify" | "match-parent" | undefined'.
const StyledBoxContainer = styled(Box)(() => ({
  maxWidth: 450,
}))

const StyledAvatar = styled(Avatar)(() => ({
  width: 200,
  height: 200,
  marginBottom: 15,
}))

const StyledHeadingRole = styled(Heading)(() => ({
  marginBottom: 20,
}))

export default () => (
  <Layout>
    <StyledBoxContainer display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <StyledAvatar alt="Priscila Oliveira" src={priscilaOliveiraAvatar} />
      <StyledHeadingRole variant="h6" align="center" fontWeight="bold">
        Front-end Enginner
      </StyledHeadingRole>
      <Heading variant="h6" align="center">
        Oi! 👋 My name is Priscila and I'm brazilian developer based in the inspiring Vienna - Austria. I’m passionate
        about building great user experiences, trying to understand people’s needs and translating this into the
        digitalsphere.
      </Heading>
    </StyledBoxContainer>
  </Layout>
)
