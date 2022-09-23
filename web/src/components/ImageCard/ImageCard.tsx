import { css } from '@emotion/react'
import { BackgroundImage, Box, Card, CardProps } from '@mantine/core'

type ImageCardProps = Partial<CardProps> & {
  src: string
  children?: React.ReactNode
}

const ImageCard = React.forwardRef<HTMLDivElement, ImageCardProps>(
  ({ src, children = null, ...props }: ImageCardProps, ref) => {
    return (
      <Card
        ref={ref}
        p={0}
        m={0}
        shadow="sm"
        withBorder
        radius="md"
        css={css`
          height: 100%;
          max-height: 100%;
          overflow: hidden;
        `}
        {...props}
      >
        <Box
          css={css`
            width: 100%;
            height: 100%;
            display: flex;
          `}
        >
          <BackgroundImage
            css={css`
              & {
                background-position: top;
              }
            `}
            src={src}
          >
            {children}
          </BackgroundImage>
        </Box>
      </Card>
    )
  }
)

export default ImageCard
