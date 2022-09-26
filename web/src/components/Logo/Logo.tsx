import { css } from '@emotion/react'
import { Box, Image, Text, Title, useMantineTheme } from '@mantine/core'

const iconSize = 59
const iconCSS = css`
  width: ${iconSize}px;
  height: ${iconSize}px;
  max-width: ${iconSize}px;
  max-height: ${iconSize}px;
`

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
          gap: 0.675em;
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
            FuckFriends
          </Title>
          <Text align="right" size="xs" weight={900} color={secondary} inline>
            The Best of Both Cheecks
          </Text>
        </Box>
        <Image src="/peach.svg" css={iconCSS} />
      </Box>
    </Box>
  )
}

export default Logo
