import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ForgotPassword } from '@pages/ForgotPassword';
import { Galleries } from '@pages/Galleries';
import { GalleriesEdit } from '@pages/GalleriesEdit';
import { Login } from '@pages/Login';
import { PasswordChange } from '@pages/PasswordChange';
import { Register } from '@pages/Register';

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-change" element={<PasswordChange />} />
        <Route path="/galleries" element={<Galleries />} />
        <Route path="/galleries/:id" element={<GalleriesEdit />} />
      </Routes>
    </BrowserRouter>
  );
}
