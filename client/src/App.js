import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Landing, Dashboard, Profile, Graph } from './pages';
import ApiTests from './components/ApiTests';

const TempNav = () => {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/landing'>landing</Link>
      </li>
      <li>
        <Link to='/dashboard'>dashboard</Link>
      </li>
      <li>
        <Link to='/profile'>profile</Link>
      </li>
      <li>
        <Link to='/flow'>flow</Link>
      </li>
    </ul>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={TempNav} />
        <Route exact path='/landing' render={Landing} />
        <Route exact path='/dashboard'>
          <Dashboard />
        </Route>
        <Route exact path='/profile' render={Profile} />
        <Route exact path='/flow'>
          <Graph />
        </Route>
        <Route exact path='/test' render={ApiTests} />
      </Switch>
    </Router>
  );
};

export default App;
