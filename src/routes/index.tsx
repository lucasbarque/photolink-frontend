import { useEffect } from 'react';

import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';

import { useAuth } from '@hooks/useAuth';

import { ConfigMyAccount } from '@pages/ConfigMyAccount';
import { ConfigSecurity } from '@pages/ConfigSecurity';
import { ForgotPassword } from '@pages/ForgotPassword';
import { Galleries } from '@pages/Galleries';
import { GalleriesEdit } from '@pages/GalleriesEdit';
import { Login } from '@pages/Login';
import { PasswordChange } from '@pages/PasswordChange';
import { Register } from '@pages/Register';
import { ResetPassword } from '@pages/ResetPassword';

export default function MainRoutes() {
  const { isAuthenticated } = useAuth();

  function ProtectedRoute() {
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
  }

  function CheckLoggedUser() {
    return isAuthenticated ? <Navigate to="/galleries" /> : <Outlet />;
  }

  useEffect(() => {
    isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
  }, [isAuthenticated]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<CheckLoggedUser />}>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/password-change" element={<PasswordChange />} />
        </Route>
        <Route path="/config-myaccount" element={<ConfigMyAccount />} />
        <Route path="/config-security" element={<ConfigSecurity />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/galleries" element={<Galleries />} />
          <Route path="/galleries/:id" element={<GalleriesEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
