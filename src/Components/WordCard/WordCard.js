import React from 'react'
import PropTypes from 'prop-types'
import './WordCard.css'

export const WordCard = ({ word, definition }) => (
  <div className="word-card">
    <div className="word">{word}</div>
    <div className="definition">{definition}</div>
  </div>
)

WordCard.propTypes = {
  word: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired
}
