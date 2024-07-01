import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('maulana@gmail.com');
  const [password, setPassword] = useState('password');
  const navigate = useNavigate();

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login(email, password));
    navigate('/');

  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="email">email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default FormLogin;
