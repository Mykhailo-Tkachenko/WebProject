import React from 'react'
import { useParams } from 'react-router-dom'
import { WordCard } from '../WordCard/WordCard'
import wordsData from ''
import './TopicWordsPage.css'

export const TopicWordsPage = () => {
  const { topicName } = useParams()
  const words = wordsData[topicName] || []

  return (
    <div className="topic-words-page">
      <h1 className="topic-title">{topicName}</h1>
      <div className="word-list">
        {words.map((word, index) => (
          <WordCard
            key={index}
            word={word.word}
            definition={word.definition}
            translation={word.translation}
          />
        ))}
      </div>
    </div>
  )
}

export default TopicWordsPage
