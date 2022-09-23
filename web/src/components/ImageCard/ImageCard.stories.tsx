// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ImageCard> = (args) => {
//   return <ImageCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ImageCard from './ImageCard'

export const generated = () => {
  return <ImageCard />
}

export default {
  title: 'Components/ImageCard',
  component: ImageCard,
} as ComponentMeta<typeof ImageCard>
