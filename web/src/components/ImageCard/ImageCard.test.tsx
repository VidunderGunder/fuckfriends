import { render } from '@redwoodjs/testing/web'

import ImageCard from './ImageCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ImageCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ImageCard />)
    }).not.toThrow()
  })
})
