import * as React from 'react';
import { mount } from '@cypress/react';
import Searchbar from '../../src/components/GraphPage/Searchbar';
import { courseOptions } from '../fixtures/courseOptions';
import { dummyElements } from '../fixtures/dummyElements';

it('Test searchbar options', () => {
  mount(<Searchbar courseOptions={courseOptions} elements={dummyElements} saveForUndo={null} />);
  cy.log(courseOptions);
  cy.get('#searchbar').click();
  cy.focused().type('c');
  cy.contains('CS200').should('be.visible');
  cy.contains('CS300').should('be.visible');
  cy.contains('CS400').should('be.visible');
  cy.contains('CS506').should('be.visible').and('have.class', 'MuiAutocomplete-option').click();
  cy.get('#searchbar').should('have.value', 'CS506');
});
