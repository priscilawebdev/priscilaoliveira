import React from 'react'

import StyleBaseline from '../design-tokens/StyleBaseline'
import StylesProvider from '../design-tokens/StylesProvider'

import Layout from '../components/Layout'

export default () => (
  <StylesProvider>
    <StyleBaseline>
      <Layout>
        <h1>Hi Priscila</h1>
      </Layout>
    </StyleBaseline>
  </StylesProvider>
)
