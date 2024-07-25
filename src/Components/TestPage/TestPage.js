import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import wordsData from '../../words.json'
import './TestPage.css'

export const TestPage = () => {
  const navigate = useNavigate()
  const [wordIndex, setWordIndex] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [feedback, setFeedback] = useState('')

  const allWords = Object.values(wordsData).flat()
  const currentWord = allWords[wordIndex]

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.toLowerCase() === currentWord.translation.toLowerCase()) {
      setFeedback('Правильно!')
      setWordIndex((prevIndex) => (prevIndex + 1) % allWords.length)
    } else {
      setFeedback(`Неправильно! Правильна відповідь: ${currentWord.translation}`)
    }
    setInputValue('')
  }

  const handleBack = () => {
    navigate('/')
  }

  const handleLogoClick = () => {
    navigate('/')
  }

  return (
    <div className="test-page">
      <h1 onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        VocabHero
      </h1>
      <div className="test-word">{currentWord.word}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Введіть переклад українською"
        />
        <button type="submit">Перевірити</button>
      </form>
      {feedback && <div className="feedback">{feedback}</div>}
      <button onClick={handleBack}>Повернутись на головну</button>
    </div>
  )
}

export default TestPage
