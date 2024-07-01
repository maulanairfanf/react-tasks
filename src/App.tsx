// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { AuthProvider } from './layouts/MiddlewareLayout';

const App = () => {
  const publicRoutes = [
    { path: '/login', component: <LoginPage /> },
  ];

  const privateRoutes = [
    { path: '/', component: <HomePage /> },
  ];
  return (
    <Router>
      <AuthProvider>
      <Routes>
      {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<PublicRoute />}>
            <Route path={route.path} element={route.component} />
          </Route>
        ))}
        {privateRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<PrivateRoute />}>
            <Route path={route.path} element={route.component} />
          </Route>
        ))}
      </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
