import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import './LoginStyles.css'; 
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/authentication/actionCreator';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  
  const { isAuthenticated } = useSelector((state) => {
    return {      
      isAuthenticated: state.auth.login,
    };
  });

  const handleLogin = async () => {
    dispatch(login({username, password}));
  };

  useEffect(() => {
    if(isAuthenticated){      
      navigate('/Dashboard');
    }
  }, [isAuthenticated, navigate]);  

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
