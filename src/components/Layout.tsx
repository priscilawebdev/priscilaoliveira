import React from 'react'
import styled from 'styled-components'

import { Theme } from '../design-tokens/theme'

const Container = styled('div')`
  background-color: ${({ theme }: { theme: Theme }) => theme.palette.lightGray};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Layout: React.FC = ({ children }) => <Container>{children}</Container>

export default Layout
