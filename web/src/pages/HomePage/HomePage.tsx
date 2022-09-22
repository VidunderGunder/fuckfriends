import { css } from '@emotion/react'
import {
  Box,
  Button,
  Card,
  Center,
  BackgroundImage,
  Image,
  UnstyledButton,
} from '@mantine/core'

import { MetaTags } from '@redwoodjs/web'

import Tappable from 'src/components/Tappable/Tappable'

const imageButtonCSS = css`
  width: 100%;
  height: 100%;
  border-radius: 0.5em;
  transition: 0.15s;
  :focus {
    outline: none;
  }
  :hover {
    outline: none;
    opacity: 0.8;
    background-color: rgba(0, 0, 0, 0.05);
    backdrop-filter: none;
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
      <Center
        css={css`
          height: 100%;
          width: 100%;
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
                      css={imageButtonCSS}
                      onClick={onLeftClick}
                    />
                    <UnstyledButton
                      disabled={imageIndex === images.length - 1}
                      css={imageButtonCSS}
                      onClick={onRightClick}
                    />
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
              <Button.Group my="xs">
                <Tappable
                  onClick={() => {
                    alert("Mail sent to Anders. He's gonna be so happy!")
                  }}
                >
                  🍑
                </Tappable>
                <Tappable
                  onClick={() => {
                    alert("Mail sent to Anders. He's gonna be so happy!")
                  }}
                >
                  🍆
                </Tappable>
              </Button.Group>
            </Center>
          </Box>
        </Box>
      </Center>
    </>
  )
}

export default HomePage
