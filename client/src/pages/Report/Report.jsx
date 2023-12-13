import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormControl } from "@mui/material";

const Report = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: "Option 1" },
    { label: "Option 2" },
    { label: "Option 3" },
  ];

  const handleButtonClick = () => {
    console.log("Selected Option:", selectedOption);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
  };

  return (
    <>
      <Grid container spacing={5} sx={{ marginLeft: "100px" }}>
        <Grid item xs={12} sm={4}>
          <Autocomplete
            options={options}
            getOptionLabel={(option) => option.label}
            onChange={(event, value) => setSelectedOption(value)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose an option"
                variant="outlined"
                fullWidth
                size="small"
              />
            )}
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <FormControl fullWidth>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                placeholder="DOB"
                format="MMM-DD-YYYY"
                slotProps={{
                  textField: {
                    size: "small",
                    name: "dob",
                  },
                }}
              />
            </LocalizationProvider>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={2}>
          <FormControl fullWidth>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                placeholder="DOB"
                format="MMM-DD-YYYY"
                slotProps={{
                  textField: {
                    size: "small",
                    name: "dob",
                  },
                }}
              />
            </LocalizationProvider>
          </FormControl>
        </Grid>

        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleButtonClick}
            size="small"
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Report;
