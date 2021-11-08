// server
import { currentUser } from '../utils.js';

// components
import NavBar from '../components/NavBar/NavBar';
import FlowCardGrid from '../components/DashboardPage/FlowCardGrid';

const Dashboard = () => {
  // const currUser = async () => {
  //   const data = localStorage.getItem('google_id');
  //   const userID = await currentUser(data);
  //   console.log('current User:');
  //   console.log(userID);
  // };

  //currUser();

  const userID = 'tempgenelee'; // TODO: connect backend to get actual userID

  return (
    <div>
      <NavBar userID={userID} />
      <FlowCardGrid userID={userID} />
    </div>
  );
};

export default Dashboard;
