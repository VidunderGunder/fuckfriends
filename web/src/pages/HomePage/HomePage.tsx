import { css } from '@emotion/react'
import {
  BackgroundImage,
  Box,
  Button,
  Card,
  Center,
  Image,
  UnstyledButton,
} from '@mantine/core'
import Div100vh from 'react-div-100vh'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { MetaTags } from '@redwoodjs/web'

import Tappable from 'src/components/Tappable/Tappable'
import Tappables from 'src/components/Tappables/Tappables'

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
const images = [
  '/examples/1.jpg',
  '/examples/2.jpg',
  '/examples/3.jpg',
  '/examples/4.jpg',
]

const HomePage = () => {
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
            <Box
              css={css`
                grid-area: logo;
                height: fit-content;
              `}
            >
              <Center>
                <Image
                  css={css`
                    max-width: 300px;
                  `}
                  src="/logo.png"
                />
              </Center>
            </Box>
            <Box
              css={css`
                grid-area: main;
                height: 100%;
                max-height: 100%;
              `}
            >
              <Card
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
                    src={images[imageIndex]}
                  >
                    <Button.Group
                      css={css`
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
                    </Button.Group>
                  </BackgroundImage>
                </Box>
              </Card>
            </Box>
            <Box
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
            </Box>
          </Box>
        </Center>
      </Div100vh>
    </>
  )
}

export default HomePage
