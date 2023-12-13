import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import CustomRoutes from './routes/Routes';
import Login from './components/Login/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoutes';
import { useSelector } from 'react-redux';

function App() {
  const { isAuthenticated } = useSelector((state) => {
    return {      
      isAuthenticated: state.auth.login,
    };
  });
  
  
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
