import { MetaTags } from '@redwoodjs/web'

import Carousel from 'src/components/Carousel/Carousel'

const HomePage = () => {
  return (
    <>
      <MetaTags title="FuckFriends" description="The best of both worlds" />
      <Carousel />
    </>
  )
}

export default HomePage
