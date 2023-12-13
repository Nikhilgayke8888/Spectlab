import React, { useEffect, useState } from "react";
import { Grid, Button, TextField, Paper, MenuItem } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { DataGrid } from "@mui/x-data-grid";
import { getAllDoctors } from "../../lib/api-doctors";

const columns = [
  { field: "docName", headerName: "Doctor Name", width: 150 },
  { field: "mobno", headerName: "Mobile", width: 150 },
  { field: "emailid", headerName: "Email", width: 200 },
  { field: "specialization", headerName: "Specialization", width: 150 },
  { field: "hospitalName", headerName: "Hospital Name" },
  { field: "landlineno", headerName: "Landline No." },
  {
    field: "address",
    headerName: "Street Landmark Adddress1 Adddress2",
    width: 250,
  },
  { field: "state", headerName: "State" },
  { field: "city", headerName: "City" },
  { field: "area", headerName: "Area" },
  { field: "pincode", headerName: "Pin code" },
];

// ... (your imports)

export default function Doctors() {
  const [selectedValue, setSelectedValue] = useState("");
  const [autocompleteValue, setAutocompleteValue] = useState(null);
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await getAllDoctors(controller);

        const jsonData = response.data.map((row, index) => ({
          id: row.docid,
          srNo: index + 1,
          docName: `${row.docfname} ${row.doclname}`,
          mobno: row.mobno,
          emailid: row.emailid,
          hospitalName: row.hospitalname,
          landlineno: row.landlineno,
          address: `${row.street} ${row.landmark} ${row.address1} ${row.address2}`,
          specialization: row.specialization,
          city: row.city,
          area: row.area,
          pincode: row.pincode,
          ...row,
        }));

        const filteredRows = jsonData.filter((row) => {
          if (!selectedValue || !autocompleteValue) return true;

          const searchValue = row[selectedValue].toLowerCase();
          const filterValue = autocompleteValue.toLowerCase();

          return searchValue.includes(filterValue);
        });

        setRows(filteredRows);
      } catch (error) {
        console.error("Error fetching visits:", error);
      }
    };

    fetchData();

    const getOptions = () => {
      switch (selectedValue) {
        case "mobno":
          return rows.map((row) => row.mobno);
        case "pincode":
          return rows.map((row) => row.pincode);
        case "city":
          return rows.map((row) => row.city);
        case "specialization":
          return rows.map((row) => row.specialization);
        default:
          return [];
      }
    };

    setAutocompleteOptions(getOptions());

    return () => controller.abort();
  }, [selectedValue, autocompleteValue]);

  const handleButtonClick = () => {
    console.log("Selected Value:", selectedValue);
    console.log("Autocomplete Value:", autocompleteValue);
    console.log("Filtered Rows:", rows);
  };

  const handleClearButtonClick = () => {
    setSelectedValue("");
    setAutocompleteValue(null);
  };

  return (
    <div>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={2}>
          <TextField
            label="Select By"
            select
            size="small"
            fullWidth
            value={selectedValue}
            onChange={(e) => {
              setSelectedValue(e.target.value);
              setAutocompleteValue(null);
            }}
          >
            <MenuItem value="mobno">Mobile</MenuItem>
            <MenuItem value="pincode">Pin code</MenuItem>
            <MenuItem value="city">City</MenuItem>
            <MenuItem value="specialization">Specialization</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={2}>
          <Autocomplete
            options={autocompleteOptions}
            value={autocompleteValue}
            onChange={(event, newValue) => setAutocompleteValue(newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Search" size="small" fullWidth />
            )}
          />
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleButtonClick}
          >
            Search
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleClearButtonClick}
          >
            Clear
          </Button>
        </Grid>
      </Grid>

      <Paper
        elevation={3}
        style={{
          padding: "20px",
          marginTop: "20px",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <DataGrid
          density="compact"
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
        />
      </Paper>
    </div>
  );
}


