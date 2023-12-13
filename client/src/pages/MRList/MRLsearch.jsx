import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';

export default function MRLsearch() {
  return (
    <Grid container spacing={2} alignItems="center" justifyContent="flex-end" direction="row">
      <Grid item>
        <FormControl variant="outlined" size="small" fullWidth sx={{marginTop:"10px"}}>
          <InputLabel>Selector</InputLabel>
          <Select label="Selector">
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </Select>
          <FormHelperText></FormHelperText>
        </FormControl>
      </Grid>
      <Grid item>
        <TextField label="Text Field 2" variant="outlined" margin="normal" fullWidth size="small" />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" size="small">
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}
