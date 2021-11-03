import axios from 'axios';

const API = axios.create({ baseURL : 'http://localhost:8080' });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem('profile')) {
//     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//   }
//   return req;
// }); // ???

// User
const signIn = formData => API.post('/user/signin', formData);
const signUp = formData => API.post('/user/signup', formData);
const deleteUser = userID => API.delete(`/user/${userID}`);

// Flow
const getAllUserFlows = userID => API.get(`/flow/${userID}`);
const getUserFlow = (userID, flowID) => API.get(`/flow/${userID}/${flowID}`);
const deleteUserFlow = (userID, flowID) => API.delete(`/flow/${userID}/${flowID}`);
const createUserFlow = (userID, flowID, flow) => API.post(`/flow/${userID}/${flowID}`, flow);
const updateUserFlow = (userID, flowID, updatedUserFlow) => {
  API.patch(`/flow/${userID}/${flowID}`, updatedUserFlow);
};
const getPrefilledFlow = majorID => API.get(`/flow/prefilled/${majorID}`);

// Course
const getCourse = courseNumber => API.get(`/course/${courseNumber}`);

export {
  signIn,
  signUp,
  deleteUser,
  getAllUserFlows,
  getUserFlow,
  deleteUserFlow,
  createUserFlow,
  updateUserFlow,
  getPrefilledFlow,
  getCourse
};
