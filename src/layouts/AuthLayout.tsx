
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <Container sx={{ display: 'flex', alignItems: "center", justifyContent: 'center', minHeight: '100vh' }}>
      <Outlet />
    </Container>
  );
};

export default AuthLayout;
