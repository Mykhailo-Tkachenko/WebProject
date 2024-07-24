import React from 'react'
import PropTypes from 'prop-types'

export const GameModeSelector = ({ onSelectMode }) => {
  return (
    <div>
      <button onClick={() => onSelectMode('learn')}>Навчання</button>
      <button onClick={() => onSelectMode('test')}>Тест</button>
      <button onClick={() => onSelectMode('topic')}>Теми</button>
    </div>
  )
}

GameModeSelector.propTypes = {
  onSelectMode: PropTypes.func.isRequired
}
