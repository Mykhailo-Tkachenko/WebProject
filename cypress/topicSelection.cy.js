describe('Topic Selection', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('input[name="email"]').type('user@example.com')
    cy.get('input[name="password"]').type('password')
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

  it('should navigate back to home on logo click', () => {
    cy.get('button').contains('Animals').click()
    cy.get('h1').contains('VocabHero').click()
    cy.contains('Виберіть режим гри').should('be.visible')
  })
})
