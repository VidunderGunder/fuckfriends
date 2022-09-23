import { render } from '@redwoodjs/testing/web'

import AppTortillaLayout from './AppTortillaLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AppTortillaLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AppTortillaLayout />)
    }).not.toThrow()
  })
})
