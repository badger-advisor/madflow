import {signIn} from '../api/authAPI';
import axios from 'axios';

const Dashboard = () => {
  

  const curUser = async () =>{
      const data = localStorage.getItem('google_id');
      const cur_user = await signIn(data);
      console.log('current User:');
      console.log(cur_user);
  }

  console.log(curUser());
  return <div />;
};

export default Dashboard;
