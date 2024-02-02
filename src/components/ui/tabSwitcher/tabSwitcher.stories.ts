import type { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher } from './'

const meta = {
  argTypes: {
    buttonsData: {
      control: { type: 'text' },
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
  title: 'Components/TabSwitcher',
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Average: Story = {
  args: {
    activeBtn: 'average',
    buttonsData: [{ name: 'Primary Button', value: 'nex btn' }],
    variant: 'average',
  },
}
export const Dark: Story = {
  args: {
    activeBtn: 'average',
    buttonsData: [{ name: 'Button', value: 'nex btn' }],
    variant: 'dark',
  },
}
