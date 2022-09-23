import { css } from '@emotion/react'
import { Box, Center } from '@mantine/core'
import { FaCog, FaUser } from 'react-icons/fa'
import { MdSwipe } from 'react-icons/md'

import { navigate, useLocation } from '@redwoodjs/router'

import Area from 'src/components/Area/Area'
import Logo from 'src/components/Logo/Logo'
import Tappable, { TappableProps } from 'src/components/Tappable/Tappable'

import TortillaLayout from '../TortillaLayout/TortillaLayout'

type AppTortillaLayoutProps = {
  children?: React.ReactNode
}

const gap = '1.5rem'

function TappableLink({
  to,
  icon,
  children,
  ...props
}: TappableProps & { to: string }) {
  const { pathname } = useLocation()
  const current = pathname === to
  return (
    <Tappable
      size={70}
      iconFactor={0.375}
      icon={icon}
      onClick={() => {
        navigate(to)
      }}
      disabled={current}
      variant={current ? 'transparent' : 'subtle'}
      {...props}
    >
      {children}
    </Tappable>
  )
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
            gap: ${gap};
          `}
          py={gap}
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
            <Center
              css={css`
                gap: 2rem;
              `}
            >
              <TappableLink to="/profile" icon={<FaUser />} />
              <TappableLink to="/" icon={<MdSwipe />} iconFactor={0.75} />
              <TappableLink to="/settings" icon={<FaCog />} />
            </Center>
          </Area>
        </Box>
      </Center>
    </TortillaLayout>
  )
}

export default AppTortillaLayout
