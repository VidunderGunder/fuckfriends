import { Global, css } from '@emotion/react'
import { MantineProvider } from '@mantine/core'
import * as theme from 'config/mantine.config'

import { AuthProvider } from '@redwoodjs/auth'
import WebAuthnClient from '@redwoodjs/auth/webAuthn'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
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
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider type="dbAuth" client={WebAuthnClient}>
        <MantineProvider theme={theme}>
          <RedwoodApolloProvider>
            <Routes />
          </RedwoodApolloProvider>
        </MantineProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
