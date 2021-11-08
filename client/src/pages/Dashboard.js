import React, { useState, useEffect } from 'react';

// server
import { currentUser, getUserFlowNames } from '../utils.js';

// components
import NavBar from '../components/NavBar/NavBar';
import FlowCardGrid from '../components/DashboardPage/FlowCardGrid';

const TEST_ID = 'tempgenelee'; // TODO: connect backend to get actual userID

const Dashboard = () => {
  // const currUser = async () => {
  //   const data = localStorage.getItem('google_id');
  //   const userID = await currentUser(data);
  //   console.log('current User:');
  //   console.log(userID);
  // };

  //currUser();

  const [ userFlows, setUserFlows ] = useState([]);
  const [ refresh, setRefresh ] = useState(false);

  useEffect(
    async () => {
      setUserFlows(await getUserFlowNames(TEST_ID));
    },
    [ refresh ]
  );

  return (
    <div>
      <NavBar userID={TEST_ID} refresh={refresh} setRefresh={setRefresh} />
      <FlowCardGrid
        userID={TEST_ID}
        userFlows={userFlows}
        refresh={refresh}
        setRefresh={setRefresh}
      />
    </div>
  );
};

export default Dashboard;
