import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'

import ResetCSS from './ResetStyles'

// THIS IS A FIX
const StyleBaseline: React.FC = ({ children }) => (
  <>
    <CssBaseline />
    <ResetCSS />
    {children}
  </>
)

export default StyleBaseline
