import { Button, Stack, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

const HomePage = () => {
  const dispatch = useDispatch();

  function handleLogout () {
    dispatch(logout());

  }

  return (
    <Stack 
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}>
      <Typography>Welcome to the home page!</Typography>
      <Button variant="outlined" color='secondary' onClick={() => handleLogout()}>Logout</Button>
    </Stack>
  );
};

export default HomePage;
