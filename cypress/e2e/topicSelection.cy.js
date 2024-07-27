describe('Topic Selection', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('#email').type('user@example.com')
    cy.get('#password').type('password')
    cy.get('button').contains('Login').click()
    cy.get('button').contains('Теми').click()
  })

  it('should select a topic and display words', () => {
    cy.get('button').contains('Animals').click()
    cy.contains('Cat').should('be.visible')
  })

  it('should display word details on click', () => {
    cy.get('button').contains('Animals').click()
    cy.contains('Cat').click()
    cy.contains('Definition:').should('be.visible')
    cy.contains('Translation:').should('be.visible')
  })
})
