import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Spinner } from '.'

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {},
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args} />

export const Default = Template.bind({})
