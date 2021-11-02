import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080' });

/*API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});*/

export const signIn = () => API.get('/auth/google', { }).then(console.log)
     .catch(console.error);

export const currentUser = () => API.get('/profile', formData).then(console.log)
     .catch(console.error);
