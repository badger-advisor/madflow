/// <reference types="cypress" />

describe('Controls Testing', () => {
  before(() => {
    cy.visit('http://localhost:3000/flow/61b8e5c577237293807d3b04');
  });

  it('Adds a course node and verifies that it was added', () => {
    cy.get('#searchbar').click();
    cy.focused().type('506');
    cy.contains('COMP SCI 506').click();
    cy.contains('COMP SCI 506').trigger('mouseover');
    cy.get('#popper').contains('Not Taken').click();
    cy.get('.react-flow__renderer').get('.react-flow__node').contains('COMP SCI 506');
  });

  it('Adds a another course node, verifies that it was added, and checks for an edge', () => {
    cy.get('#searchbar').click();
    cy.focused().type('400');
    cy.contains('COMP SCI 400').click();
    cy.contains('COMP SCI 400').trigger('mouseover');
    cy.get('#popper').contains('Not Taken').click();
    cy.get('.react-flow__edge');
  });

  it('Autogenerates the prerequisites for a course', () => {
    cy
      .get('.react-flow__renderer')
      .get('.react-flow__node')
      .contains('COMP SCI 506')
      .dblclick()
      .get('#edit_node')
      .get('#gen_prereq')
      .click();
    cy.get('.react-flow__controls-fitview').click();
    cy.get('.react-flow__controls-zoomout').click();
    cy.get('.react-flow__controls-zoomout').click();
    cy.get('.react-flow__controls-zoomout').click();
    cy.get('.react-flow__controls-zoomout').click();
    cy.wait(2000);
  });

  after(() => {
    cy
      .get('.react-flow__renderer')
      .get('.react-flow__node')
      .contains('COMP SCI 400')
      .dblclick()
      .get('#edit_node')
      .get('#remove_btn')
      .click();

    cy
      .get('.react-flow__renderer')
      .get('.react-flow__node')
      .contains('COMP SCI 506')
      .dblclick()
      .get('#edit_node')
      .get('#remove_btn')
      .click();
    cy
      .get('.react-flow__renderer')
      .get('.react-flow__node')
      .contains('COMP SCI 407')
      .dblclick()
      .get('#edit_node')
      .get('#remove_btn')
      .click();
    cy
      .get('.react-flow__renderer')
      .get('.react-flow__node')
      .contains('COMP SCI 552')
      .dblclick()
      .get('#edit_node')
      .get('#remove_btn')
      .click();
  });
});

describe('Landing Page Testing', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('Finds the guest button', () => {
    cy.get('#guest_btn');
  });

  it('Finds the Google button', () => {
    cy.get('#google_btn');
  });

  it('Finds the panel flow', () => {
    cy.get('#panel_flow');
  });
});

describe('Guest Page Testing', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('Navigates to the guest page', () => {
    cy.get('#guest_btn').click();
  });

  it('Adds a course node and verifies that it was added', () => {
    cy.get('#searchbar').click();
    cy.focused().type('506');
    cy.contains('COMP SCI 506').click();
    cy.contains('COMP SCI 506').trigger('mouseover');
    cy.get('#popper').contains('Not Taken').click();
    cy.get('.react-flow__controls-fitview').click();
    cy.get('.react-flow__renderer').get('.react-flow__node').contains('COMP SCI 506');
  });

  it('Adds a another course node, verifies that it was added, and checks for an edge', () => {
    cy.get('#searchbar').click();
    cy.focused().type('400');
    cy.contains('COMP SCI 400').click();
    cy.contains('COMP SCI 400').trigger('mouseover');
    cy.get('#popper').contains('Not Taken').click();
    cy.get('.react-flow__edge');
  });

  it('Autogenerates the prerequisites for a course', () => {
    cy
      .get('.react-flow__renderer')
      .get('.react-flow__node')
      .contains('COMP SCI 506')
      .dblclick()
      .get('#edit_node')
      .get('#gen_prereq')
      .click();

    cy.get('.react-flow__controls-zoomout').click();
    cy.get('.react-flow__controls-zoomout').click();
    cy.get('.react-flow__controls-zoomout').click();
    cy.get('.react-flow__controls-zoomout').click();
    cy.wait(2000);
  });

  after(() => {
    cy
      .get('.react-flow__renderer')
      .get('.react-flow__node')
      .contains('COMP SCI 400')
      .dblclick()
      .get('#edit_node')
      .get('#remove_btn')
      .click();

    cy
      .get('.react-flow__renderer')
      .get('.react-flow__node')
      .contains('COMP SCI 506')
      .dblclick()
      .get('#edit_node')
      .get('#remove_btn')
      .click();
    cy
      .get('.react-flow__renderer')
      .get('.react-flow__node')
      .contains('COMP SCI 407')
      .dblclick()
      .get('#edit_node')
      .get('#remove_btn')
      .click();
    cy
      .get('.react-flow__renderer')
      .get('.react-flow__node')
      .contains('COMP SCI 552')
      .dblclick()
      .get('#edit_node')
      .get('#remove_btn')
      .click();
  });
});

describe('Dashboard Page Testing', () => {
  before(() => {
    cy.visit('http://localhost:3000/dashboard');
  });

  it('Finds the logo icon', () => {
    cy.get('#logo');
  });

  it('Finds the avatar icon', () => {
    cy.get('#avatar');
  });

  it('Finds the new flow button', () => {
    cy.get('#new_flow').click();
  });

  it('Types a flow name', () => {
    cy.focused().type('test');
  });

  it('Cancels out of the dialog', () => {
    cy.get('#cancel_btn').click();
  });
});
