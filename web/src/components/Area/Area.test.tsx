import { render } from '@redwoodjs/testing/web'

import Area from './Area'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Area', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Area />)
    }).not.toThrow()
  })
})
