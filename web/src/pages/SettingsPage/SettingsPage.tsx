import { css } from '@emotion/react'
import { Button, Stack } from '@mantine/core'

import { MetaTags } from '@redwoodjs/web'

const SettingsPage = () => {
  return (
    <>
      <MetaTags title="Settings" description="Settings page" />

      <Stack
        css={css`
          height: 100%;
        `}
        justify="space-between"
      >
        <Stack></Stack>
        <Button color="red" fullWidth>
          Logout
        </Button>
      </Stack>
    </>
  )
}

export default SettingsPage
