import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Landing, Dashboard, Profile, Graph } from './pages';
import ApiTests from './components/ApiTests';
import './app.css';

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
      <li>
        <a href='/auth/google'>Login With Google</a>
      </li>
      <li>
        <a href='/api/logout'>Logout</a>
      </li>
    </ul>
  );
};

const GuestGraph = () => {
  return (
    <div>
      <h1>You're a guest</h1>
      <a href='/auth/google'>Go sign in</a>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TempNav />} />
        <Route path='landing' element={<Landing />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='profile' element={<Profile />} />
        <Route path='flow'>
          <Route path=':flowID' element={<Graph />} />
          <Route path='guest' element={<GuestGraph />} />
        </Route>
        <Route path='test' element={<ApiTests />} />
      </Routes>
    </Router>
  );
};

export default App;
