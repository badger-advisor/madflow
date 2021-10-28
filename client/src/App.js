import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Landing, Dashboard, Profile, Graph } from './pages';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/landing' render={Landing} />
        <Route exact path='/dashboard' render={Dashboard} />
        <Route exact path='/profile' render={Profile} />
        <Route exact path='/flow' render={Graph} />
        <Route exact path='/test' render={ApiTests} />
      </Switch>
    </Router>
  );
};

export default App;
