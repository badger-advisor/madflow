/// <reference types="cypress" />

describe('Controls Testing', () => {
  before(() => {
    cy.visit('http://localhost:3000/flow/61947661d74b7307c7f19b96');
  });

  it('Adds a course node and verifies that it was added', () => {
    cy.get('#searchbar').click();
    cy.focused().type('c');
    cy.contains('COMP SCI 506').click();
    cy.contains('COMP SCI 506').trigger('mouseover');
    cy.get('#popper').contains('Not Taken').click();
    cy.get('.react-flow__renderer').get('.react-flow__node').contains('COMP SCI 506');
  });

  it('Adds a another course node, verifies that it was added, and checks for an edge', () => {
    cy.get('#searchbar').click();
    cy.focused().type('c');
    cy.contains('COMP SCI 400').click();
    cy.contains('COMP SCI 400').trigger('mouseover');
    cy.get('#popper').contains('Not Taken').click();
    cy.get('.react-flow__edge');
  });

  after(() => {
    cy.get('.react-flow__renderer');
    cy
      .get('.react-flow__node')
      .contains('COMP SCI 400')
      .dblclick()
      .get('#edit_node')
      .get('#remove_btn')
      .click();
    cy
      .get('.react-flow__node')
      .contains('COMP SCI 506')
      .dblclick()
      .get('#edit_node')
      .get('#remove_btn')
      .click();
  });
});
