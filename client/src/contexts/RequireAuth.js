import UserProvider from './UserProvider';
import { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const { loggedIn } = useContext(UserProvider.context);
  let location = useLocation();

  if (!loggedIn) {
    // Redirect them to the landing, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to='/' state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
