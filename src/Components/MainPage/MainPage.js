import React from 'react'
import PropTypes from 'prop-types'
import { GameModeSelector } from '../GameModeSelector/GameModeSelector'
import './MainPage.css'

export const MainPage = ({ onSelectMode }) => (
  <div className="main-page">
    <h2>Виберіть режим гри</h2>
    <GameModeSelector onSelectMode={onSelectMode} />
  </div>
)

MainPage.propTypes = {
  onSelectMode: PropTypes.func.isRequired
}
