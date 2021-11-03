import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080' });

/*API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});*/

export const axiosApiCall = (url, method, id ) => axios({
    method,
    url: `http://localhost:8080${url}?id=${id}`,
    header: {},
  });

export const signIn = (id) => axios({method: 'post', url: `http://localhost:8080/user/signIn?id=${id}`, header:{}}).then((res) =>{
        const { user } = res.data;
        localStorage.setItem("google_id", id);
        return(user);
    })
     .catch((error)=>{
        console.log(error);
        return('');
     });

export const signUp = (userObject) => axios({method: 'post', url: `http://localhost:8080/user/signup?id=${userObject.googleId}&displayName=${userObject.name}&email=${userObject.email}&profilePicture=${userObject.imageUrl}`, header:{}}).then((res) =>{
        const { user } = res.data;
        localStorage.setItem("google_id", userObject.googleId);
        return(user);
    })
     .catch((error)=>{
        console.log(error);
        return(null);
     });

export const currentUser = () => API.get('/profile', formData).then(console.log)
     .catch(console.error);
