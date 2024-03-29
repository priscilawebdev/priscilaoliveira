import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { default as MaterialUITypography, TypographyProps } from '@material-ui/core/Typography'

import { filterProps } from '../design-tokens/utils'

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type HeadingRef = HeadingType

const sizeVariants = {
  small: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
  default: {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
  },
  large: {
    fontSize: '2.188em',
    lineHeight: '3rem',
  },
  'x-large': {
    fontSize: '3rem',
    lineHeight: '4rem',
  },
}
type SizeType = keyof typeof sizeVariants

const fontWeightVariants = {
  bold: 600,
  normal: 400,
}

type FontWeightType = keyof typeof fontWeightVariants

interface Props extends Omit<TypographyProps, 'variant'> {
  variant?: HeadingType
  fontWeight?: FontWeightType
  size?: SizeType
}

// THIS IS A FIX
const StyledMaterialUITypography = styled((props: Props) => (
  <MaterialUITypography {...filterProps(props, 'fontWeight')} />
))(({ fontWeight, size }: { fontWeight: FontWeightType; size: SizeType }) => ({
  fontWeight: fontWeightVariants[fontWeight],
  ...sizeVariants[size],
}))

const Heading = forwardRef<HeadingRef, Props>(function Heading(
  { variant = 'h6', fontWeight = 'normal', size = 'default', ...props },
  ref,
) {
  return <StyledMaterialUITypography {...props} variant={variant} fontWeight={fontWeight} size={size} ref={ref} />
})

export default Heading
