import NavBar from '../components/NavBar/NavBar';
import FlowCardGrid from '../components/DashboardPage/FlowCardGrid';

import { Button, Typography, Box, alpha, AppBar, Drawer } from '@mui/material';

const Dashboard = () => {
  return (
    <div>
      {/* <AppBar position='top' /> */}
      <NavBar />
      <FlowCardGrid />
    </div>
  );
};

export default Dashboard;
