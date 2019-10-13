import { makeStyles } from '@material-ui/styles'
import React from 'react'

import RobotoBoldWoff from './fonts/Roboto-Bold.woff'
import RobotoBoldWoff2 from './fonts/Roboto-Bold.woff2'
import RobotoRegularWoff from './fonts/Roboto-Regular.woff'
import RobotoRegularWoff2 from './fonts/Roboto-Regular.woff2'

// reset styles based on https://gist.github.com/DavidWells/18e73022e723037a50d6
const resetStyles = makeStyles(() => ({
  '@global': {
    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },
    'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video': {
      margin: '0',
      padding: '0',
      border: '0',
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline',
    },
    'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section': {
      display: 'block',
    },
    'html, body': {
      height: '100%;',
    },
    html: {
      boxSizing: 'border-box',
      fontFamily: "'Roboto', Times",
    },
    body: {
      lineHeight: 1,
    },
    'ol, ul': {
      listStyle: 'none',
    },
    'blockquote, q': {
      quotes: 'none',
      '&:before, &:after': {
        content: 'none',
      },
    },
    table: {
      borderCollapse: 'collapse',
      borderSpacing: 0,
    },
    a: {
      textDecoration: 'none',
    },
    '#___gatsby, #gatsby-focus-wrapper': {
      height: '100%',
    },
    '@font-face': [
      {
        fontFamily: 'Roboto',
        src: `local('Roboto Bold'), local('Roboto-Bold'),
            url('${RobotoBoldWoff2}') format('woff2'),
            url('${RobotoBoldWoff}') format('woff')`,
        fontWeight: 'bold',
        fontStyle: 'normal',
      },
      {
        fontFamily: 'Roboto',
        src: `local('Roboto'), local('Roboto-Regular'),
          url('${RobotoRegularWoff2}') format('woff2'),
          url('${RobotoRegularWoff}') format('woff')`,
        fontWeight: 'normal',
        fontStyle: 'normal',
      },
    ],
  },
}))

const ResetStyles: React.FC = ({ children }) => {
  resetStyles()
  return <>{children}</>
}

export default ResetStyles
