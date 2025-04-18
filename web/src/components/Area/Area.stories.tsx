// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof GridArea> = (args) => {
//   return <GridArea {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Area from './Area'

export const generated = () => {
  return <Area />
}

export default {
  title: 'Components/Area',
  component: Area,
} as ComponentMeta<typeof Area>
