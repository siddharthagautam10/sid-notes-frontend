import React, { useEffect, useLayoutEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import NotesList from './components/Notes/NotesList';
import { getToken } from './services/tokenService';
import { AuthProvider } from './context/authContext';
import ProtectedRoute from './services/ProtectedRoute'

function App() {
  // const navigate = useNavigate();
  // const [isLogin, setIsLogin] = useState(false)

  // const GetToken = async () => {
  //   const token = await getToken();
  //   if (token) {
  //     setIsLogin(true)
  //   } else {
  //     navigate('/login')
  //     // window.location.href = '/login';
  //   }
  // }
  // useLayoutEffect(() => {
  //   GetToken()
  // }, [isLogin])


  // console.log('gdt', isLogin);


  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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


  // return (
  //   <Routes>
  //     <>
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/register" element={<Register />} />
  //     </>
  //     {isLogin && <Route path="/home" element={<NotesList />} />}

  //   </Routes>
  // );


}

export default App;
