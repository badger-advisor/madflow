import axios from 'axios';

// Initialize axios
let API;

// Serve app if in production
API =
  process.env.NODE_ENV === 'production'
    ? axios
    : axios.create({ baseURL: 'http://localhost:8080' });

/* ###################################### User ###################################### */
// TODO: Remove all flows associated with the user
const deleteUser = userGoogleID =>
  API.delete('/user/deleteUser', {
    googleId : userGoogleID
  }).then(res => {
    console.log(res);
  });

const signIn = async () => {
  await API.get('/auth/google');
};

/* ###################################### Flow ###################################### */
const getAllUserFlows = googleId =>
  API.get('/flow/getUserFlows', { params: { googleId } }).then(res => {
    const { flows } = res.data;
    return flows;
  });

const getFlowInfo = flowID => API.get('/flow/getFlow', { params: { flowID } });

const removeFlow = flowID =>
  API.delete('/flow/removeFlow/', { params: { id: flowID } })
    .then(res => res.data)
    .catch(error => console.log(error));

const createUserFlow = (googleId, name, major, elements) =>
  API.post(`/flow/newFlow`, {
    elements,
    googleId,
    name,
    major
  })
    .then(res => {
      console.log('insert success!');
      console.log(res);
    })
    .catch(error => console.log(error));

/**
 * Only for updating the elements array in the flow
 */
const updateUserFlowElements = (flowID, updatedUserFlow) =>
  API.post(`/flow/updateElements`, {
    id       : flowID,
    elements : updatedUserFlow
  }).then(res => {
    // console.log(JSON.stringify(res.data));
  });

/**
 * Only for updating the NAME and MAJOR of a flow
 */
const updateUserFlow = (flowID, updatedUserFlow) =>
  API.post(`/flow/update`, {
    id      : flowID,
    changes : updatedUserFlow
  }).then(res => {
    console.log(res);
  });

const getPrefilledFlow = majorID => API.get(`/flow/prefilled/${majorID}`);

/* ###################################### Course ###################################### */
const getCourse = courseNumber => API.get('/course/getCourse', { params: { courseNumber } });

const fetchAllCourses = () =>
  API.get(`/course/all`)
    .then(res => {
      const { courses } = res.data;
      return courses;
    })
    .catch(error => {
      console.log(error);
    });

export {
  signIn,
  deleteUser,
  getAllUserFlows,
  getFlowInfo,
  removeFlow,
  createUserFlow,
  updateUserFlowElements,
  getPrefilledFlow,
  getCourse,
  updateUserFlow,
  fetchAllCourses
};
