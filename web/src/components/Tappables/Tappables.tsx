import { ComponentPropsWithoutRef } from 'react'

import { Button } from '@mantine/core'

import Tappable from '../Tappable/Tappable'

const Tappables = ({
  tappables,
}: {
  tappables: ComponentPropsWithoutRef<typeof Tappable>[]
}) => {
  return (
    <Button.Group my="xs">
      {tappables.map((tappable, index) => (
        <Tappable key={index} {...tappable} />
      ))}
    </Button.Group>
  )
}

export default Tappables
