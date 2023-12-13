import React from 'react';
import Grid from '@mui/material/Grid';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleDoctorsVisits = () => {
     navigate('/visit'); 
  };
  const handleDoctorsDOB = () => {
    navigate('/DoctorsDob'); 
 };
 const handleOldVisits = () => {
  navigate('/OldVisits'); 
};
const handleAnniversary = () => {
  navigate('/DocotorsDateOfAnniversary'); 
};
  return (
    <div className="dashboard-container">
      <Grid container spacing={5} className="grid-container">
        <Grid item xs={12} md={6}>
          <div className="dashboard-box box1" onClick={handleDoctorsVisits}>
            New Doctor Visits <br /><br />
            Click here for details
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="dashboard-box box2" onClick={handleDoctorsDOB}>
            Total Doctor Date of Birth <br /><br />
            Click here for details
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="dashboard-box box3" onClick={handleOldVisits}>
            Old Doctor Visit <br /><br />
            Click here for details
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="dashboard-box box4" onClick={handleAnniversary}>
            Total Doctors Date Of Anniversary <br /><br />
            Click here for details
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
