import React from 'react'
import { TopicPage } from '../Components/TopicPage/TopicPage'

export default {
  title: 'Pages/TopicPage',
  component: TopicPage
}

const Template = (args) => <TopicPage {...args} />

export const Default = Template.bind({})
Default.args = {}
