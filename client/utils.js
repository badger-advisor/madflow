import { isNode, isEdge, removeElements, addEdge } from 'react-flow-renderer';

/**
 * Genereates a Node from raw course data
 * @param {*} courseData The exact course object retrieved from the DB
 * @returns a Node object ready to be inserted to the Flow
 */
export const generateNode = courseData => {
  const { info, courseNumber, prerequisites } = courseData;

  return {
    id       : courseNumber,
    position : { x: 0, y: 0 },
    type     : 'course',
    data     : { label: courseNumber, prerequisites, ...info }
  };
};
