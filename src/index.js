import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import wordsData from './words.json'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainPage } from './Components/MainPage/MainPage'
import TopicWordsPage from './Components/TopicWordsPage/TopicWordsPage'

const App = () => {
  const [mode, setMode] = useState(null)
  const [topics] = useState(Object.keys(wordsData))
  const [words, setWords] = useState([])
  const [progress] = useState(50)
  const [loggedIn, setLoggedIn] = useState(false)

  const handleSelectMode = (selectedMode) => {
    setMode(selectedMode)
    setWords(wordsData[selectedMode])
  }

  const handleLogin = () => {
    setLoggedIn(true)
  }

  const handleSelectTopic = (topic) => {
    setWords(wordsData[topic])
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <MainPage
          loggedIn={loggedIn}
          handleLogin={handleLogin}
          mode={mode}
          handleSelectMode={handleSelectMode}
          words={words}
          topics={topics}
          handleSelectTopic={handleSelectTopic}
          progress={progress}
        />
      )
    },
    {
      path: '/topic/:topicName',
      element: <TopicWordsPage />
    }
  ])

  return <RouterProvider router={router} />
}

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App />)
