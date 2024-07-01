import React from 'react'
import PropTypes from 'prop-types'
import { WordCard } from '../WordCard/WordCard'
import './GameModePage.css'

export const GameModePage = ({ mode, words = [] }) => (
  <div className="game-mode-page">
    <h2>{mode === 'random' ? 'Випадкові слова' : 'Слова за темами'}</h2>
    <div className="word-list">
      {words.map((word, index) => (
        <WordCard key={index} word={word.word} definition={word.definition} />
      ))}
    </div>
  </div>
)

GameModePage.propTypes = {
  mode: PropTypes.string.isRequired,
  words: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string.isRequired,
      definition: PropTypes.string.isRequired
    })
  ).isRequired
}
