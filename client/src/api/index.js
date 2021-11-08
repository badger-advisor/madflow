import axios from 'axios';

// Initialize axios
const API = axios.create({ baseURL: 'http://localhost:8080' });

/* ###################################### User ###################################### */
const signIn = id =>
  API.post(`/user/signIn`, {
    id : id
  })
    .then(res => {
      const { user } = res.data;
      localStorage.setItem('google_id', id);
      return user;
    })
    .catch(error => console.log(error));

const signUp = userObject =>
  API.post(`/user/signup`, {
    id             : userObject.googleId,
    displayName    : userObject.name,
    email          : userObject.email,
    profilePicture : userObject.imageUrl
  })
    .then(res => {
      const { user } = res.data;
      localStorage.setItem('google_id', userObject.googleId);
      return user;
    })
    .catch(error => console.log(error));

const fetchCurrentUser = id =>
  API.post(`/user/signIn`, { id })
    .then(res => {
      const { user } = res.data;
      localStorage.setItem('google_id', id);
      return user;
    })
    .catch(error => console.log(error));

// TODO: Remove all flows assiciated with the user
const deleteUser = userGoogleID =>
  API.delete('/user/deleteUser', {
    googleId : userGoogleID
  }).then(res => {
    console.log(res);
  });

/* ###################################### Flow ###################################### */
const getAllUserFlows = googleId =>
  API.get('/flow/getUserFlows', { params: { googleId } }).then(res => {
    const { flows } = res.data;
    return flows;
  });

const getFlowInfo = flowID => API.get('/flow/getFlow', { id: flowID });

const removeFlow = flowID =>
  API.delete('/flow/removeFlow/', { id: flowID })
    .then(res => console.log(JSON.stringify(res.data)))
    .catch(error => console.log(error));

const getUserFlow = (userID, flowID) => API.get(`/flow/${userID}/${flowID}`);

const deleteUserFlow = (userID, flowID) => API.delete(`/flow/${userID}/${flowID}`);

const createUserFlow = (userGoogleID, flowName, major) =>
  API.post(`/flow/newFlow`, {
    elements     : [],
    userGoogleID,
    flowName,
    major
  })
    .then(res => console.log(res))
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

const getAllCourses = () =>
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
  signUp,
  fetchCurrentUser,
  deleteUser,
  getAllUserFlows,
  getFlowInfo,
  removeFlow,
  createUserFlow,
  updateUserFlowElements,
  getPrefilledFlow,
  getCourse,
  updateUserFlow,
  getUserFlow,
  deleteUserFlow,
  getAllCourses
};
