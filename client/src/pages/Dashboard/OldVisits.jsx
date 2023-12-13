import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from '@mui/material';

export default function OldVisits() {
  // Sample data for demonstration
  const visitsData = [
    { id: 1, srNo: 1, doctorName: 'Dr. John Doe', mobile: '1234567890', email: 'john.doe@example.com', specialization: 'Cardiologist', city: 'Example City', area: 'Example Area', pinCode: '123456', mrName: 'Mr. Smith', feedback: 'Good experience' },
    // Add more data as needed
  ];

  const columns = [
    { field: 'srNo', headerName: 'Sr No.', flex: 1 },
    { field: 'doctorName', headerName: 'Doctor Name', flex: 1 },
    { field: 'mobile', headerName: 'Mobile', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'specialization', headerName: 'Specialization', flex: 1 },
    { field: 'city', headerName: 'City', flex: 1 },
    { field: 'area', headerName: 'Area', flex: 1 },
    { field: 'pinCode', headerName: 'Pin code', flex: 1 },
    { field: 'mrName', headerName: 'MR Name', flex: 1 },
    { field: 'feedback', headerName: 'Feedback', flex: 1 },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
           <Paper elevation={3} style={{ width: '80%', padding: 20 }}>
        <DataGrid
        rows={visitsData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
      />
               </Paper> 
    </div>
  );
}
