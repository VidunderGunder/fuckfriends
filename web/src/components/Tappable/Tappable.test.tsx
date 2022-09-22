import { render } from '@redwoodjs/testing/web'

import Tappable from './Tappable'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Tappable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Tappable />)
    }).not.toThrow()
  })
})
