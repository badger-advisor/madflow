import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
}); // ???

export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);

export const getAllUserFlows = (userID) => API.get(`/flows/${userID}`);
export const getUserFlow = (userID, flowID) => API.get(`/flows/${userID}/${flowID}`);
export const deleteUserFlow = (userID, flowID) => API.delete(`/flows/${userID}/${flowID}`);
export const createUserFlow = (userID, flowID, flow) =>
  API.post(`/flows/${userID}/${flowID}`, flow);
export const updateUserFlow = (userID, flowID, updatedUserFlow) =>
  API.patch(`/flows/${userID}/${flowID}`, updatedUserFlow);
export const getPrefilledFlow = (majorID) => API.get(`/flows/prefilled/${majorID}`);

export const deleteUser = (userID) => API.delete(`/users/${userID}`);

export const getCourse = (courseID) => API.get(`/courses/${courseID}`);
