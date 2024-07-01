import React from 'react'
import { GameModeSelector } from '../Components/GameModeSelector/GameModeSelector'

export default {
  title: 'Components/GameModeSelector',
  component: GameModeSelector
}

const Template = (args) => <GameModeSelector {...args} />

export const Default = Template.bind({})
Default.args = {}
