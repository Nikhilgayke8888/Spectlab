import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { getAllUsers, deleteUser } from '../../lib/api-users';
import MRLsearch from './MRLsearch';
import CustomSnackbar from '../../components/ui/SnackbarComponent';
import 'leaflet/dist/leaflet.css';
import MapComponent from '../../components/ui/MapComponent';
import { Grid } from '@mui/material';


export default function MRLTable({ onEdit }) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
const [snackbarMessage, setSnackbarMessage] = useState('');
const [showMap, setShowMap] = useState(false);
const [lat, setLat] = useState('');
const [lon, setLon] = useState('');


  const columns = [
    { field: 'mrusername', headerName: 'UserName' },
    { field: 'mrfname', headerName: 'First Name' },
    { field: 'mrlname', headerName: 'Last Name' },
    { field: 'mrcontactno', headerName: 'Contact No.', type: 'number' },
    { field: 'mremailid', headerName: 'Email Id', width: 200 },
    { field: 'mraddress', headerName: 'Address', width: 150 },
    {
      field: 'editButton',
      headerName: 'Edit',
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => handleEdit(params.row.mrid)}
        >
          Edit
        </Button>
      ),
    },
    {
      field: 'deleteButton',
      headerName: 'Delete',
      renderCell: (params) => (
        <Button
          variant="contained"
          size="small"
          onClick={() => handleDelete(params.row.id)}
        >
          Delete
        </Button>
      ),
    },
    {
      field: 'viewButton',
      headerName: 'View',
      renderCell: (params) => (
        <Button
          variant="contained"
          size="small"
          onClick={() => handleView(params.row.id)}
        >
          View
        </Button>
      ),
    },
  ];

  const handleEdit = (mrid) => {
    const rowData = rows.find((row) => row.mrid === mrid);
    onEdit(rowData);
    console.log("hii", rowData);
  };

  const handleView = () => {
    setLat(25.2230484)
    setLon(84.4995686)
  setShowMap(true)
  };

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await getAllUsers(controller);
        const jsonData = response.data.map((row) => ({
          id: row.mrid,  
          ...row,
        }));
        setRows(jsonData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);
  const handleDelete = async (mrid) => {
    try {
      await deleteUser(mrid);
      setRows((prevRows) => prevRows.filter((row) => row.id !== mrid));
      handleSnackbarOpen('User deleted successfully!', 'success');
    } catch (error) {
      console.error('Error deleting user:', error);
      handleSnackbarOpen('Error deleting user.', 'error');
    }
  };
  
  const handleSnackbarOpen = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };


  return (
    <>
      <Paper elevation={3} sx={{ padding: '5px' }}>
        <MRLsearch />
        <DataGrid
          density="compact"
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
        />
  
      </Paper>
      {showMap &&
        <Grid item sx={{margin:'10px',border:'1px solid black'}}>
      <MapComponent latitude={lat} longitude={lon}  />
      </Grid>
      }

      <CustomSnackbar
        open={snackbarOpen}
        message={snackbarMessage}
        onClose={handleSnackbarClose}
      />

    </>
  );
}
