import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

export const GameModeSelector = ({ onSelectMode }) => {
  const navigate = useNavigate()

  const handleSelectMode = (mode) => {
    onSelectMode(mode)
    if (mode === 'test') {
      navigate('/test')
    }
  }

  return (
    <div>
      <button onClick={() => handleSelectMode('learn')}>Навчання</button>
      <button onClick={() => handleSelectMode('random')}>Випадкові слова</button>
      <button onClick={() => handleSelectMode('topic')}>Теми</button>
      <button onClick={() => handleSelectMode('test')}>Тест</button>
    </div>
  )
}

GameModeSelector.propTypes = {
  onSelectMode: PropTypes.func.isRequired
}

export default GameModeSelector
