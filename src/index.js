import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import wordsData from './words.json'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainPage } from './Components/MainPage/MainPage'
import TopicWordsPage from './Components/TopicWordsPage/TopicWordsPage'
import TestPage from './Components/TestPage/TestPage'
import userClient from './clients/user/index'

userClient.init('https://mapstorage-7e78.restdb.io', process.env.API_KEY, fetch)

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

  const handleLogin = (login, pasword) => {
    userClient.auth(login, pasword).then(() => {
      // if (!user) {
      //   setError('Used does not exist')
      //   return
      // }
      // setError(null)
      setLoggedIn(true)
    })
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
    },
    {
      path: '/test',
      element: <TestPage />
    }
  ])

  return <RouterProvider router={router} />
}

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App />)
