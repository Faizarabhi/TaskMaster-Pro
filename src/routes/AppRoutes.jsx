import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../features/Home.jsx';
import Login from '../features/auth/Login.jsx';
import Register from '../features/auth/Register.jsx';
import Dashboard from '../features/dashboard/Dashboard.jsx';
import AuthLayout from '../layouts/AuthLayout.jsx';
import MainLayout from '../layouts/MainLayout.jsx';
import PrivateRoute from './PrivateRoute.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route
        element={
          <PrivateRoute>
            <MainLayout />
          </PrivateRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="/login" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
