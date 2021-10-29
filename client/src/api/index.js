import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080' });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem('profile')) {
//     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//   }
//   return req;
// }); // ???

export const signIn = formData => API.post('/user/signin', formData);
export const signUp = formData => API.post('/user/signup', formData);

export const getAllUserFlows = userID => API.get(`/flow/${userID}`);
export const getUserFlow = (userID, flowID) => API.get(`/flow/${userID}/${flowID}`);
export const deleteUserFlow = (userID, flowID) => API.delete(`/flow/${userID}/${flowID}`);
export const createUserFlow = (userID, flowID, flow) => API.post(`/flow/${userID}/${flowID}`, flow);
export const updateUserFlow = (userID, flowID, updatedUserFlow) =>
  API.patch(`/flow/${userID}/${flowID}`, updatedUserFlow);
export const getPrefilledFlow = majorID => API.get(`/flow/prefilled/${majorID}`);

export const deleteUser = userID => API.delete(`/user/${userID}`);

export const getCourse = courseNumber => API.get(`/course/${courseNumber}`);
