import { css } from '@emotion/react'
import { Box, Button, Center, Stack, Text } from '@mantine/core'

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
        <Stack
          css={css`
            height: 100%;
          `}
        >
          <Center
            css={css`
              height: 100%;
            `}
          >
            <Box>
              <Text>
                Nothing to adjust yet. <br /> You can try to press the button
                down there, but it doesn&apos;t do anyting as far as I know.
              </Text>
            </Box>
          </Center>
        </Stack>
        <Button color="red" fullWidth>
          Logout
        </Button>
      </Stack>
    </>
  )
}

export default SettingsPage
