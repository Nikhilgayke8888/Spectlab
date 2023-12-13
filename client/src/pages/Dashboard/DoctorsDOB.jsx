import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from '@mui/material';

const columns = [
  { field: 'doctorName', headerName: 'Doctor Name', width: 200 },
  { field: 'mobile', headerName: 'Mobile', width: 150 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'specialization', headerName: 'Specialization', width: 200 },
  { field: 'city', headerName: 'City', width: 150 },
  { field: 'area', headerName: 'Area', width: 150 },
  { field: 'pinCode', headerName: 'Pin code', width: 120 },
];

const rows = [
  { id: 1, doctorName: 'Dr. John Doe', mobile: '1234567890', email: 'john.doe@example.com', specialization: 'Cardiologist', city: 'New York', area: 'Downtown', pinCode: '10001' },

];

export default function DoctorsDOB() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <Paper elevation={3} style={{ width: '80%', padding: 20 }}>
        <DataGrid
        density='compact'
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
        />
      </Paper>
    </div>
  );
}
