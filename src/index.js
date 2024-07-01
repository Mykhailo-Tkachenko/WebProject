import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { MainPage } from './Components/MainPage/MainPage'
import { GameModePage } from './Components/GameModePage/GameModePage'
import { TopicPage } from './Components/TopicPage/TopicPage'
import { LoginForm } from './Components/LoginForm/LoginForm'
import { ProgressTracker } from './Components/ProgressTracker/ProgressTracker'
// import './index.css';

const App = () => {
  const [mode, setMode] = useState(null)
  const [topics] = useState(['Animals', 'Food', 'Travel'])
  const [words] = useState([
    { word: 'Example', definition: 'This is an example word definition.' },
    { word: 'Test', definition: 'This is a test word definition.' }
  ])
  const [progress] = useState(50)
  const [loggedIn, setLoggedIn] = useState(false)

  const handleSelectMode = (selectedMode) => {
    setMode(selectedMode)
  }

  const handleLogin = () => {
    setLoggedIn(true)
  }

  const handleSelectTopic = () => {}

  return (
    <div className="app">
      <header className="app-header">
        <h1>VocabHero</h1>
      </header>

      <main>
        {!loggedIn && <LoginForm onLogin={handleLogin} />}

        {loggedIn && !mode && <MainPage onSelectMode={handleSelectMode} />}

        {loggedIn && mode === 'random' && <GameModePage mode="random" words={words} />}
        {loggedIn && mode === 'topic' && (
          <TopicPage topics={topics} onSelectTopic={handleSelectTopic} />
        )}

        {loggedIn && <ProgressTracker progress={progress} />}
      </main>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App />)
