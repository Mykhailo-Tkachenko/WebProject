import React from 'react'
import PropTypes from 'prop-types'
// import { WordCard } from '..Components/WordCard/WordCard'
import './TopicPage.css'

export const TopicPage = ({ topics, onSelectTopic }) => {
  return (
    <div className="topic-page">
      <h2>Виберіть тему</h2>
      <div className="topics-list">
        {topics.map((topic) => (
          <button key={topic} onClick={() => onSelectTopic(topic)}>
            {topic}
          </button>
        ))}
      </div>
    </div>
  )
}

TopicPage.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectTopic: PropTypes.func.isRequired
}

// export default TopicPage
