import { css } from '@emotion/react'
import { Box, Center } from '@mantine/core'

import { navigate, routes } from '@redwoodjs/router'

import Area from 'src/components/Area/Area'
import Logo from 'src/components/Logo/Logo'
import Tappables from 'src/components/Tappables/Tappables'

import TortillaLayout from '../TortillaLayout/TortillaLayout'

type AppTortillaLayoutProps = {
  children?: React.ReactNode
}

const AppTortillaLayout = ({ children }: AppTortillaLayoutProps) => {
  return (
    <TortillaLayout>
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
            width: 100%;
            height: 100%;
            max-height: 800px;
            max-width: 500px;
            overflow: hidden;
            overscroll-behavior: none;
            gap: 1rem;
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
            {children}
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
                    children: '💁',
                    onClick: () => {
                      navigate(routes.profile())
                    },
                  },
                  {
                    children: '🍑',
                    onClick: () => {
                      navigate(routes.home())
                    },
                  },
                  {
                    children: '⚙️',
                    onClick: () => {
                      navigate(routes.settings())
                    },
                  },
                ]}
              />
            </Center>
          </Area>
        </Box>
      </Center>
    </TortillaLayout>
  )
}

export default AppTortillaLayout
