import NavBar from '../components/NavBar/NavBar';
import FlowCardGrid from '../components/DashboardPage/FlowCardGrid';
import {currentUser} from '../api/index';

import { Button, Typography, Box, alpha, AppBar, Drawer } from '@mui/material';

const Dashboard = () => {

  const curUser = async () =>{
      const data = localStorage.getItem('google_id');
      const cur_user = await currentUser(data);
      console.log('current User:');
      console.log(cur_user);
  }

  curUser();

  return (
    <div>
      {/* <AppBar position='top' /> */}
      <NavBar />
      <FlowCardGrid />
    </div>
  );
};

export default Dashboard;
