import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/styles.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage, AuthPage } from '@/pages';
import { AuthProvider, ThemeProvider } from '@/context';
import { ProtectedRoute, GuestRoute } from '@/components';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <GuestRoute>
        <AuthPage />
      </GuestRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
