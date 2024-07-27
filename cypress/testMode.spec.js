describe('Test Mode', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('input[name="email"]').type('user@example.com')
    cy.get('input[name="password"]').type('password')
    cy.get('button').contains('Login').click()
    cy.get('button').contains('Тест').click()
  })

  it('should display a word and allow user to input translation', () => {
    cy.get('input').should('have.attr', 'placeholder', 'Введіть переклад українською')
    cy.get('input').type('Кіт')
    cy.get('button').contains('Перевірити').click()
    cy.contains('Правильно!').should('be.visible')
  })

  it('should show incorrect feedback for wrong translation', () => {
    cy.get('input').type('wrong')
    cy.get('button').contains('Перевірити').click()
    cy.contains('Неправильно! Правильна відповідь:').should('be.visible')
  })

  it('should navigate back to home on logo click', () => {
    cy.get('h1').contains('VocabHero').click()
    cy.contains('Виберіть режим гри').should('be.visible')
  })
})
