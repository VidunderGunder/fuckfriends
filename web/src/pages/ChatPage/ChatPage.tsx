import { css } from '@emotion/react'
import { Box, Center, Skeleton, Text } from '@mantine/core'

import { MetaTags } from '@redwoodjs/web'

const ChatPage = () => {
  return (
    <>
      <MetaTags title="Chat" description="Chat page" />

      <Box
        css={css`
          position: relative;
          height: 100%;
          width: 100%;
        `}
      >
        <Skeleton
          css={css`
            position: absolute;
            height: 100%;
            width: 100%;
          `}
        />
        <Box
          color="transparent"
          css={css`
            z-index: 1;
            position: absolute;
            height: 100%;
            width: 100%;
          `}
        >
          <Center
            css={css`
              height: 100%;
            `}
          >
            <Text>This is gonna be fun to implement 🤔</Text>
          </Center>
        </Box>
      </Box>
    </>
  )
}

export default ChatPage
