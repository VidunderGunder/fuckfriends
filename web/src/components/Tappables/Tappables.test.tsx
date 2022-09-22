import { render } from '@redwoodjs/testing/web'

import Tappables from './Tappables'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Tappables', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Tappables />)
    }).not.toThrow()
  })
})
