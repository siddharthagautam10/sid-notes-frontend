import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const PublicRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a spinner or any loading indicator
  }

  if (isAuthenticated) {
    return <Navigate to="/" />; // Redirect to dashboard or any other route
  }

  return children;
};

export default PublicRoute;
