import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = () => {
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated) || localStorage.getItem('token');

  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
