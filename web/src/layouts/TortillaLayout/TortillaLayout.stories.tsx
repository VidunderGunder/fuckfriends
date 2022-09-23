// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof TortillaLayout> = (args) => {
//   return <TortillaLayout {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import TortillaLayout from './TortillaLayout'

export const generated = () => {
  return <TortillaLayout />
}

export default {
  title: 'Layouts/TortillaLayout',
  component: TortillaLayout,
} as ComponentMeta<typeof TortillaLayout>
