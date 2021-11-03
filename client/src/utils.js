import { isNode, isEdge, removeElements, addEdge } from 'react-flow-renderer';
import { getCourse } from './api';

class Exception {
  /**
   * Custom exception class
   * @param {String} name Error to throw
   * @param {String} message Extra info to return
   */
  constructor(name, message = '') {
    this.name = name;
    this.message = message;
  }
}

/**
 * Genereates a Node from raw course data
 * @param {Object} courseData The exact course object retrieved from the DB
 * @throws InvalidCourseNum
 * @returns a Node object ready to be inserted to the Flow
 */
export const generateNode = async (courseNum, options) => {
  const courseData = (await getCourse(courseNum)).data;
  if (!courseData) {
    throw new Exception('InvalidCourseNum', courseNum);
  }

  const { info, courseNumber, prerequisites } = courseData;

  return {
    id       : courseNumber,
    position : { x: 0, y: 0 },
    type     : options.type,
    data     : { label: courseNumber, prerequisites, ...info }
  };
};
