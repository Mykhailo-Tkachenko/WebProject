import userClient from './index'

describe('User Client', () => {
  describe('auth', () => {
    let fetchMocked

    beforeEach(() => {
      fetchMocked = jest.fn()
      userClient.init('http://test.com', 'api-key', fetchMocked)
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should throw an error if the request is invalid', async () => {
      fetchMocked.mockResolvedValue({
        ok: false,
        status: 500,
        statusText: 'Server error'
      })

      await expect(userClient.auth('test', 'test')).rejects.toThrow('Error: Server error')
    })

    it('should return user data if a user exists', async () => {
      fetchMocked.mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => [{ login: 'test', password: 'test' }]
      })

      const res = await userClient.auth('test', 'test')
      expect(res).toEqual({ login: 'test', password: 'test' })
    })

    it('should return null if a user does not exist', async () => {
      fetchMocked.mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => []
      })

      const res = await userClient.auth('test', 'test')
      expect(res).toEqual(null)
    })
  })

  describe('getUser', () => {
    let fetchMocked

    beforeEach(() => {
      fetchMocked = jest.fn()
      userClient.init('http://test.com', 'api-key', fetchMocked)
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should return user data if the token is valid', async () => {
      fetchMocked.mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => [{ login: 'test', password: 'test', token: 'some-token' }]
      })

      await expect(userClient.getUser('valid-token')).resolves.toEqual({
        login: 'test',
        password: 'test',
        token: 'some-token'
      })
    })

    it('should return null if the token is not valid', async () => {
      fetchMocked.mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => []
      })

      await expect(userClient.getUser('invalid-token')).resolves.toEqual(null)
    })
  })
})
