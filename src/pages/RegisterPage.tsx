
import { Box, Stack, Typography,Link } from '@mui/material';
import RegisterForm from '../components/auth/RegisterForm';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate()
  function handleRedirectLogin() {
    navigate('/login');
  }
  return (
    <Box 
      width={400}>
      <Typography  variant="h5" align="center" sx={{ marginBottom: "30px", color:"#fff" }}>
        Register To Make Your Tasks
      </Typography>
      <RegisterForm />
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
          have an account ?   
        </Typography>
        <Link 
          variant="body2"
          color="secondary"
          component="button"
          onClick={() => {
            handleRedirectLogin()
          }}>Login</Link>
        </Stack>
    </Box>
  );
};

export default LoginPage;
