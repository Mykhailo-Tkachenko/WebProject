import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { LoginForm } from '../../Components/LoginForm/LoginForm'
import userClient from '../User/index'

jest.mock('../User/index') // Mock API client

describe('LoginForm', () => {
  test('renders login form and handles successful login', async () => {
    const mockUser = { id: 1, name: 'John Doe' }
    userClient.auth.mockResolvedValue(mockUser)

    const handleLogin = jest.fn()
    render(<LoginForm onLogin={handleLogin} />)

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'user@example.com' } })
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } })
    fireEvent.click(screen.getByRole('button', { name: /login/i }))

    expect(await screen.findByText(/виберіть режим гри/i)).toBeInTheDocument()
    expect(handleLogin).toHaveBeenCalledWith(mockUser)
  })

  test('renders login form and handles failed login', async () => {
    userClient.auth.mockResolvedValue(null)

    render(<LoginForm onLogin={jest.fn()} />)

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'user@example.com' } })
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'wrongpassword' } })
    fireEvent.click(screen.getByRole('button', { name: /login/i }))

    expect(await screen.findByText(/невірний логін або пароль/i)).toBeInTheDocument()
  })

  test('renders login form and handles API error', async () => {
    userClient.auth.mockRejectedValue(new Error('API error'))

    render(<LoginForm onLogin={jest.fn()} />)

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'user@example.com' } })
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } })
    fireEvent.click(screen.getByRole('button', { name: /login/i }))

    expect(await screen.findByText(/сталася помилка. спробуйте пізніше/i)).toBeInTheDocument()
  })
})
