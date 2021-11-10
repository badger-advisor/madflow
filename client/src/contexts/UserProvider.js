import { createContext, useState, useEffect } from 'react';
const context = createContext(null);

const UserProvider = ({ children }) => {
  const [ user, setUser ] = useState({});

  useEffect(async () => {
    try {
      const currentUser = await (await fetch('/user/current')).json();
      setUser(currentUser);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return <context.Provider value={user}>{children}</context.Provider>;
};

UserProvider.context = context;

export default UserProvider;
