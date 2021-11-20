/// <reference types="cypress" />

describe('Controls Testing', () => {
  before(() => {
    cy.visit('http://localhost:3000/flow/61947661d74b7307c7f19b96');
  });

  it('Visit the dev page', () => {
    cy.visit('http://localhost:3000/flow/61947661d74b7307c7f19b96');
  });
});
