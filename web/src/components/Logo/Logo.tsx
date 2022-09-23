import { css } from '@emotion/react'
import { Box, Text, Title, useMantineTheme } from '@mantine/core'
import { IoPeopleCircle } from 'react-icons/io5'

const Logo = () => {
  const {
    colors: { purple, pink },
  } = useMantineTheme()

  const [primary, secondary] = [purple[7], pink[2]]

  return (
    <Box>
      <Box
        css={css`
          display: flex;
          gap: 1em;
          align-items: center;
        `}
      >
        <Box
          css={css`
            position: relative;
            bottom: 2px;
          `}
        >
          <Title
            align="right"
            order={1}
            size={50}
            weight={500}
            color={primary}
            inline
            css={css`
              font-family: titanone;
            `}
          >
            FckFrnds
          </Title>
          <Text align="right" size="xs" weight={900} color={secondary} inline>
            The Best of Both Worlds
          </Text>
        </Box>
        <Text
          inline
          m={-8}
          p={0}
          color={secondary}
          css={css`
            font-family: emoji-color;
            font-size: 50px;
          `}
          role="img"
          aria-label="peachy peach"
        >
          🍑
        </Text>
      </Box>
      {/* <Image
        css={css`
          max-width: 300px;
        `}
        src="/logo.png"
      /> */}
    </Box>
  )
}

export default Logo
