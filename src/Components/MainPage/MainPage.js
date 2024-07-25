import React from 'react'
import PropTypes from 'prop-types'
import { LoginForm } from '../LoginForm/LoginForm'
import { GameModePage } from '../GameModePage/GameModePage'
import { TopicPage } from '../TopicPage/TopicPage'
import { ProgressTracker } from '../ProgressTracker/ProgressTracker'
import { GameModeSelector } from '../GameModeSelector/GameModeSelector'
import { useNavigate } from 'react-router-dom'
import './MainPage.css'

export const MainPage = ({
  loggedIn,
  handleLogin,
  mode,
  handleSelectMode,
  words,
  topics,
  handleSelectTopic,
  progress
}) => {
  const navigate = useNavigate()

  const handleTopicSelect = (topic) => {
    handleSelectTopic(topic)
    navigate(`/topic/${topic}`)
  }

  const handleLogoClick = () => {
    navigate('/')
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          VocabHero
        </h1>
      </header>

      <main>
        {!loggedIn && <LoginForm onLogin={handleLogin} />}

        {loggedIn && !mode && <GameModeSelector onSelectMode={handleSelectMode} />}

        {loggedIn && mode === 'topic' && (
          <TopicPage topics={topics} onSelectTopic={handleTopicSelect} />
        )}

        {loggedIn && mode && mode !== 'topic' && <GameModePage mode={mode} words={words} />}

        {loggedIn && <ProgressTracker progress={progress} />}
      </main>
    </div>
  )
}

MainPage.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
  mode: PropTypes.string,
  handleSelectMode: PropTypes.func.isRequired,
  words: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string.isRequired,
      definition: PropTypes.string.isRequired,
      translation: PropTypes.string.isRequired
    })
  ).isRequired,
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSelectTopic: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired
}

export default MainPage
