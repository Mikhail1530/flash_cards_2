import type { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher } from './'

const meta = {
  argTypes: {
    buttonsName: {
      control: 'text',
      // control:{ type:Array<string>}
    },
    buttonsVariant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['light', 'average', 'dark'],
    },
  },
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Average: Story = {
  args: {
    buttonsName: ['Primary Button', 'nex btn'],
    variant: 'average',
  },
}
export const Dark: Story = {
  args: {
    buttonsName: ['Button', 'nex btn'],
    variant: 'dark',
  },
}
