import React from 'react'
import { Helmet } from 'react-helmet'

import favicon from '../../assets/favicons/favicon.ico'
import appleTouchIcon from '../../assets/favicons/apple-touch-icon.png'
import favicon16x16 from '../../assets/favicons/favicon-16x16.png'
import favicon32x32 from '../../assets/favicons/favicon-32x32.png'
import manifest from '../../assets/favicons/site.webmanifest.json'

const Favicon: React.FC = () => (
  <Helmet>
    <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
    <link rel="manifest" href={`${manifest}`} />
    <link rel="icon" type="image/x-icon" href={favicon} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
    <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
    <title>Priscila Oliveira - Front-end Engineer</title>
  </Helmet>
)

export default Favicon
