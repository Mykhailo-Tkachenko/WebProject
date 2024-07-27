describe('Login', () => {
  it('should login successfully', () => {
    cy.visit('http://localhost:3000')
    cy.get('#email').type('user@example.com')
    cy.get('#password').type('password')
    cy.get('button').contains('Login').click()
  })
})
