import { useState, useEffect, useContext } from 'react';

// server
import { getUserFlowNames } from '../utils.js';

// components
import NavBar from '../components/NavBar/NavBar';
import FlowCardGrid from '../components/DashboardPage/FlowCardGrid';
import UserProvider from '../contexts/UserProvider';

const TEST_ID = 'tempgenelee';

const Dashboard = () => {
  const [ userFlows, setUserFlows ] = useState([]);
  const [ refresh, setRefresh ] = useState(false);
  const { user, loggedIn } = useContext(UserProvider.context);
  const USER_ID = user.googleId;

  useEffect(
    () => {
      const fetchFlows = async () => {
        const allFlows = await getUserFlowNames(USER_ID);
        setUserFlows(allFlows);
      };

      fetchFlows();
    },
    // User isn't set on first render, so no flows will be displayed
    // Adding it as a dependency forces it to refresh twice, so we have the user
    [ refresh, user ]
  );

  return (
    <div>
      <NavBar user={user} refresh={refresh} setRefresh={setRefresh} />
      <FlowCardGrid
        userID={USER_ID}
        userFlows={userFlows}
        refresh={refresh}
        setRefresh={setRefresh}
      />
    </div>
  );
};

export default Dashboard;
