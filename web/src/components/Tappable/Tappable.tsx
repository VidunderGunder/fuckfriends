import { ComponentPropsWithoutRef } from 'react'

import { css } from '@emotion/react'
import { ActionIcon, ActionIconProps } from '@mantine/core'

export type TappableProps = ComponentPropsWithoutRef<'button'> &
  ActionIconProps & {
    icon?: React.ReactNode
    /** `iconSize = size * iconFactor` */
    iconFactor?: number
  }

const Tappable = React.forwardRef<
  HTMLButtonElement & typeof ActionIcon,
  TappableProps
>(({ size = 60, iconFactor = 0.5, icon, children, ...props }, ref) => {
  return (
    <ActionIcon
      ref={ref}
      css={css`
        border-radius: 100%;
        font-size: ${typeof size === 'number'
          ? `${size * iconFactor}px`
          : `calc(props.size * ${iconFactor})`};
      `}
      color="purple"
      size={size}
      {...props}
    >
      {icon}
      {children}
    </ActionIcon>
  )
})

export default Tappable
