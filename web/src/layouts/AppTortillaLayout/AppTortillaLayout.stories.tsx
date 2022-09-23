import type { ComponentMeta, ComponentStory } from '@storybook/react'

import AppTortillaLayout from './AppTortillaLayout'

export const generated: ComponentStory<typeof AppTortillaLayout> = (args) => {
  return <AppTortillaLayout {...args} />
}

export default {
  title: 'Layouts/AppTortillaLayout',
  component: AppTortillaLayout,
} as ComponentMeta<typeof AppTortillaLayout>
