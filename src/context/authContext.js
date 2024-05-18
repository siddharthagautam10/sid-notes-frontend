import React, { createContext, useContext, useState, useEffect } from 'react';
// import { getToken, destroyToken } from '../services/tokenService';

// Create the Auth Context
const AuthContext = createContext();

// AuthProvider component that will wrap the app or parts of the app that need authentication
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check local storage for a token on component mount to set the initial authentication state
  useEffect(() => {
    const token = localStorage.getItem('TOKEN_KEY');
    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  // Function to log in the user
  const login = (token) => {
    localStorage.setItem('TOKEN_KEY', token);
    setIsAuthenticated(true);
  };

  // Function to log out the user
  const logout = () => {
    localStorage.removeItem('TOKEN_KEY');
    // destroyToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
