import React from 'react'
import { ProgressTracker } from '../Components/ProgressTracker/ProgressTracker'

export default {
  title: 'Components/ProgressTracker',
  component: ProgressTracker
}

const Template = (args) => <ProgressTracker {...args} />

export const Default = Template.bind({})
Default.args = {
  progress: 50 // приклад прогресу в процентах
}
