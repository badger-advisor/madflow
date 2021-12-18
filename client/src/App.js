import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Landing, Dashboard, Profile, Graph, GuestGraph } from './pages';
import ApiTests from './components/ApiTests';
import './app.css';
import UserProvider from './contexts/UserProvider';
import RequireAuth from './contexts/RequireAuth';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='landing' element={<Landing />} />

          <Route
            path='dashboard'
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path='profile'
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
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

export default App;
