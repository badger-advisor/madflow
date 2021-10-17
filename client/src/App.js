import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import { Landing, Dashboard, Profile, Graph } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/landing' render={Landing} />
        <Route exact path='/dashboard' render={Dashboard} />
        <Route exact path='/profile' render={Profile} />
        <Route exact path='/flow' render={Graph} />
      </Switch>
    </Router>
  );
}

export default App;
