import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthManager from "../manager/Auth/AuthManager";
import RequireAuth from './RequireAuth';

import Dashboard from '../pages/AuthPages/Dashboard';
import ManagementOffers from '../pages/AuthPages/ManagementOffers';
import OfferDetail from '../pages/AuthPages/ManagementOffers/components/OfferDetail';
import Login from '../pages/Login';
import React from 'react';

const PageRoutes: React.FC = () => {

  return (
    <AuthManager>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Dashboard' element={
            <RequireAuth withSideMenu={true} title="Dashboard">
              <Dashboard />
            </RequireAuth>
          } />
          <Route path='/Anuncios/Gerenciamento' element={
            <RequireAuth withSideMenu={true} title="Gerenciamento">
              <ManagementOffers />
            </RequireAuth>
          } />

          <Route path='/Anuncios/Gerenciamento/Detalhe/:id' element={
            <RequireAuth withSideMenu={true} title="Anúncio">
              <OfferDetail />
            </RequireAuth>
          } />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </AuthManager>
  );
};

export default PageRoutes;