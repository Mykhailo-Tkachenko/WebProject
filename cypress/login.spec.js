describe('Login', () => {
  it('should login successfully', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[name="text"]').type('text')
    cy.get('input[name="password"]').type('password')
    cy.get('button').contains('Login').click()
    cy.contains('Виберіть режим гри').should('be.visible')
  })
})
