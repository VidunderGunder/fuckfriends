import { ComponentPropsWithoutRef } from 'react'

import { ActionIcon, ActionIconProps, Text } from '@mantine/core'

const Tappable = ({
  children,
  ...props
}: ComponentPropsWithoutRef<'button'> & ActionIconProps) => {
  return (
    <ActionIcon variant="subtle" size={65} {...props}>
      <Text size={50}>{children}</Text>
    </ActionIcon>
  )
}

export default Tappable
