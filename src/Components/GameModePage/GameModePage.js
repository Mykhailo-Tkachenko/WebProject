import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { WordCard } from '../WordCard/WordCard'
import './GameModePage.css'

export const GameModePage = ({ mode, words = [] }) => {
  const [shuffledWords, setShuffledWords] = useState([])

  useEffect(() => {
    if (mode === 'random' || mode === 'learn') {
      const shuffled = [...words].sort(() => 0.5 - Math.random())
      setShuffledWords(shuffled)
    } else {
      setShuffledWords(words)
    }
  }, [mode, words])

  return (
    <div className="game-mode-page">
      <h2>{mode === 'random' ? 'Випадкові слова' : 'Слова за темами'}</h2>
      <div className="word-list">
        {shuffledWords.map((word, index) => (
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

GameModePage.propTypes = {
  mode: PropTypes.string.isRequired,
  words: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string.isRequired,
      definition: PropTypes.string.isRequired,
      translation: PropTypes.string.isRequired
    })
  ).isRequired
}
