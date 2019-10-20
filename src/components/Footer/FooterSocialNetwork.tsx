import React from 'react'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import styled from 'styled-components'
import Instagram from '@material-ui/icons/Instagram'
import Twitter from '@material-ui/icons/Twitter'
import LinkedIn from '@material-ui/icons/LinkedIn'
import GitHub from '@material-ui/icons/GitHub'

import Link from '../../components/Link'

const FooterSocialNetwork: React.FC = () => (
  <Box display="flex" justifyContent="space-between" width="100%" maxWidth="250px">
    <Link to="https://twitter.com/priscilawebdev" external>
      <Twitter />
    </Link>
    <Link to="https://github.com/priscilawebdev" external>
      <GitHub />
    </Link>
    <Link to="https://www.instagram.com/oliveira.priii/" external>
      <Instagram />
    </Link>
    <Link to="https://www.linkedin.com/in/priscilawebdev/" external>
      <LinkedIn />
    </Link>
  </Box>
)

export default FooterSocialNetwork
