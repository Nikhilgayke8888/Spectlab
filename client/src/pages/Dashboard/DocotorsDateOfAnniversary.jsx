import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from '@mui/material';

const DocotorsDateOfAnniversary = () => {
  // Dummy data, replace it with your actual data
  const rows = [
    // Your data here
  ];

  // Dummy columns, replace it with your actual column configuration
  const columns = [
    { field: 'srNo', headerName: 'Sr No.', flex: 1 },
    { field: 'doctorName', headerName: 'Doctor Name', flex: 1 },
    { field: 'mobile', headerName: 'Mobile', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'specialization', headerName: 'Specialization', flex: 1 },
    { field: 'city', headerName: 'City', flex: 1 },
    { field: 'area', headerName: 'Area', flex: 1 },
    { field: 'pinCode', headerName: 'Pin code', flex: 1 },
  ];

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
};

export default DocotorsDateOfAnniversary;
