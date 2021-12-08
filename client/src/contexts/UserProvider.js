import { createContext, useState, useEffect } from 'react';
const context = createContext(null);

const UserProvider = ({ children }) => {
  const [ user, setUser ] = useState({});
  const [ loggedIn, setLoggedIn ] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await (await fetch('/user/current')).json();
        setUser(currentUser);
        setLoggedIn(true);
      } catch (e) {
        console.error(e);
      }
    };

    fetchUser();
  }, []);

  return <context.Provider value={{ user, loggedIn }}>{children}</context.Provider>;
};

UserProvider.context = context;

export default UserProvider;
