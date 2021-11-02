import {currentUser} from '../api/authAPI';
import axios from 'axios';

const Dashboard = () => {
  

  const curUser = async () =>{
      await fetch("http://localhost:8080/profile/")
      .then(res => console.log(res.json()))
      .then(
        (result) => {
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
           console.log(error);
        }
      )
  }

  console.log(curUser());
  return <div />;
};

export default Dashboard;
