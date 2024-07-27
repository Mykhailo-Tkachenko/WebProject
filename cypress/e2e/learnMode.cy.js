describe('Learn Mode', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('#email').type('user@example.com')
    cy.get('#password').type('password')
    cy.get('button').contains('Login').click()
  })

  it('should select learn mode and display words', () => {
    cy.get('button').contains('Теми').click()
    cy.contains('Виберіть тему').should('be.visible')
  })

  it('should display word details on click', () => {
    cy.get('button').contains('Теми').click()
    cy.contains('Animals').click()
    cy.contains('Cat').click()
    cy.contains('Definition:').should('be.visible')
    cy.contains('Translation:').should('be.visible')
  })
})
