import * as React from 'react';
import { mount } from '@cypress/react';
import Flow from '../../src/components/GraphPage/Flow';
import { dummyElements } from '../fixtures/dummyElements';

const getPrereqs = course => {
  let prereqs = null;
  dummyElements.map(element => {
    if (element.id === course) {
      prereqs = element.data['prerequisites'].join(', ');
    }
  });
  return prereqs;
};

it('Double clicks all elements, verifies correct title', () => {
  mount(<Flow elements={dummyElements} setElements={null} saveForUndo={null} flowID={'test'} />);
  cy.get('#test');
  cy.get('.react-flow__renderer');
  cy
    .get('.react-flow__node')
    .contains('Welcome to MadFlow!')
    .dblclick()
    .get('#edit_node')
    .contains('Welcome to MadFlow!')
    .type('{esc}');
  cy
    .get('.react-flow__node')
    .contains('CS240')
    .dblclick()
    .get('#edit_node')
    .contains('CS240')
    .type('{esc}');
  cy
    .get('.react-flow__node')
    .contains('CS400')
    .dblclick()
    .get('#edit_node')
    .contains('CS400')
    .type('{esc}');
  cy
    .get('.react-flow__node')
    .contains('CS407')
    .dblclick()
    .get('#edit_node')
    .contains('CS407')
    .type('{esc}');
});

it('Double clicks all elements, verifies correct prereqs', () => {
  mount(<Flow elements={dummyElements} setElements={null} saveForUndo={null} flowID={'test'} />);
  cy.get('#test');
  cy.get('.react-flow__renderer');
  let prereqs = getPrereqs('welcome');

  cy
    .get('.react-flow__node')
    .contains('Welcome to MadFlow!')
    .dblclick()
    .get('#edit_node')
    .contains(prereqs)
    .type('{esc}');

  prereqs = getPrereqs('CS240');
  cy
    .get('.react-flow__node')
    .contains('CS240')
    .dblclick()
    .get('#edit_node')
    .contains(prereqs)
    .type('{esc}');

  prereqs = getPrereqs('CS400');
  cy
    .get('.react-flow__node')
    .contains('CS400')
    .dblclick()
    .get('#edit_node')
    .contains(prereqs)
    .type('{esc}');

  prereqs = getPrereqs('CS407');
  cy
    .get('.react-flow__node')
    .contains('CS407')
    .dblclick()
    .get('#edit_node')
    .contains(prereqs)
    .type('{esc}');
});
