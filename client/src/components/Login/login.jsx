import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import './LoginStyles.css'; 
import { useNavigate } from 'react-router-dom';
import { loginEmployee } from '../../lib/api-login';
import { useDispatch } from 'react-redux';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await loginEmployee({ username, password });
  
      if (response.data.Status === 'Success') {
        const { token } = response.data;
  

        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);
  
   
        document.cookie = `token=${token}; expires=${expirationDate.toUTCString()}; path=/; Secure`;
  
     
        dispatch({ type: 'login' });
  
        console.log('Login successful. Token:', token);
        navigate('/Dashboard');
      } else {
        console.log('Login unsuccessful. Status:', response.data.Status);
      }
    } catch (error) {
      console.error('Login error:', error);
  
    }
  };
  

  return (
    <div className="login-container">
      <Paper elevation={5} style={{ borderRadius: "20px" }}>
        <Grid container spacing={2} style={{ padding: '10px' }}>     
          <Grid item xs={12}>
            <img
              src="/src/assets/logo.png"
              alt="Logo"
              className="logo"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Username"
              variant="outlined"
              margin="normal"
              fullWidth
              size="small"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              margin="normal"
              fullWidth
              size="small"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" size="small" onClick={handleLogin}>
              Login
            </Button>
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'right' }}>
            <img
              src="/src/assets/vspace-logo.jpg"
              alt="Additional Image"
              className="additional-image"
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
