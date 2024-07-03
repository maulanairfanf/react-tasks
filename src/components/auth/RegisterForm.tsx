import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../features/auth/authSlice';
import { RootState } from '../../redux/store';
import { Alert, Button, Grid, TextField } from '@mui/material';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth); // Mengambil state auth dari root state

  const [formData, setFormData] = useState({
    name: 'test2',
    email: 'test2@gmail.com',
    password: 'password',
    password_confirmation: 'password',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register(formData));
  };

  return (
    <div>
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
            id="name"
            label="Name Address"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            color='secondary'
            variant="outlined"
            required
            fullWidth
            id="password"
            label="password"
            name="password"
            autoComplete="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            color='secondary'
            variant="outlined"
            required
            fullWidth
            id="password_confirmation"
            label="Password Confirmation"
            name="password_confirmation"
            autoComplete="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
            type="password"
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
        Register
      </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
