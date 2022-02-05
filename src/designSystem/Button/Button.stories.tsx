import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      control: 'radio',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    theme: {
      control: 'radio',
      options: ['primary', 'secondary'],
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'Button',
}
