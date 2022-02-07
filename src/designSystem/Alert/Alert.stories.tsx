import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Alert } from '.'

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    type: {
      control: 'radio',
      options: ['danger', 'warning', 'info'],
    },
  },
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = args => <Alert {...args} />

export const Default = Template.bind({})

Default.args = {
  message: 'This is Alert',
}
