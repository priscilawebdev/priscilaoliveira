import React from 'react'
import { Link as GatbsyLink } from 'gatsby'

import Text, { TextProps } from './Text'

interface Props extends Pick<TextProps, 'color' | 'hoverColor' | 'variant'> {
  external?: boolean
  to: string
}

// THIS IS A FIX
const Link: React.FC<Props> = ({ external, to, children, color, hoverColor, variant, ...props }) => {
  const LinkTextContent = (
    <Text color={color} variant={variant} hoverColor={hoverColor}>
      {children}
    </Text>
  )
  return external ? (
    <a href={to} target="_blank" {...props}>
      {LinkTextContent}
    </a>
  ) : (
    <GatbsyLink to={to} {...props}>
      {LinkTextContent}
    </GatbsyLink>
  )
}

export default Link
