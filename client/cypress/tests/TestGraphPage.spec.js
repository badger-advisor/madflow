import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { mount } from '@cypress/react';
import { Landing, Dashboard, Profile, Graph } from '../../src/pages';
import ApiTests from '../../src/components/ApiTests';
import '../../src/app.css';
import { useState, useEffect, useContext } from 'react';
import UserProvider from '../../src/contexts/UserProvider';

const TempNav = () => {
  const { user, loggedIn } = useContext(UserProvider.context);

  return (
    <div>
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
          <a href='/auth/logout'>Logout</a>
        </li>
      </ul>
      {loggedIn ? <p>Currently logged in as {user.name}</p> : <p>Go log in</p>}
    </div>
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
    <UserProvider>
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
    </UserProvider>
  );
};

it('loads graph page', () => {
  mount(<App />);
  cy.request('/');
});
