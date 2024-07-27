import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { LoginForm } from '../../Components/LoginForm/LoginForm'
import userClient from '../User/index'

jest.mock('../User/index') // Mock API client

describe('LoginForm', () => {
  test('handles successful login', async () => {
    const mockUser = { id: 1, name: 'John Doe' }
    userClient.auth.mockResolvedValue(mockUser)

    const { getByLabelText, getByRole } = render(<LoginForm onLogin={() => {}} />)

    fireEvent.change(getByLabelText(/email/i), { target: { value: 'user@example.com' } })
    fireEvent.change(getByLabelText(/password/i), { target: { value: 'password' } })
    fireEvent.click(getByRole('button', { name: /login/i }))

    // Перевірка, що користувач був успішно авторизований (можна додати ваші власні перевірки)
  })

  test('handles failed login', async () => {
    userClient.auth.mockResolvedValue(null)

    const { getByLabelText, getByRole, findByText } = render(<LoginForm onLogin={() => {}} />)

    fireEvent.change(getByLabelText(/email/i), { target: { value: 'user@example.com' } })
    fireEvent.change(getByLabelText(/password/i), { target: { value: 'wrongpassword' } })
    fireEvent.click(getByRole('button', { name: /login/i }))

    // Перевірка, що користувач отримав повідомлення про невдалий логін
    expect(await findByText(/невірний логін або пароль/i)).toBeTruthy()
  })

  test('handles API error', async () => {
    userClient.auth.mockRejectedValue(new Error('API error'))

    const { getByLabelText, getByRole, findByText } = render(<LoginForm onLogin={() => {}} />)

    fireEvent.change(getByLabelText(/email/i), { target: { value: 'user@example.com' } })
    fireEvent.change(getByLabelText(/password/i), { target: { value: 'password' } })
    fireEvent.click(getByRole('button', { name: /login/i }))

    // Перевірка, що користувач отримав повідомлення про помилку API
    expect(await findByText(/сталася помилка. спробуйте пізніше/i)).toBeTruthy()
  })
})
