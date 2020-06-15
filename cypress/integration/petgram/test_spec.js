/* global  describe, it, cy */

describe('Petgram', function () {
  it('The app is working', function () {
    cy.visit('/')
  })

  it('surf one the category page and we try to see pictures', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('can surf to home page with the navbar', function () {
    cy.visit('/pet/1')

    cy.get('nav a').first().click()
    cy.url().should('be', '/')
  })

  it('Users who are not registered will watch the register form when they go the Favs page', function () {
    cy.visit('/favs')

    cy.get('form').should('have.length', 2)
  })

})
