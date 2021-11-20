import * as React from 'react';
import { mount } from '@cypress/react';
import Flow from '../../src/components/GraphPage/Flow';
import { dummyElements } from '../fixtures/dummyElements';

const getCourses = () => {
  let courses = [];
  dummyElements.map(element => {
    if (element.data !== undefined) {
      courses.push(element);
    }
  });
  return courses;
};

const getPrereqs = course => {
  let prereqs = null;
  dummyElements.map(element => {
    if (element.id === course) {
      prereqs = element.data['prerequisites'].join(', ');
    }
  });
  return prereqs;
};

const getLabels = () => {
  let labels = [];
  dummyElements.map(element => {
    if (element.data !== undefined) {
      labels.push(element.data['label']);
    }
  });
  return labels;
};

it('Double clicks all elements, verifies correct title', () => {
  mount(<Flow elements={dummyElements} setElements={null} saveForUndo={null} flowID={'test'} />);
  const labels = getLabels();
  cy.get('#test');
  cy.get('.react-flow__renderer');
  cy.wrap(labels).each(label => {
    cy
      .get('.react-flow__node')
      .contains(label)
      .dblclick()
      .get('#edit_node')
      .contains(label)
      .type('{esc}');
  });
});

it('Double clicks all elements, verifies correct prereqs', () => {
  mount(<Flow elements={dummyElements} setElements={null} saveForUndo={null} flowID={'test'} />);
  const courses = getCourses();
  cy.get('#test');
  cy.get('.react-flow__renderer');

  cy.wrap(courses).each(course => {
    let prereqs = getPrereqs(course.id);
    cy
      .get('.react-flow__node')
      .contains(course.data['label'])
      .dblclick()
      .get('#edit_node')
      .contains(prereqs)
      .type('{esc}');
  });
});

it('Double clicks all elements, verifies initial switch position', () => {
  mount(<Flow elements={dummyElements} setElements={null} saveForUndo={null} flowID={'test'} />);
  const courses = getCourses();
  cy.get('#test');
  cy.get('.react-flow__renderer');

  cy.wrap(courses).each(course => {
    cy
      .get('.react-flow__node')
      .contains(course.data['label'])
      .dblclick()
      .get('#edit_node')
      .get('#switch')
      .invoke('prop', 'checked')
      .then(state => {
        cy.log(`checkbox is ${state ? 'checked' : 'unchecked'}`);
        if (course.type === 'courseTaken') {
          cy.expect(state).to.equal(true);
        } else {
          cy.expect(state).to.equal(false);
        }
      })
      .get('#edit_node')
      .type('{esc}');
  });
});
