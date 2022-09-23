import { ComponentPropsWithoutRef } from 'react'

import { Global, css } from '@emotion/react'
import Div100vh from 'react-div-100vh'

const TortillaLayout = ({
  children,
  ...props
}: ComponentPropsWithoutRef<typeof Div100vh>) => {
  return (
    <>
      <Global
        styles={css`
          html,
          body,
          #redwood-app {
            height: 100%;
            overscroll-behavior: none;
          }
          html,
          body,
          div,
          span {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
        `}
      />
      <Div100vh
        css={css`
          /* Remove overscroll and bounce */
          overscroll-behavior: none;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          max-height: min(100vh, 100%);
          width: 100%;
        `}
        {...props}
      >
        {children}
      </Div100vh>
    </>
  )
}

export default TortillaLayout
