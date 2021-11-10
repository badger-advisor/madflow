import { isNode, isEdge, removeElements, addEdge } from 'react-flow-renderer';
import {
  getCourse,
  updateUserFlowElements,
  updateUserFlow,
  createUserFlow,
  deleteUser,
  fetchCurrentUser,
  signUp,
  signIn,
  getAllUserFlows,
  fetchAllCourses,
  removeFlow,
  getFlowInfo
} from './api';

import createEdge from './components/GraphPage/customEdges/createEdge';

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

/**
 * Removes a user from the database
 * @param {String} userGoogleId The google id associated with a user
 */
export const deleteUserObj = async userGoogleId => {
  await deleteUser(userGoogleId);
};
/**
 * Function to call each time to save the current state of the flow's elements
 * @param {String} flowID the autogenerated id from mongodb for each flow
 * @param {[Object]} elements Elements array containing all nodes and edges
 */
export const autosave = async (flowID, elements) => {
  // TODO: need to check valid input
  await updateUserFlowElements(flowID, elements);
};

/**
 * Adds edges between a course node and its prereqs (if they exist in the graph)
 * @param {object} node A node that represents a course in the graph
 * @param {[Object]} elements Elements array containing all nodes and edges
 */
export const connectPrereqs = (node, elements) => {
  //TODO: create different edge types depending on the status of the node
  //Get id and prereqs for the course that is being added
  const { id: targetId, type: targetType, data: { prerequisites: prereqs } } = node;
  // console.log('new node');
  // console.log(`${targetId}: ${prereqs}`);

  //Naive approach: Checks if incoming node's prereqs are already in the flow
  elements.map(sourceNode => {
    // checks if any existing node should point to the new node
    if (prereqs.includes(sourceNode.id)) {
      const newEdge = createEdge(sourceNode.id, sourceNode.type, targetId, targetType);
      elements.push(newEdge); //Add the new edge to the list
    }

    // checks if the new node should connect to the existing nodes
    if (sourceNode.data && sourceNode.data.prerequisites.includes(targetId)) {
      const newEdge = createEdge(targetId, targetType, sourceNode.id, sourceNode.type);
      elements.push(newEdge); //Add the new edge to the list
    }
  });
  return elements;
};

// export const getUserFlowNames = async(googleId) => {
//   await getAllUserFlows(googleId);
// }

/**
 * Determines if a node is able to be taken based on the types of its prereqs in the graph
 * @param {object} node A node that represents a course in the graph
 * @param {[Object]} elements Elements array containing all nodes and edges
 */
export const determineType = (course, elements) => {
  //Todo: find a solution to accomodate optional prereqs.
  //This solution assumes that a course cannot be taken until all its prereqs are taken
  const prereqs = course['data'].prerequisites;

  //If a single prereq is not fulfilled, the course cannot be taken
  let type = 'courseCanTake';
  if (elements) {
    elements.map(el => {
      if (prereqs.includes(el.id) && el.type !== 'courseTaken') {
        console.log('Cannot take the course');
        type = 'courseCannotTake';
      }
    });
  }
  return type;
};

/**
 * Function to call to update a flows information
 * @param {String} flowID the autogenerated id from mongodb for each flow
 * @param {{Object}} changes in the json form (name and major keys)
 */
export const updateFlow = async (flowID, changes) => {
  await updateUserFlow(flowID, changes);
};

/**
 * Function to call to create new flow
 * @param {String} userGoogleId user's googleId
 * @param {String} name name of the flow
 * @param {String} major major of the flow
 */
export const createNewFlow = async (googleId, name, major) => {
  await createUserFlow(googleId, name, major);
};

export const deleteFlow = async flowID => {
  await removeFlow(flowID);
};

/**
 * Function to call when trying to find current user data
 * @param {String} userID the google ID
 */
export const currentUser = async userID => {
  // TODO: need to check valid input
  return await fetchCurrentUser(userID);
};

export const getUserFlowNames = async userID => {
  // TODO: need to check valid input
  return await getAllUserFlows(userID);
};

/**
 * Function to call when signing a user up
 * @param {[Object]} profileObject object of user information
 */
export const signup = async profileObject => {
  // TODO: need to check valid input
  await signUp(profileObject);
};

/**
 * Function to call when signing up
 * @param {String} userID the google ID
 */
export const signin = async userID => {
  // TODO: need to check valid input
  await signIn(userID);
};

/**
 * Gets a list of courses with revalent information for displaying as search results
 * @returns List of course information
 */
export const getAllCourses = async () => {
  // TODO: need to check valid input
  const allCourses = await fetchAllCourses();
  const listing = allCourses.map(course => ({
    label      : course.courseNumber,
    courseInfo : course.info.description,
    courseID   : course._id
  }));
  return listing;
};

/**
 * For getting the elements array of any given flow
 * @param {String} flowID Id of Flow
 * @returns The elements array associated with a Flow
 */
export const getFlowElements = async flowID => {
  const elements = (await getFlowInfo(flowID)).data.elements;
  // console.log(elements);
  return elements;
};

/**
 *! Experimenting with debounce function for limiting autosave occurances
 * NOT working
 * @param {Function} func
 * @param {number} timeout timeout in miliseconds
 */
export const debounce = (func, timeout = 300) => {
  console.log(func);
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
