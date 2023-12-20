import type { Meta, StoryObj } from '@storybook/react'

import ReactNode from 'react'

import { Card } from '@/components/ui/card/card'

const meta = {
  argTypes: {
    title: {
      iconElement: {
        control: { type: ReactNode },
      },
      text: {
        control: { type: 'text' },
      },
    },
    variant: {
      control: { type: 'radio' },
      options: ['dark', 'light', 'white'],
    },
    width: {
      control: { type: 'text' },
    },
  },
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {
    children: 'inner text for dark body',
    variant: 'dark',
    width: '500px',
  },
}

export const Light: Story = {
  args: {
    children: 'light dody',
    title: { text: 'light native title' },
    variant: 'light',
  },
}
export const White: Story = {
  args: {
    children: 'Tertiary Button-body',
    variant: 'white',
  },
}
