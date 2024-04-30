import { useState, useEffect, useContext, createContext } from 'react';
import { auth } from './index';

const authContext = createContext();

// This hook provides an easy way to access user data throughout your app
export function useAuth() {
  return useContext(authContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Refresh the user's auth token whenever their custom claims change
  const refreshUserToken = () => {
    auth.currentUser.getIdToken(true).then((token) => {
      const claims = auth.currentUser.getIdTokenResult().claims;
      setUser({ ...auth.currentUser, token, customClaims: claims });
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged((user) => {
      if (user) {
        refreshUserToken();
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider value={{ user, refreshUserToken }}>
      {children}
    </authContext.Provider>
  );
}
