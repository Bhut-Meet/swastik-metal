import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const authorizationToken = `swastik ${token}`;
  // const authorizationToken = ('meet', token);

  // const API = import.meta.env.VITE_BASE_URL;

  // const API = 'https://backend-swastik-metal.onrender.com;
  
  const API = 'http://localhost:5000';

  const storeTokenInLocalStorage = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem('token', serverToken);
  };

  let isLoggedIn = !!token; // if token exists in the local storage then it

  //user logout functiality
  const LogoutUser = () => {
    setToken('');
    return localStorage.removeItem('token');
  };

  // jwt authentication -to get current login user data
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API}/api/auth/user`, {
        method: 'GET',
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('user Data', data.userData);
        setUser(data.userData);
        setIsLoading(false);
      } else {
        toast.error('error fachig admin');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('error fatching user data');
    }
  };



  useEffect(() => {
    userAuthentication();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        storeTokenInLocalStorage,
        LogoutUser,
        authorizationToken,
        isLoading,
        API,
        userAuthentication,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//custom hook
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error('useAuth must be used within the AuthProvider');
  }
  return authContextValue;
};
