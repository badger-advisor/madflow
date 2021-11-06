// server
import { currentUser, getUserFlowNames } from '../utils.js';

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

  // const getFlows = async userID => {
  //   const allFlows = await getAllUserFlows(userID);
  //   console.log('user flows:');
  //   console.log(allFlows);
  //   return allFlows;
  // };

  //currUser();
  userID = 0; // TODO: connect backend to get actual userID

  userFlows = getUserFlowNames(userID);

  return (
    <div>
      <NavBar />
      <FlowCardGrid flows={userFlows} />
    </div>
  );
};

export default Dashboard;
