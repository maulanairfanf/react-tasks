import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store'; 

const PublicRoute = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated) || localStorage.getItem('token');

  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
