import React from 'react'
import { TopicSelector } from '../Components/TopicSelector/TopicSelector'

export default {
  title: 'Components/TopicSelector',
  component: TopicSelector
}

const Template = (args) => <TopicSelector {...args} />

export const Default = Template.bind({})
Default.args = {
  topics: ['Topic 1', 'Topic 2', 'Topic 3']
}
