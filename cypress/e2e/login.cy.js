describe('Login', () => {
  it('should login successfully', () => {
    cy.visit('/')
    cy.get('input[name="email"]').type('user@example.com')
    cy.get('input[name="password"]').type('password')
    cy.get('button').contains('Login').click()
    cy.contains('Виберіть режим гри').should('be.visible')
  })
})
