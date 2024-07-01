import React from 'react'
import { GameModePage } from '../Components/GameModePage/GameModePage'

export default {
  title: 'Pages/GameModePage',
  component: GameModePage
}

const Template = (args) => <GameModePage {...args} />

export const Default = Template.bind({})
Default.args = {
  mode: 'random' // або 'topic'
}
