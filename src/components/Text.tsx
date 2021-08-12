import React from 'react'
import { default as MUITypography, TypographyProps } from '@material-ui/core/Typography'
import styled from 'styled-components'

import { Theme } from '../design-tokens/theme'
import { filterProps } from '../design-tokens/utils'

const variants = {
  normal: {
    fontSize: '1rem',
  },
  medium: {
    fontSize: '1.125rem',
  },
  big: {
    fontSize: '1.5rem',
  },
}

type Variant = keyof typeof variants
type Color = 'primary' | 'text'

export interface TextProps extends Omit<TypographyProps, 'variant' | 'color'> {
  color?: Color
  hoverColor?: Color
  variant?: Variant
}

// THIS IS A FIX
const StyledMUITypography = styled((props: TextProps) => (
  <MUITypography {...filterProps(props, 'variant', 'color', 'hoverColor')} />
))(({ variant, color, hoverColor, theme }: { variant?: Variant; color?: Color; hoverColor?: Color; theme: Theme }) => ({
  ...variants[variant!],
  color: color === 'primary' ? theme.palette.primary.main : theme.palette.text.primary,
  ':hover': {
    color: hoverColor === 'primary' ? theme.palette.primary.main : theme.palette.text.primary,
  },
}))

const Text = React.forwardRef<any, TextProps>(function Text(
  { children, color = 'text', hoverColor = 'text', variant = 'normal', ...props },
  ref,
) {
  return (
    <StyledMUITypography ref={ref} variant={variant} color={color} hoverColor={hoverColor} {...props}>
      {children}
    </StyledMUITypography>
  )
})

export default Text
