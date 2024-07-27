import userClient from './index'
import { render, fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { LoginForm } from '../../Components/LoginForm/LoginForm'

jest.mock('./index') // Mock API client

describe('User Client', () => {
  describe('auth', () => {
    let fetchMocked = jest.fn()

    afterEach(() => {
      fetchMocked.mockClear()
    })

    describe('if request is invalid', () => {
      beforeEach(() => {
        fetchMocked.mockResolvedValue(
          new Response('Server error', {
            status: 500,
            statusText: 'Server error'
          })
        )

        userClient.init('/', '123123123', fetchMocked)
      })

      it('should throw an error', async () => {
        const login = 'test'
        const password = 'test'

        await expect(userClient.auth(login, password)).rejects.toThrow('Error: Server error')
      })
    })

    describe('if request is valid', () => {
      describe('if a user exists', () => {
        beforeEach(() => {
          fetchMocked.mockResolvedValue(
            new Response(
              JSON.stringify([
                {
                  login: 'test',
                  password: 'test'
                }
              ]),
              {
                status: 200,
                statusText: '200 OK'
              }
            )
          )

          userClient.init('/', '123123123', fetchMocked)
        })

        it('should return a user data', async () => {
          const login = 'test'
          const password = 'test'

          const res = await userClient.auth(login, password)

          expect(res).toEqual({
            login: 'test',
            password: 'test'
          })
        })
      })

      describe('if a user does not exist', () => {
        beforeEach(() => {
          fetchMocked.mockResolvedValue(
            new Response(JSON.stringify([]), {
              status: 200,
              statusText: '200 OK'
            })
          )

          userClient.init('/', '123123123', fetchMocked)
        })

        it('should return null', async () => {
          const login = 'test'
          const password = 'test'

          const res = await userClient.auth(login, password)

          expect(res).toEqual(null)
        })
      })
    })
  })

  describe('getUser', () => {
    let fetchMocked = jest.fn()

    beforeEach(() => {
      fetchMocked.mockClear()
    })

    describe('if the token is valid', () => {
      beforeEach(() => {
        fetchMocked.mockResolvedValue(
          new Response(
            JSON.stringify([
              {
                login: 'test',
                password: 'test',
                token: 'some-token'
              }
            ]),
            {
              status: 200,
              statusText: '200 OK'
            }
          )
        )

        userClient.init('/', '123123123', fetchMocked)
      })

      it('should return user data', async () => {
        await expect(userClient.getUser('valid-token')).resolves.toEqual({
          login: 'test',
          password: 'test',
          token: 'some-token'
        })
      })
    })

    describe('if the token is not valid', () => {
      beforeEach(() => {
        fetchMocked.mockResolvedValue(
          new Response(JSON.stringify([]), {
            status: 200,
            statusText: '200 OK'
          })
        )

        userClient.init('/', '123123123', fetchMocked)
      })

      it('should return null', async () => {
        await expect(userClient.getUser('valid-token')).resolves.toEqual(null)
      })
    })
  })

  describe('LoginForm', () => {
    it('handles successful login', async () => {
      const mockUser = { id: 1, name: 'John Doe' }
      userClient.auth.mockResolvedValue(mockUser)

      const handleLogin = jest.fn()
      render(<LoginForm onLogin={handleLogin} />)

      fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'user@example.com' } })
      fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } })
      fireEvent.click(screen.getByRole('button', { name: /login/i }))

      // Перевірка, що функція onLogin викликається з правильними даними
      expect(handleLogin).toHaveBeenCalledWith(mockUser)
    })

    it('handles failed login', async () => {
      userClient.auth.mockResolvedValue(null)

      const handleLogin = jest.fn()
      render(<LoginForm onLogin={handleLogin} />)

      fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'user@example.com' } })
      fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'wrongpassword' } })
      fireEvent.click(screen.getByRole('button', { name: /login/i }))

      // Перевірка, що користувач отримав повідомлення про невдалий логін
      expect(await screen.findByText(/невірний логін або пароль/i)).toBeTruthy()
    })

    it('handles API error', async () => {
      userClient.auth.mockRejectedValue(new Error('API error'))

      const handleLogin = jest.fn()
      render(<LoginForm onLogin={handleLogin} />)

      fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'user@example.com' } })
      fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } })
      fireEvent.click(screen.getByRole('button', { name: /login/i }))

      // Перевірка, що користувач отримав повідомлення про помилку API
      expect(await screen.findByText(/сталася помилка. спробуйте пізніше/i)).toBeTruthy()
    })
  })
})
