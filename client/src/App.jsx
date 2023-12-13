import React, { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import CustomRoutes from './routes/Routes';
import Login from './components/Login/login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoutes';
import { APP_BASE_PATH } from './lib/api-base-paths';


function App() {
  const [isAuthenticated, setAuthenticated] = useState(Boolean(localStorage.getItem('login')));

  const storage = localStorage.getItem('token');
  const token = storage && storage.split('; ').find(row => row.startsWith('token='));

  useEffect(() => {
    if (token) {
      localStorage.setItem('login', true);
      setAuthenticated(true);
    } else {
      localStorage.removeItem('login');
      setAuthenticated(false);
    }
  }, [token]);

  return (
    <Router basename='/'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Navbar />
              <CustomRoutes />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
