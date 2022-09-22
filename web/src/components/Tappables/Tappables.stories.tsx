// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Tappables> = (args) => {
//   return <Tappables {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Tappables from './Tappables'

export const generated = () => {
  return <Tappables />
}

export default {
  title: 'Components/Tappables',
  component: Tappables,
} as ComponentMeta<typeof Tappables>
