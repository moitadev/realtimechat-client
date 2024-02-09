import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/styles.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage, AuthPage } from '@/pages';
import { AuthProvider } from '@/context';
import { ProtectedRoute } from '@/components';

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
    element: <AuthPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
