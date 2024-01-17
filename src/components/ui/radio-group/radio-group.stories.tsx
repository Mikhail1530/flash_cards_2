import { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['Enable', 'IsDisabled'],
    },
  },
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroupDemo',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>
export const IsDisabled: Story = {
  args: {
    option: [
      { isDisabled: false, name: 'Option1', value: 1 },
      { isDisabled: false, name: 'Option2', value: 2 },
    ],
  },
}
export const Enable: Story = {
  args: {
    option: [
      { isDisabled: true, name: 'Option1', value: 1 },
      { isDisabled: true, name: 'Option2', value: 2 },
    ],
  },
}
