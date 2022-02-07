import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input } from '.'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'textarea', 'email', 'password'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const Default = Template.bind({})

Default.args = {
  placeholder: 'Please type...',
  error: '',
}
