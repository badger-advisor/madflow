import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
      <Routes>
        <Route path='/' element={<TempNav />} />
        <Route path='landing' element={<Landing />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='profile' element={<Profile />} />
        <Route path='flow' element={<Graph />}>
          <Route path=':flowID' element={<Graph />} />
        </Route>
        <Route path='test' element={<ApiTests />} />
      </Routes>
    </Router>
  );
};

export default App;
