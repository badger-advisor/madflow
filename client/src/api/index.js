import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080' });

// User
const signIn = id =>
  axios({ method: 'post', url: `http://localhost:8080/user/signIn?id=${id}`, header: {} })
    .then(res => {
      const { user } = res.data;
      localStorage.setItem('google_id', id);
      return user;
    })
    .catch(error => {
      console.log(error);
      return '';
    });

const signUp = userObject =>
  axios({
    method : 'post',
    url    : `http://localhost:8080/user/signup?id=${userObject.googleId}&displayName=${userObject.name}&email=${userObject.email}&profilePicture=${userObject.imageUrl}`,
    header : {}
  })
    .then(res => {
      const { user } = res.data;
      localStorage.setItem('google_id', userObject.googleId);
      return user;
    })
    .catch(error => {
      console.log(error);
      return null;
    });

const currentUser = id =>
  axios({ method: 'post', url: `http://localhost:8080/user/signIn?id=${id}`, header: {} })
    .then(res => {
      const { user } = res.data;
      localStorage.setItem('google_id', id);
      return user;
    })
    .catch(error => {
      console.log(error);
      return '';
    });

const deleteUser = userID => API.delete(`/user/${userID}`);

// Flow
const getAllUserFlows = userID => API.get(`/flow/${userID}`);
const getFlowInfo = flowID => {
  axios({
    method : 'get',
    url    : 'http://localhost:8080/flow/getFlow',
    params : { id: flowID }
  })
    .then(res => {
      console.log(JSON.stringify(res.data));
      return '';
    })
    .catch(error => {
      console.log(error);
      return '';
    });
};
const removeFlow = flowID => {
  axios({
    method : 'delete',
    url    : 'http://localhost:8080/flow/removeFlow',
    params : { id: flowID }
  })
    .then(res => {
      console.log(JSON.stringify(res.data));
      return '';
    })
    .catch(error => {
      console.log(error);
      return '';
    });
};
const createNewFlow = (name, elements, userGoogleID, major) => {
  axios({
    method : 'post',
    url    : 'http://localhost:8080/flow/newFlow',
    params : { name: name, elements: elements, userGoogleID: userGoogleID, major: major }
  })
    .then(res => {
      console.log(JSON.stringify(res.data));
      return '';
    })
    .catch(error => {
      console.log(error);
      return '';
    });
};

const updateUserFlow = (flowID, updatedUserFlow) => {
  axios({
    method : 'post',
    url    : 'http://localhost:8080/flow/updateElements',
    params : { id: flowID, elements: updatedUserFlow }
  })
    .then(res => {
      console.log(JSON.stringify(res.data));
      return '';
    })
    .catch(error => {
      console.log(error);
      return '';
    });
};

const getPrefilledFlow = majorID => API.get(`/flow/prefilled/${majorID}`);

// Course
const getCourse = courseNumber => API.get(`/course/${courseNumber}`);

export {
  signIn,
  signUp,
  currentUser,
  deleteUser,
  getAllUserFlows,
  getFlowInfo,
  removeFlow,
  createNewFlow,
  updateUserFlow,
  getPrefilledFlow,
  getCourse
};
