import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { addUser, updateUser } from "../../lib/api-users";
import MRLTable from "./MRLTable";
import { useNavigate } from 'react-router-dom';
import CustomSnackbar from "../../components/ui/SnackbarComponent";
import {  validateEmail, validateMobileNumber } from "../../utils/validationUtilites";

export default function MRList() {
  const navigate=useNavigate()
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  
  const defaultJoiningDate = new Date();
  const [formData, setFormData] = useState({
    mrusername: "",
    mrpassword: "",
    confirmPassword: "",
    mrfname: "",
    mrlname: "",
    mrcontactno: "",
    mremailid: "",
    mraddress: "",
    joingdate: defaultJoiningDate.toISOString().split("T")[0],
  });

  const [selectedRow, setSelectedRow] = useState(null);
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  useEffect(() => {
    if (isUpdateMode && selectedRow) {
      setFormData({
        mrusername: selectedRow.mrusername,
        mrpassword: selectedRow.mrpassword,
        confirmPassword: selectedRow.confirmPassword,
        mrfname: selectedRow.mrfname,
        mrlname: selectedRow.mrlname,
        mrcontactno: selectedRow.mrcontactno,
        mremailid: selectedRow.mremailid,
        mraddress: selectedRow.mraddress,
        joingdate: selectedRow.joingdate,
      });
    } else {
      setFormData({
        mrusername: "",
        mrpassword: "",
        confirmPassword: "",
        mrfname: "",
        mrlname: "",
        mrcontactno: "",
        mremailid: "",
        mraddress: "",
        joingdate: defaultJoiningDate.toISOString().split("T")[0],
      });
    }
  }, [isUpdateMode, selectedRow]);

  const handleEdit = (rowData) => {
    setSelectedRow(rowData);
    setIsUpdateMode(true);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "mrcontactno" && !validateMobileNumber(value)) {
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const id = selectedRow ? selectedRow.mrid : null;


  const handleSubmit = async () => {
    try {
      if (isUpdateMode) {
        const response = await updateUser(formData, id);
        console.log("User updated successfully:", response.data);
        handleSnackbarOpen("User updated successfully!");
      } else {
        const response = await addUser({
          password: formData.mrpassword,
          username: formData.mrusername,
          firstName: formData.mrfname,
          lastName: formData.mrlname,
          mrcontactno: formData.mrcontactno,
          email: formData.mremailid,
          address: formData.mraddress,
          joingdate: formData.joingdate,
        });
  
        console.log("User added successfully:", response.data);
  

        handleSnackbarOpen("User added successfully!");
        navigate('/MRList');
      }
      setFormData({
        mrusername: "",
        mrpassword: "",
        confirmPassword: "",
        mrfname: "",
        mrlname: "",
        mrcontactno: "",
        mremailid: "",
        mraddress: "",
        joingdate: defaultJoiningDate.toISOString().split("T")[0],
      });
  

    } catch (error) {
      console.error("Error:", error.message);
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
    <Grid container spacing={1} sx={{ marginLeft: "8%" }}>
      <Grid item xs={2}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <div
              style={{
                backgroundColor: "#00ba8b",
                width: "100%",
                padding: "5px",
                border: "1px solid #000",
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              <LocalHospitalIcon style={{ marginRight: "8px" }} />
              NEW MR
            </div>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <TextField
                  label="Username"
                  size="small"
                  sx={{ marginBottom: "10px" }}
                  name="mrusername"
                  value={formData.mrusername}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Password"
                  size="small"
                  sx={{ marginBottom: "10px" }}
                  name="mrpassword"
                  value={formData.mrpassword}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Confirm Password"
                  size="small"
                  sx={{ marginBottom: "10px" }}
                  name="confirmPassword"
                  value={
                    selectedRow
                      ? selectedRow.confirmPassword
                      : formData.confirmPassword
                  }
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="First Name"
                  size="small"
                  sx={{ marginBottom: "10px" }}
                  name="mrfname"
                  value={formData.mrfname}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Last Name"
                  size="small"
                  sx={{ marginBottom: "10px" }}
                  name="mrlname"
                  value={formData.mrlname}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Mobile no."
                  size="small"
                  sx={{ marginBottom: "10px" }}
                  name="mrcontactno"
                  value={formData.mrcontactno}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Email Id"
                  size="small"
                  sx={{ marginBottom: "10px" }}
                  name="mremailid"
                  value={formData.mremailid}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Address"
                  size="small"
                  sx={{ marginBottom: "10px" }}
                  name="mraddress"
                  value={formData.mraddress}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              {isUpdateMode ? "Update" : "Submit"}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={8}>
    
        <MRLTable onEdit={handleEdit} />
      </Grid>
      <CustomSnackbar
        open={snackbarOpen}
        message={snackbarMessage}
        onClose={handleSnackbarClose}
      />
    </Grid>
  );
}
