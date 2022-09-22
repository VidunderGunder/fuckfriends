import { css } from '@emotion/react'
import { Box, Center, Image } from '@mantine/core'
import Div100vh from 'react-div-100vh'

import { MetaTags } from '@redwoodjs/web'

import Area from 'src/components/Area/Area'
import Carousel from 'src/components/Carousel/Carousel'
import Logo from 'src/components/Logo/Logo'
import Tappables from 'src/components/Tappables/Tappables'

const HomePage = () => {
  return (
    <>
      <MetaTags title="FuckFriends" description="The best of both worlds" />
      <Div100vh>
        <Center
          css={css`
            width: 100%;
            height: 100%;
            max-height: 100%;
          `}
        >
          <Box
            css={css`
              display: grid;
              grid-template-areas:
                'logo'
                'main'
                'menu';
              grid-template-rows: auto 1fr auto;
              grid-template-columns: 1fr;
              gap: 1rem;
              width: 100%;
              height: 100%;
              max-height: 800px;
              max-width: 500px;
              overflow: hidden;
              overscroll-behavior: none;
            `}
            px="xs"
          >
            <Area
              _="logo"
              css={css`
                grid-area: logo;
                height: fit-content;
              `}
            >
              <Center>
                <Logo />
              </Center>
            </Area>
            <Area
              _="main"
              css={css`
                grid-area: main;
                height: 100%;
                max-height: 100%;
              `}
            >
              <Carousel />
            </Area>
            <Area
              _="menu"
              css={css`
                grid-area: menu;
              `}
            >
              <Center>
                <Tappables
                  tappables={[
                    {
                      children: '🍑',
                    },
                    {
                      children: '🍆',
                    },
                  ]}
                />
              </Center>
            </Area>
          </Box>
        </Center>
      </Div100vh>
    </>
  )
}

export default HomePage
