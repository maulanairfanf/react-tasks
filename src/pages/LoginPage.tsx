
import { Box, Stack, Typography } from '@mui/material';
import LoginForm from '../components/auth/LoginForm';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate()
  function handleRedirectRegister() {
    navigate('/register');
  }
  return (
    <Box 
      width={400}>
      <Typography  variant="h5" align="center" sx={{ marginBottom: "30px", color:"#fff" }}>
        Login To Check Your Tasks
      </Typography>
      <LoginForm />
      <Stack 
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        marginTop="10px"
        spacing={1}
      >
        <Typography
          variant="body2"
          >
          don't have an account ?   
        </Typography>
        <Link 
          variant="body2"
          color="secondary"
          component="button"
          onClick={() => {
            handleRedirectRegister()
          }}>Register</Link>
        </Stack>
    </Box>
  );
};

export default LoginPage;
