import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import NotesList from './components/Notes/NotesList';
// import { getToken } from './services/tokenService';
import { AuthProvider } from './context/authContext';
import ProtectedRoute from './services/ProtectedRoute';
import PublicRoute from './services/PublicRoute';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <NotesList />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  )

}

export default App;
