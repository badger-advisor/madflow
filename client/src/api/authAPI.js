import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080' });

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

export const currentUser = () => axios({method: 'post', url: `http://localhost:8080/user/signIn?id=${id}`, header:{}}).then((res) =>{
        const { user } = res.data;
        localStorage.setItem("google_id", id);
        return(user);
    })
     .catch((error)=>{
        console.log(error);
        return('');
     });