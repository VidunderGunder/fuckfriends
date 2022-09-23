import { render } from '@redwoodjs/testing/web'

import TortillaLayout from './TortillaLayout'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TortillaLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TortillaLayout />)
    }).not.toThrow()
  })
})
