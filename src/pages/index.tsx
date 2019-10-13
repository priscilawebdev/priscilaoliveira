import React from 'react'
import styled from 'styled-components'
import StyleBaseline from '../design-tokens/StyleBaseline'

const Layout = styled('div')`
  background-color: papayawhip;
  height: 100%;
`

export default () => (
  <StyleBaseline>
    <Layout>
      <h1>Hi Priscila</h1>
    </Layout>
  </StyleBaseline>
)
