// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('https://staging.wtforex.exchange/')
    cy.contains('a', 'Learn React')

    cy.percySnapshot();
  })
})
