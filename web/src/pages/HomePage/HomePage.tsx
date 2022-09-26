import { css } from '@emotion/react'
import { Box, Center, SimpleGrid } from '@mantine/core'
import { FaHeart, FaSmile, FaTimes } from 'react-icons/fa'

import { MetaTags } from '@redwoodjs/web'

import Carousel from 'src/components/Carousel/Carousel'
import ImageCardButton from 'src/components/ImageCardButton/ImageCardButton'

const HomePage = () => {
  return (
    <>
      <MetaTags title="FuckFriends" description="The Best of Both Cheecks" />

      <Carousel />
      <Box
        css={css`
          position: relative;
          height: 0;
          z-index: 1;
        `}
      >
        <Center>
          <SimpleGrid
            cols={3}
            spacing="xl"
            p="xl"
            css={css`
              position: absolute;
              bottom: -100%;
              /* width: 100%; */
              place-items: center;
            `}
          >
            <ImageCardButton icon={<FaHeart />} />
            <ImageCardButton icon={<FaSmile />} />
            <ImageCardButton icon={<FaTimes />} />
          </SimpleGrid>
        </Center>
      </Box>
    </>
  )
}

export default HomePage
