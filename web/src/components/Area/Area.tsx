import { ComponentPropsWithoutRef } from 'react'

import { css } from '@emotion/react'
import { Box, BoxProps } from '@mantine/core'

const Area = ({
  _,
  children,
  ...props
}: { _?: string } & ComponentPropsWithoutRef<'div'> & BoxProps) => {
  return (
    <Box
      css={css`
        grid-area: ${_};
      `}
      {...props}
    >
      {children}
    </Box>
  )
}

export default Area
