import { css } from '@emotion/react'
import { Box, UnstyledButton } from '@mantine/core'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import ImageCard from '../ImageCard/ImageCard'

const images = [
  '/examples/1.jpg',
  '/examples/2.jpg',
  '/examples/3.jpg',
  '/examples/4.jpg',
]

const imageButtonCSS = css`
  width: 100%;
  height: 100%;
  border-radius: 0.5em;
  outline: none;
  border: none;
  transition: all 0.125s ease-in-out;
  opacity: 0.875;
  :hover {
    opacity: 0.675;
  }
  :disabled {
    cursor: default;
    opacity: 0;
  }
`

const Carousel = () => {
  const [imageIndex, setImageIndex] = React.useState(0)

  function onLeftClick(e) {
    e.preventDefault()
    setImageIndex(imageIndex - 1)
  }
  function onRightClick(e) {
    e.preventDefault()
    setImageIndex(imageIndex + 1)
  }

  return (
    <ImageCard src={images[imageIndex]}>
      <Box
        css={css`
          display: flex;
          width: 100%;
          height: 100%;
        `}
      >
        <UnstyledButton
          disabled={imageIndex === 0}
          css={[
            css`
              display: flex;
              align-items: center;
              justify-content: start;
              color: white;
            `,
            imageButtonCSS,
          ]}
          onClick={onLeftClick}
        >
          <FaChevronLeft size={50} />
        </UnstyledButton>
        <UnstyledButton
          disabled={imageIndex === images.length - 1}
          css={[
            css`
              display: flex;
              align-items: center;
              justify-content: end;
              color: white;
            `,
            imageButtonCSS,
          ]}
          onClick={onRightClick}
        >
          <FaChevronRight size={50} />
        </UnstyledButton>
      </Box>
    </ImageCard>
  )
}

export default Carousel
