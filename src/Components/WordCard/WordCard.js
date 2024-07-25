import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './WordCard.css'

export const WordCard = ({ word, definition, translation }) => {
  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <div className="word-card" onClick={toggleDetails}>
      <div className="word">{word}</div>
      {showDetails && (
        <div className="details">
          <div className="definition">
            <strong>Definition:</strong> {definition}
          </div>
          <div className="translation">
            <strong>Translation:</strong> {translation}
          </div>
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
