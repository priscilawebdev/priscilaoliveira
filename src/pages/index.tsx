import React from 'react'
import * as Sentry from '@sentry/browser'

import StyleBaseline from '../design-tokens/StyleBaseline'
import StylesProvider from '../design-tokens/StylesProvider'

import Layout from '../components/Layout'

Sentry.init({ dsn: 'https://7d6236da009e4951a98980581bc55e78@sentry.io/1783802' })

export default () => (
  <StylesProvider>
    <StyleBaseline>
      <Layout>
        <h1>Hi Priscila</h1>
        <button onClick={methodDoesNotExist}>Break the world</button>
      </Layout>
    </StyleBaseline>
  </StylesProvider>
)
