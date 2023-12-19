import { Meta, Story } from '@storybook/react'

import { RadioButtonProps, RadioButtons } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
    },
  },
  component: RadioButtons,
  tags: ['autodocs'],
  title: 'Components/RadioGroupDemo',
} satisfies Meta<typeof RadioButtons>

export default meta

const Template: Story<RadioButtonProps> = args => <RadioButtons {...args} />

export const Default = Template.bind({})
Default.args = {
  isDisabled: false,
  // You can provide additional props as needed
}

export const Disabled = Template.bind({})
Disabled.args = {
  isDisabled: true,
  // You can provide additional props as needed
}

// Add more stories for different scenarios as needed
