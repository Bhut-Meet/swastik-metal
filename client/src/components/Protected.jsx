// Protected.jsx
// import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../store/auth';

export const Protected = () => {
  const { isLoggedIn } = useAuth(); // Access isLoggedIn from context

  return isLoggedIn ? <Outlet /> : <Navigate to={"/login"}/>;
};

