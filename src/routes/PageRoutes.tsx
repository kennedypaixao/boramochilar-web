import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthManager from "manager/Auth/AuthManager";
import RequireAuth from './RequireAuth';

import Dashboard from 'pages/AuthPages/Dashboard';
import ManagementOffers from 'pages/AuthPages/ManagementOffers';
import Login from 'pages/Login';
import React from 'react';

const PageRoutes: React.FC = () => {

  return (
    <AuthManager>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Dashboard' element={
            <RequireAuth withSideMenu={true}>
              <Dashboard />
            </RequireAuth>
          } />
          <Route path='/Anuncios/Gerenciamento' element={
            <RequireAuth withSideMenu={true}>
              <ManagementOffers />
            </RequireAuth>
          } />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </AuthManager>
  );
};

export default PageRoutes;