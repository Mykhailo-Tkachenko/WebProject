import React from 'react'
import PropTypes from 'prop-types'
import './TopicSelector.css'

export const TopicSelector = ({ topics, onSelectTopic }) => (
  <div className="topic-selector">
    {topics.map((topic, index) => (
      <button key={index} onClick={() => onSelectTopic(topic)}>
        {topic}
      </button>
    ))}
  </div>
)

TopicSelector.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectTopic: PropTypes.func.isRequired
}
