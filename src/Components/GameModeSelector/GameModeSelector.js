import React from 'react'
import './GameModeSelector.css'
import PropTypes from 'prop-types'

export const GameModeSelector = ({ onSelectMode }) => (
  <div className="game-mode-selector">
    <button onClick={() => onSelectMode('random')}>Випадкові слова</button>
    <button onClick={() => onSelectMode('topic')}>Слова за темами</button>
  </div>
)

GameModeSelector.propTypes = {
  onSelectMode: PropTypes.func.isRequired
}
