import { render } from '@redwoodjs/testing/web'

import ImageCardButton from './ImageCardButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ImageCardButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ImageCardButton />)
    }).not.toThrow()
  })
})
