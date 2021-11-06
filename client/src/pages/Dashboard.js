import NavBar from '../components/NavBar/NavBar';
import FlowCardGrid from '../components/DashboardPage/FlowCardGrid';
import { currentUser, getAllUserFlows } from '../api/index';

import { Button, Typography, Box, alpha, AppBar, Drawer } from '@mui/material';

const Dashboard = () => {
  const currUser = async () => {
    const data = localStorage.getItem('google_id');
    const userID = await currentUser(data);
    console.log('current User:');
    console.log(userID);
  };

  const getFlows = async userID => {
    const allFlows = await getAllUserFlows(userID);
    console.log('user flows:');
    console.log(allFlows);
  };

  currUser();
  getFlows();

  return (
    <div>
      {/* <AppBar position='top' /> */}
      <NavBar />
      <FlowCardGrid />
    </div>
  );
};

export default Dashboard;
