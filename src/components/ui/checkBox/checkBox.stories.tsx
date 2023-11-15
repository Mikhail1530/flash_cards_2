import { Meta, StoryObj } from '@storybook/react'

import { CheckBox } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['checked', 'unchecked'],
    },
  },
  component: CheckBox,
  tags: ['autodocs'],
  title: 'Component/CheckBox',
} satisfies Meta<typeof CheckBox>

export default meta

type Story = StoryObj<typeof meta>

export const Checked: Story = {
  args: {
    disabled: false,
  },
}
