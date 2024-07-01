import React from 'react'
import { WordCard } from '../Components/WordCard/WordCard'

export default {
  title: 'Components/WordCard',
  component: WordCard
}

const Template = (args) => <WordCard {...args} />

export const Default = Template.bind({})
Default.args = {
  word: 'Example',
  definition: 'This is an example word definition.'
}
