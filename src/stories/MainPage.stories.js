import React from 'react'
import { MainPage } from '../Components/MainPage/MainPage'

export default {
  title: 'Pages/MainPage',
  component: MainPage
}

const Template = (args) => <MainPage {...args} />

export const Default = Template.bind({})
Default.args = {}
