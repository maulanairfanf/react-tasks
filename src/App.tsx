// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import { AuthProvider } from './layouts/MiddlewareLayout';
import DefaultLayout from './layouts/DefaultLayout';
import AuthLayout from './layouts/AuthLayout';
import theme from './theme'; // Import tema yang telah dibuat
import { ThemeProvider } from '@emotion/react';

const App = () => {
  const publicRoutes = [
    { path: '/login', component: <LoginPage /> },
    { path: '/register', component: <RegisterPage /> },

  ];

  const privateRoutes = [
    { path: '/', component: <HomePage /> },
  ];
  return (
    <Router>
      <ThemeProvider theme={theme}> 
      <AuthProvider>
      <Routes>
        <Route element={<AuthLayout />}>
          {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={<PublicRoute />}>
              <Route path={route.path} element={route.component} />
            </Route>
          ))}
        </Route>
        <Route element={<DefaultLayout />}>
          {privateRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={<PrivateRoute />}>
              <Route path={route.path} element={route.component} />
            </Route>
          ))}
        </Route>
      </Routes>
      </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
