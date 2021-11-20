import * as React from 'react';
import { mount } from '@cypress/react';
import Searchbar from '../../src/components/GraphPage/Searchbar';
import { courseOptions } from '../fixtures/courseOptions';
import { dummyElements } from '../fixtures/dummyElements';

it('Tests searchbar options', () => {
  mount(<Searchbar courseOptions={courseOptions} elements={dummyElements} saveForUndo={null} />);
  cy.get('#searchbar').click();
  cy.focused().type('c');
  cy.wrap(courseOptions).each(option => {
    cy
      .contains(option.label)
      .should('be.visible')
      .and('have.class', 'MuiAutocomplete-option')
      .click();
    cy.get('#searchbar').should('have.value', option.label);
  });
});

it('Tests that the popup shows the correct title', () => {
  mount(<Searchbar courseOptions={courseOptions} elements={dummyElements} saveForUndo={null} />);
  cy.get('#searchbar').click();
  cy.focused().type('c');
  cy.wrap(courseOptions).each(option => {
    cy.contains(option.label).click();
    cy.contains(option.label).trigger('mouseover');
    cy.get('#popper').contains(option.label);
  });
});
