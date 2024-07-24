import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './WordCard.css'

export const WordCard = ({ word, definition, translation }) => {
  const [showDefinition, setShowDefinition] = useState(false)

  const toggleDefinition = () => {
    setShowDefinition(!showDefinition)
  }

  return (
    <div className="word-card" onClick={toggleDefinition}>
      <div className="word">{word}</div>
      {showDefinition && (
        <div className="details">
          <div className="definition">{definition}</div>
          <div className="translation">{translation}</div>
        </div>
      )}
    </div>
  )
}

WordCard.propTypes = {
  word: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired
}
