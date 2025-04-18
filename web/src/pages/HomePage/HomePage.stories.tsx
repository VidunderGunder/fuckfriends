import type { ComponentMeta } from '@storybook/react'

import HomePage from './HomePage'

export const generated = () => {
  return <HomePage />
}

export default {
  title: 'Pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof HomePage>
