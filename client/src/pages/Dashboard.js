// server
import { currentuser } from '../utils';
// components
import NavBar from '../components/NavBar/NavBar';
import FlowCardGrid from '../components/DashboardPage/FlowCardGrid';
import NewFlow from '../components/DashboardPage/NewFlow';

const Dashboard = () => {
  const curUser = async () => {
    const data = localStorage.getItem('google_id');
    const cur_user = currentuser(data);
    console.log('current User:');
    console.log(cur_user);
  };

  curUser();

  return (
    <div>
      <NavBar />
      <FlowCardGrid />
    </div>
  );
};

export default Dashboard;
