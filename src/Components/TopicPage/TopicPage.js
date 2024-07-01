import React from 'react'
import PropTypes from 'prop-types'
import { TopicSelector } from '../TopicSelector/TopicSelector'
import './TopicPage.css'

export const TopicPage = ({ topics, onSelectTopic }) => (
  <div className="topic-page">
    <h2>Виберіть тему</h2>
    <TopicSelector topics={topics} onSelectTopic={onSelectTopic} />
  </div>
)

TopicPage.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectTopic: PropTypes.func.isRequired
}
