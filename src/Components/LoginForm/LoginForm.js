import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './LoginForm.css'

export const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin({ email, password })
  }

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className={styles.loginFormButton} type="submit">
        Login
      </button>
    </form>
  )
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired
}
