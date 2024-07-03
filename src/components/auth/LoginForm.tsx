import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/auth/authSlice';
import { RootState } from '../../redux/store';
import { Button, TextField, Grid, Alert } from '@mui/material';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState({
    email: 'maulana@gmail.com',
    password: 'password',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('click')
    dispatch(login(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            color='secondary'
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formData.email} 
            onChange={handleChange} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
          color='secondary'
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password} 
            onChange={handleChange}
          />
        </Grid>
      <Grid item xs={12}>
        {error && <Alert variant='filled' severity="error">{error}</Alert>}
      </Grid>
      </Grid>
      <Button 
        type="submit"
        fullWidth
        variant="contained"
        color="secondary"
        style={{ marginTop: '16px' }}
        disabled={loading}
      >
        Login 
      </Button>
      
    </form>
  );
};

export default LoginForm;
