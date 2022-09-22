import { css } from '@emotion/react'
import { Image } from '@mantine/core'

const Logo = () => {
  return (
    <Image
      css={css`
        max-width: 300px;
      `}
      src="/logo.png"
    />
  )
}

export default Logo
