// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Tappable> = (args) => {
//   return <Tappable {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Tappable from './Tappable'

export const generated = () => {
  return <Tappable />
}

export default {
  title: 'Components/Tappable',
  component: Tappable,
} as ComponentMeta<typeof Tappable>
